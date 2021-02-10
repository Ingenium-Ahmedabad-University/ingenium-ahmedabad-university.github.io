import React from 'react';
import { Link } from 'gatsby';

const e_selction_data = [
  {
    title: 'Workshop',
    src:
      'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
  }
];
const EventSelection = () => {
  const data = e_selction_data;
  return (
    <>
      {data.map((e, i) => 
      <Link >
      <div className="h-screen w-full max-h-screen overflow-hidden md:w-10/12  md:max-h-3/4-screen md:mx-auto video-wrapper">
        <div className="backdrop grid place-content-center">
            <div className="text-6xl text-white">Workshops</div>
          </div>
          <video
            id='player1'
            className='h-full w-full'
            src={e.src}
            // onMouseEnter={event => event.target.play()}
            // onMouseOut={event => event.target.pause()}
            loop
            muted
            autoPlay
            preload='auto'
          />
      </div>
      </Link>
      )}
      </>
  );
};

export default EventSelection;
