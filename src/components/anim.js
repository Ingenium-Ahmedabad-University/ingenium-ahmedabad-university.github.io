import React, { useRef, useEffect } from 'react';
import { gsap, Bounce } from 'gsap';

const Hero = () => {
  const refText = useRef(null);
  const refBox = useRef(null);
  const refDates = useRef(null);
  const refDot = useRef(null);
  const refHandText = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(refDot.current, {
      css: { bottom: '5vw' },
      ease: Bounce.easeOut,
      duration: 2.5,
    });
    tl.to(refBox.current, { x: 0, duration: 2 });
    tl.to(refBox.current, { yPercent: -50, height: '1.1em', duration: 1.5 });
    tl.to(refText.current, {
      css: {
        backgroundImage: 'linear-gradient(to right,#f05454, #f05454 )',
      },
      duration: 0.1,
    });
    tl.to(refBox.current, { yPercent: 0, height: 0, duration: 0.2 });
    tl.to(refDates.current, { y: 0, delay: 0.5 });
    tl.to(refHandText.current, { opacity: 0.8 });
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
      <div className='dot-me' ref={refDot} />
      <div
        className='hand-text font-shadow-into-light text-center tracking-wider'
        ref={refHandText}
      >
        Coming Soon !
      </div>

      <div className='relative'>
        <div
          className='bg-secondary absolute text-5xl md:text-8xl lg:text-9xl strike h-px w-full z-0'
          ref={refBox}
        />
        <h1
          className='text-base font-montserrat font-semibold text-5xl line-height125
         md:text-8xl lg:text-9xl bg-clip-text z-10 relative text-stroke-transparent'
          ref={refText}
        >
          Ingenium'21
        </h1>
        <div className='overflow-hidden hide-dates-wrapper text-xl md:text-2xl lg:text-3xl'>
          <div className='text-gray-300 text-right hide-dates' ref={refDates}>
            1-4 April,2021
          </div>
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
