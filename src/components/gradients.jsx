import React from 'react';
import leftGradient from './../images/gradients/events-gradient-left.svg';

const Gradient = () => (
  <>
    <img
      src={leftGradient}
      alt='background gradient left'
      className='event-gradient-left'
    />
    <img
      src={leftGradient}
      alt='background gradient right'
      className='event-gradient-right'
    />
  </>
);

export default Gradient;
