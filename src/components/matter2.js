import React, { useEffect, useRef } from 'react';
import Matter, {
  Engine,
  Render,
  Bodies,
  World,
  Runner,
  Mouse,
  Composite,
  Composites,
  Common,
  MouseConstraint,
} from 'matter-js';

export const Mixed = function () {
  const scene = useRef();
  // const Engine = useRef(Engine.create());
  // const Runner = useRef(Engine.create());
  // const engine = useRef(Engine.create());
  // const engine = useRef(Engine.create());
  // const engine = useRef(Engine.create());

  // const engine = useRef(Engine.create());

  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

  const world = engine.world;

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;
    // create renderer
    const render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        showAngleIndicator: true,
      },
    });

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    Engine.run(engine.current);
    Render.run(render);

    // var Engine = Matter.Engine,
    // var Render = Matter.Render,
    //   Runner = Matter.Runner,
    //   Composites = Matter.Composites,
    //   Common = Matter.Common,
    //   MouseConstraint = Matter.MouseConstraint,
    //   Mouse = Matter.Mouse,
    //   Composite = Matter.Composite,
    //   Bodies = Matter.Bodies;

    Composite.add(world, stack);

    Composite.add(world, [
      // walls
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ]);

    //code from down

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var stack = Composites.stack(20, 20, 10, 5, 0, 0, function (x, y) {
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

    // Composite.add(world, stack);

    // Composite.add(world, [
    //   // walls
    //   Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    //   Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    //   Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    //   Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    // ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });

    // context for MatterTools.Demo
    // return {
    //   engine: engine,
    //   runner: runner,
    //   render: render,
    //   canvas: render.canvas,
    //   stop: function () {
    //     Matter.Render.stop(render);
    //     Matter.Runner.stop(runner);
    //   },
    // };

    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  // create engine
  // var engine = Engine.create(),
  //   world = engine.world;

  return (
    <div
    // onMouseDown={handleDown}
    // onMouseUp={handleUp}
    // onMouseMove={handleAddCircle}
    >
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

// Example.mixed.title = 'Mixed Shapes';
// Example.mixed.for = '>=0.14.2';

// if (typeof module !== 'undefined') {
//   module.exports = Example.mixed;
// }
