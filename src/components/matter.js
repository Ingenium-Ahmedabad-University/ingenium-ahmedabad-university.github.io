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
  const scene = useRef(null);
  const engine = useRef(Engine.create());
  // var Example = Example || {};
  // var Engine = Matter.Engine,
  var Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;
  // const engine = useRef(Engine.create());
  // create engine
  // var world = engine.world;
  var world = useRef(engine.current.world);
  // var engine = Engine.create(),
  //   world = engine.world;
  // console.log(engine, world);
  // const render = Render.create({
  //   element: scene.current,
  //   engine: engine.current,
  //   options: {
  //     width: cw,
  //     height: ch,
  //     wireframes: false,
  //     background: 'transparent',
  //   },
  // });
  // Render.run(render);

  useEffect(() => {
    var cw = document.body.clientWidth / 2;
    var ch = document.body.clientHeight / 4;
    // // create renderer
    // var render = Render.create({
    //   element: document.body,
    //   engine: engine,
    //   options: {
    //     width: 800,
    //     height: 600,
    //     showAngleIndicator: true,
    //   },
    // });
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'yellow',
      },
    });
    Render.run(render);
    // // create runner
    var runner = Runner.create();
    Runner.run(runner, engine.current);

    Composite.add(world.current, [
      // walls
      // Bodies.rectangle(400, 0, 800, 50, { isStatic: true }), //upper
      // Bodies.rectangle(400, 600, 800, 50, { isStatic: true }), //lower
      // Bodies.rectangle(800, 300, 50, 600, { isStatic: true }), //left

      // Bodies.rectangle(0, 300, 50, 600, { isStatic: true }), //right

      Bodies.rectangle(cw / 2, 0, cw, 50, { isStatic: true }), //upper
      Bodies.rectangle(cw / 2, ch, cw, 50, { isStatic: true }), //lower
      Bodies.rectangle(0, ch / 2, 50, ch, { isStatic: true }), //left
      Bodies.rectangle(cw, ch / 2, 50, ch, { isStatic: true }), //right

      Bodies.rectangle(400, 305, 200, 40, {
        isStatic: true,
        render: {
          fillStyle: 'pink',
          strokeStyle: 'transparent',
          text: {
            fillStyle: '#000000',
            content: 'Poojan',
            color: 'blue',
            size: 50,
          },
        },
      }),
    ]);

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
    Composite.add(world.current, stack);
    console.log(ch, cw);
    // cw = 500;
    // ch = 500;

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine.current, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });
    Composite.add(world.current, mouseConstraint);
    // // console.log(mouse);
    // // // // keep the mouse in sync with rendering
    render.mouse = mouse;
    // // // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 900 },
    });
    Engine.run(engine.current);
    Render.run(render);
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    };
  }, []);

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

  return (
    <>
      <div
        // onMouseDown={handleDown}
        // onMouseUp={handleUp}
        // onMouseMove={handleAddCircle}

        className='flex items-center justify-center'
      >
        {/* Hello World */}
        <div
          className='interactionBox'
          ref={scene}
          // style={{ width: '50%', height: '100%' }}
        />
      </div>
      )
    </>
  );
};

// Example.mixed.title = 'Mixed Shapes';
// Example.mixed.for = '>=0.14.2';

// if (typeof module !== 'undefined') {
//   module.exports = Example.mixed;
// }
