import React, { useEffect, useState, useRef } from 'react';
import Matter from 'matter-js';

const thick = 10;

const Matter = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();

  const handleResize = () => {
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
        // showAngleIndicator: true,
        wireframes: false,
      },
    });

    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    console.log(cw, ch);

    // add bodies
    var stack = Composites.stack(20, 20, 16, 1, 0, 0, function (x, y) {
      return Bodies.circle((2 * x) / 3, (2 * y) / 3, cw > 800 ? 50 : 25, {
        render: {
          fillStyle: Common.choose(['#64B8FB', '#ff1cf7']),
          strokeStyle: Common.choose(['#64B8FB', '#ff1cf7']),
        },

        restitution: Matter.Common.random(0.4, 0.7),
      });
    });

    Composite.add(world, stack);

    const top = Bodies.rectangle(0, 0, 0, 0, {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
      },
    });

    const bottom = Bodies.rectangle(0, 0, 0, 0, {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
      },
    });

    const left = Bodies.rectangle(0, 0, 0, 0, {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
      },
    });

    const right = Bodies.rectangle(0, 0, 0, 0, {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
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
    <div className='relative p-2 min-h-screen min-w-screen max-h-screen max-w-screen flex items-center'>
      <div className='mx-auto'>
        <h1
          className='bg-gradient-to-br from-secondary to-secondary-dark font-montserrat font-semibold text-5xl line-height125
            md:text-8xl lg:text-9xl relative social-bg'
        >
          Ingenium'22
        </h1>
        <div className='overflow-hidden hide-dates-wrapper text-xl md:text-2xl lg:text-3xl'>
          <div className='text-gray-300 text-right'>8-10 April,2022</div>
        </div>
      </div>

      <div
        ref={boxRef}
        className='absolute top-0 left-0 min-w-screen min-h-screen max-h-screen max-w-screen'
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Matter;
