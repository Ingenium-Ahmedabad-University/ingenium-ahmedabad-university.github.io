import React, { useEffect, useState, useRef } from 'react';
import Matter from 'matter-js';
import Svg1 from '../svg/noise-svgrepo-com.svg';
import Svg2 from '../svg/random-svgrepo-com.svg';
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
  var select = function (root, selector) {
    console.log(selector, root);
    console.log(Array.prototype.slice.call(root.querySelectorAll(selector)));
    return Array.prototype.slice.call(root.querySelectorAll(selector));
  };

  // const loadSvg = (url) => {
  //   console.log(loadSvg);
  //   return fetch(url)
  //     .then(function (response) {
  //       console.log(response.text());
  //       return response.text();
  //     })
  //     .then(function (raw) {
  //       return new window.DOMParser().parseFromString(raw, 'image/svg+xml');
  //     });
  // };
  async function loadSvg(url) {
    var x = await fetch(url);
    var y = await x.text();
    var z = new window.DOMParser().parseFromString(y, 'image/svg+xml');

    return z;
  }
  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies,
      Svg = Matter.Svg,
      Vertices = Matter.Vertices;

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
    // var stack = Composites.stack(2, 2, 2, 2, 0, 0, function (x, y) {
    //   var sides = Math.round(Common.random(1, 8));

    //   // round the edges of some bodies
    //   var chamfer = null;
    //   if (sides > 2 && Common.random() > 0.7) {
    //     chamfer = {
    //       radius: 10,
    //     };
    //   }

    //   switch (Math.round(Common.random(0, 1))) {
    //     case 0:
    //       if (Common.random() < 0.8) {
    //         return Bodies.rectangle(
    //           x,
    //           y,
    //           Common.random(25, 50),
    //           Common.random(25, 50),
    //           { chamfer: chamfer }
    //         );
    //       } else {
    //         return Bodies.rectangle(
    //           x,
    //           y,
    //           Common.random(80, 120),
    //           Common.random(25, 30),
    //           { chamfer: chamfer }
    //         );
    //       }
    //     case 1:
    //       return Bodies.polygon(x, y, sides, Common.random(25, 50), {
    //         chamfer: chamfer,
    //       });
    //   }
    // });

    // Composite.add(world, stack);
    console.log(Composite);
    // ['./components/tp.svg', './tp.svg', './tp.svg', './tp.svg'].forEach(
    //   function (path, i) {
    //     console.log(path);
    //     // const loadSvg =(url) => {
    //     //   console.log(loadSvg);
    //     //   return fetch(url)
    //     //     .then(function (response) {
    //     //       console.log(response.text());
    //     //       return response.text();
    //     //     })
    //     //     .then(function (raw) {
    //     //       return new window.DOMParser().parseFromString(raw, 'image/svg+xml');
    //     //     });
    //     // };
    //     async function loadSvg(url) {
    //       var x = await fetch(url);
    //       var y = await x.text();
    //       console.log(y);
    //       var z = new window.DOMParser().parseFromString(y, 'image/svg+xml');

    //       return z;
    //     }
    //     loadSvg(path).then(function (root) {
    //       var color = Common.choose([
    //         '#f19648',
    //         '#f5d259',
    //         '#f55a3c',
    //         '#063e7b',
    //         '#ececd1',
    //       ]);

    //       var vertexSets = ()=>{select(root, 'path').map(function (path) {
    //         return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4);
    //       })};
    //       vertexSets()

    //       Composite.add(
    //         world,
    //         Bodies.fromVertices(
    //           100 + i * 150,
    //           200 + i * 50,
    //           vertexSets,
    //           {
    //             render: {
    //               fillStyle: color,
    //               strokeStyle: color,
    //               lineWidth: 1,
    //             },
    //           },
    //           true
    //         )
    //       );
    //       console.log(Composite);
    //     });
    //   }
    // );

    // loadSvg('./svg/svg.svg').then(function (root) {
    //   var color = Common.choose([
    //     '#f19648',
    //     '#f5d259',
    //     '#f55a3c',
    //     '#063e7b',
    //     '#ececd1',
    //   ]);

    //   var vertexSets = select(root, 'path').map(function (path) {
    //     return Svg.pathToVertices(path, 30);
    //   });

    //   Composite.add(
    //     world,
    //     Bodies.fromVertices(
    //       400,
    //       80,
    //       vertexSets,
    //       {
    //         render: {
    //           fillStyle: color,
    //           strokeStyle: color,
    //           lineWidth: 1,
    //         },
    //       },
    //       true
    //     )
    //   );
    // });
    if (typeof fetch !== 'undefined') {
      var select = function (root, selector) {
        return Array.prototype.slice
          .call(root.querySelectorAll(selector))
          .map(function (path) {
            return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4);
          });
      };
      async function loadSvg(url) {
        var x = await fetch(url);
        var y = await x.text();
        var z = new window.DOMParser().parseFromString(y, 'image/svg+xml');

        return z;
      }

      ['./tp.svg', './tp.svg', './tp.svg', './tp.svg'].forEach(function (
        path,
        i
      ) {
        loadSvg(path).then(function (root) {
          var color = Common.choose([
            '#f19648',
            '#f5d259',
            '#f55a3c',
            '#063e7b',
            '#ececd1',
          ]);
          document.addEventListener('DOMContentLoaded', () => {
            // select(root, 'path');
            console.log(
              'asdijofoiadfjaewifaewipojfipoaewjfaewjfpaewipfjewafijewfijp'
            );
            var vertexSets = Array.prototype.slice
              .call(root.querySelectorAll('path'))
              .map(function (path) {
                return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4);
              });
            Composite.add(
              world,
              Bodies.fromVertices(
                100 + i * 150,
                200 + i * 50,
                vertexSets,
                {
                  render: {
                    fillStyle: color,
                    strokeStyle: color,
                    lineWidth: 1,
                  },
                },
                true
              )
            );
            loadSvg('./tp.svg').then(function (root) {
              var color = Common.choose([
                '#f19648',
                '#f5d259',
                '#f55a3c',
                '#063e7b',
                '#ececd1',
              ]);

              var vertexSets = select(root, 'path').map(function (path) {
                console.log(path);
                return Svg.pathToVertices(path, 30);
              });

              Composite.add(
                world,
                Bodies.fromVertices(
                  400,
                  80,
                  vertexSets,
                  {
                    render: {
                      fillStyle: color,
                      strokeStyle: color,
                      lineWidth: 1,
                    },
                  },
                  true
                )
              );
            });
          });
          // var vertexSets = select(root, 'path').map(function (path) {
          //   return Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4);
          // });
        });
      });
    } else {
      Common.warn('Fetch is not available. Could not load SVG.');
    }

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
        <div>{/* <Svg2 /> */}</div>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};
