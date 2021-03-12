import React, { useRef, useEffect } from 'react';
import { gsap,Bounce } from 'gsap';
import {Draggable} from 'gsap/all';
import {navigate} from 'gatsby';
const vw = (v) => window.innerWidth*(v/100)
const vh = (v) => window.innerHeight*(v/100)

const MesaRow = () => {
  const color_secondary = "#f0545450";
  const ref = []
  ref[1] = useRef(null);
  ref[2] = useRef(null)
  ref[3] = useRef(null)
  ref[4] = useRef(null)
  ref[5] = useRef(null)
  ref[6] = useRef(null)
  ref[7] = useRef(null)
  ref[8] = useRef(null)
  
  // const animation1 = () => {
  //   let i = Math.floor(Math.random()*8) +1;
  //   let tl = gsap.timeline()
  //   tl.to(ref[i].current,{backgroundColor:"#f05454",duration:0.5 })
  //   tl.to(ref[i].current,{backgroundColor:"transparent",duration:0.5 })

  //   setTimeout(() => animation1(),2000)
  // }
 
  // const animation2 = () => {
  //   let i = Math.floor(Math.random()*8) +1;
  //   let tl = gsap.timeline()
  //   tl.to(ref[i].current,{y:vh(-100),duration:0.5})
  //   tl.to(ref[i].current,{backgroundColor:color_secondary,duration:0.1})
  //   tl.to(ref[i].current,{y:vh(100),height:"200px",duration:1})
  //   tl.to(ref[i].current,{backgroundColor:"transparent",duration:0.5})
  //   tl.to(ref[i].current,{y:0,height:0,duration:0.1})
    
  //   setTimeout(() => animation2(),2000) 
  // }

  // useEffect(() => {
  //   animation2()
  // },[])

  return (
    <>
      <div className='h-0.5 w-0.5'ref={ref[1]}/>
      <div className='h-0.5 w-0.5'ref={ref[2]}/>
      <div className='h-0.5 w-0.5'ref={ref[3]}/>
      <div className='h-0.5 w-0.5'ref={ref[4]}/>
      <div className='h-0.5 w-0.5'ref={ref[5]}/>
      <div className='h-0.5 w-0.5'ref={ref[6]}/>
      <div className='h-0.5 w-0.5'ref={ref[7]}/>
      <div className='h-0.5 w-0.5'ref={ref[8]}/>
      </>
      )
}
const MesaGrid = () => {
  const ref = [];
  const arry = Array.from({length:8},(_,i)=> i)

  return (
    <div className='fixed w-screen h-screen grid grid-cols-8 justify-items-center items-center'>
      {arry.map((_,i) =><MesaRow key={i}/>)
      }
    </div>
  );
};
const Hero = () => {
  const refText = useRef(null);
  const refBox = useRef(null);
  const refDates = useRef(null);
  const refDot = useRef(null);
  const refHandText = useRef(null);
  const refDropZone = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create('.dot-me',
    {type:"x,y",
    bounds:document.getElementsByClassName("dot-me-container"),
    edgeResistance:1,
    onDrag:hitTest,
    onDragEnd:hitTestEnd
  })
  },[])
  const hitTest = (e) => {
    if(Draggable.hitTest(e,refDropZone.current)){
      gsap.to(refDropZone.current,{scale:1.2, opacity:1})
    }
    else{
      gsap.to(refDropZone.current,{scale:1, opacity:0.7})
    }
  }
  const redirectto = () => navigate("/events/react-workshop/")
  
  const hitTestEnd = (e)=> {
      if(Draggable.hitTest(e,refDropZone.current)){
        let tl = gsap.timeline({onComplete:redirectto});
        tl.to(refDropZone.current,{backgroundColor:"#f05454"})
        tl.to(refDates.current, { opacity: 0,duration:0.01 });
        tl.to(refHandText.current, { opacity: 0,duration:0.01 });
        tl.to(refDropZone.current,{scale:100,duration:1.2})
        tl.to(refDot.current,{opacity:0,duration:0.01})
        tl.to(refText.current,{opacity:0,duration:0.01})
        tl.to(refDropZone.current,{left:0,top:0,scale:0})
      } 
    }

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
    tl.to(refDropZone.current, { opacity: 0.8 });
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
        <div className='overflow-hidden hide-dates-wrapper text-xl md:text-2xl lg:text-3xl'>
          <div className='text-gray-300 text-right hide-dates' ref={refDates}>
            1-4 April,2021
          </div>
        </div>
      </div>

    {/* the dot and the dropzone */}
    <div className="fixed h-screen w-screen dot-me-container">
      <div className='dot-me' ref={refDot} />
      <div className="drop-zone" id="drop-zone" ref={refDropZone}/>
    </div>
    </>
  );
};
const App = () => {
  return (
    <div className='w-screen h-screen bg-base grid place-items-center '>
      <MesaGrid />
      <Hero />
    </div>
  );
};

export default App;
