import React, { useEffect, useState, useRef } from 'react';
import Matter from 'matter-js';

const thick = 10;

export const MatterStepOne = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();

  const handleResize = () => {
    console.log(boxRef.current.getBoundingClientRect());
    setContraints(boxRef.current.getBoundingClientRect());
  };

  const update_dims = () => {
    if (constraints) {
      let { width, height } = boxRef.current.getBoundingClientRect();

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;

      console.log(scene.engine.world.bodies);
      console.log(height, width);

      // Dynamically update floors
      const top = scene.engine.world.bodies[0];

      Matter.Body.setPosition(top, {
        x: width / 2,
        y: thick / 2,
      });

      Matter.Body.setVertices(top, [
        { x: 0, y: 0 },
        { x: width, y: 0 },
        { x: width, y: thick },
        { x: 0, y: thick },
      ]);

      const bottom = scene.engine.world.bodies[1];

      Matter.Body.setPosition(bottom, {
        x: width / 2,
        y: height - thick / 2,
      });

      Matter.Body.setVertices(bottom, [
        { x: 0, y: height - thick },
        { x: width, y: height - thick },
        { x: width, y: height },
        { x: 0, y: height },
      ]);

      const left = scene.engine.world.bodies[2];

      Matter.Body.setPosition(left, {
        x: thick / 2,
        y: height / 2,
      });

      Matter.Body.setVertices(left, [
        { x: 0, y: 0 },
        { x: thick, y: 0 },
        { x: thick, y: height },
        { x: 0, y: height },
      ]);

      const right = scene.engine.world.bodies[3];

      Matter.Body.setPosition(right, {
        x: width - thick,
        y: height / 2,
      });

      Matter.Body.setVertices(right, [
        { x: width - thick * 2, y: 0 },
        { x: width, y: 0 },
        { x: width, y: height },
        { x: width - thick * 2, y: height },
      ]);
    }
  };

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
      world = engine.world;

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        background: 'transparent',
        showAngleIndicator: true,
        wireframes: false,
      },
    });

    // add bodies
    var stack = Composites.stack(2, 2, 2, 2, 0, 0, function (x, y) {
      var sides = Math.round(Common.random(1, 8));

      // round the edges of some bodies
      var chamfer = null;
      if (sides > 2 && Common.random() > 0.7) {
        chamfer = {
          radius: 10,
        };
      }

      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            return Bodies.rectangle(
              x,
              y,
              Common.random(25, 50),
              Common.random(25, 50),
              { chamfer: chamfer }
            );
          } else {
            return Bodies.rectangle(
              x,
              y,
              Common.random(80, 120),
              Common.random(25, 30),
              { chamfer: chamfer }
            );
          }
        case 1:
          return Bodies.polygon(x, y, sides, Common.random(25, 50), {
            chamfer: chamfer,
          });
      }
    });

    Composite.add(world, stack);

    const top = Bodies.rectangle(0, 0, 0, 0, {
      isStatic: true,
      render: {
        fillStyle: 'blue',
      },
    });

    const bottom = Bodies.rectangle(0, 0, 0, 0, {
      isStatic: true,
      render: {
        fillStyle: 'blue',
      },
    });

    const left = Bodies.rectangle(0, 0, 0, 0, {
      isStatic: true,
      render: {
        fillStyle: 'blue',
      },
    });

    const right = Bodies.rectangle(0, 0, 0, 0, {
      isStatic: true,
      render: {
        fillStyle: 'blue',
      },
    });

    Composite.add(world, [top, bottom, left, right]);

    Engine.run(engine);
    Render.run(render);

    var mouse = Mouse.create(render.canvas);

    var mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    mouseConstraint.mouse.element.removeEventListener(
      'mousewheel',
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      'DOMMouseScroll',
      mouseConstraint.mouse.mousewheel
    );

    Composite.add(engine.world, mouseConstraint);
    Matter.World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    window.addEventListener('resize', handleResize);

    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTimeout(update_dims, 100);
  }, [scene, constraints]);

  return (
    <div className='relative border border-yellow-400 p-2 min-h-screen min-w-screen max-h-screen'>
      <button
        style={{
          cursor: 'pointer',
          display: 'block',
          textAlign: 'center',
          marginBottom: '16px',
          width: '100%',

          color: 'white',
        }}
        className='font-extrabold text-4xl mt-10'
        // onClick={() => handleClick()}
      >
        Ingenium
      </button>

      <div
        ref={boxRef}
        className='absolute top-0 left-0 border border-white min-w-screen min-h-screen max-h-screen'
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};
