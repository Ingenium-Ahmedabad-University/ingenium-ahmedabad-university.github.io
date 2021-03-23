import React, { useRef, useEffect } from 'react';
import { gsap, Bounce } from 'gsap';
import { Draggable } from 'gsap/all';
import { navigate } from 'gatsby';

const Hero = () => {
  const refText = useRef(null);
  const refBox = useRef(null);
  const refDates = useRef(null);
  const refDot = useRef(null);
  const refHandText = useRef(null);
  const refDropZone = useRef(null);
  const refDragMe = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create('.dot-me', {
      type: 'x,y',
      bounds: document.getElementsByClassName('dot-me-container'),
      edgeResistance: 1,
      onDrag: hitTest,
      onDragEnd: hitTestEnd,
    });
  }, []);
  const hitTest = (e) => {
    if (Draggable.hitTest(e, refDropZone.current)) {
      gsap.to(refDropZone.current, { scale: 1.2, opacity: 1 });
    } else {
      gsap.to(refDropZone.current, { scale: 1, opacity: 0.7 });
    }
  };
  const redirectto = () => navigate('/events/');

  const hitTestEnd = (e) => {
    if (Draggable.hitTest(e, refDropZone.current)) {
      let tl = gsap.timeline({ onComplete: redirectto });
      tl.to(refDropZone.current, { backgroundColor: '#f05454' });
      tl.to(refDates.current, { opacity: 0, duration: 0.01 });
      tl.to(refHandText.current, { opacity: 0, duration: 0.01 });
      tl.to(refDropZone.current, { scale: 100, duration: 1.2 });
      tl.to(refDot.current, { opacity: 0, duration: 0.01 });
      tl.to(refText.current, { opacity: 0, duration: 0.01 });
      tl.to(refDropZone.current, { left: 0, top: 0, scale: 0 });
    }
  };

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(refDot.current, {
      css: { bottom: '5vw' },
      ease: Bounce.easeOut,
      duration: 2.5,
    });
    tl.to(refBox.current, { x: 0, duration: 2 });
    tl.to(refBox.current, { yPercent: -60, height: '1.05em', duration: 1.2 });
    tl.to(refText.current, {
      css: {
        backgroundImage: 'linear-gradient(to right,#f05454, #f05454 )',
      },
      duration: 0.1,
    });
    tl.to(refBox.current, { yPercent: 0, height: 0, duration: 0.2 });
    tl.to(refDates.current, { y: 0, delay: 0.5 });
    tl.to(refHandText.current, { opacity: 0.8 });
    tl.to(refDropZone.current, { opacity: 0.8 });
    tl.to(refDragMe.current, { opacity: 0.8 });
    tl.to(refText.current, {
      css: {
        backgroundImage: 'linear-gradient(to right,#f05454, #8a2387 )',
      },
      duration: 2,
      delay: 0.5,
    });
    tl.to(refText.current, {
      css: {
        backgroundImage: 'linear-gradient(to right,#8a2387,#f05454)',
      },
      duration: 2,
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <>
      <div className='relative'>
        <div>
          <div
            className='bg-secondary absolute text-5xl md:text-8xl lg:text-9xl strike h-px w-full z-0'
            ref={refBox}
          />
          <h1
            className='text-base font-montserrat font-semibold text-5xl line-height125
         md:text-8xl lg:text-9xl bg-clip-text relative text-stroke-transparent'
            ref={refText}
          >
            Ingenium'21
          </h1>
        </div>
        <div className='overflow-hidden hide-dates-wrapper text-xl md:text-2xl lg:text-3xl'>
          <div className='text-gray-300 text-right hide-dates' ref={refDates}>
            1-4 April,2021
          </div>
        </div>
      </div>

      {/* the dot and the dropzone */}
      <div className='fixed h-screen w-screen dot-me-container'>
        <div
          className='dot-me'
          ref={refDot}
          // onMouseLeave={() => {gsap.to(refDragMe.current,{opacity:0.8,duration:0.7})}}
          onMouseEnter={() =>
            gsap.to(refDragMe.current, { opacity: 0, duration: 0.2 })
          }
        >
          <div
            className='absolute drag-me-text text-sm pr-4 top-1/3 text-secondary opacity-0'
            ref={refDragMe}
          >
            drag me
          </div>
        </div>
        <div className='drop-zone' id='drop-zone' ref={refDropZone}>
          {/* <div className="absolute top-6 left-1 text-gray-50">drop here</div> */}
        </div>
      </div>
    </>
  );
};
const App = () => {
  return (
    <div className='w-screen h-screen bg-base grid place-items-center '>
      <Hero />
    </div>
  );
};

export default App;
