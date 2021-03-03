import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

const e_selction_data = [
  {
    title: 'Workshop',
    src:
      'https://ia800300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
  },
];
const EventSelectionBlock = () => {
  const data = e_selction_data;
  const [show_video, set_show_video] = useState(false);
  const inputref = useRef(null);
  const scrollHandler = (_) => {
    let rect = inputref.current.getBoundingClientRect();
    set_show_video(
      rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);
  return (
    <div ref={inputref}>
      {data.map((e, i) => (
        <Link id='v-link'>
          <VideoBlock show={show_video} src={e.src} />
        </Link>
      ))}
    </div>
  );
};
const VideoBlock = ({ show, src }) => {
  return (
    <div className={'video-wrapper ' + (show ? '' : 'hidden')}>
      <div className='backdrop grid place-content-center'>
        <div className='text-6xl text-white'>Workshops</div>
      </div>

      <video
        id='player1'
        className='h-full w-full'
        src={src}
        loop
        muted
        autoPlay
        preload='auto'
      />
    </div>
  );
};
// const isInViewport= (el)=> {
//   // const rect = el.getBoundingClientRect();
//   return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)

//     );
// }
export default EventSelectionBlock;
