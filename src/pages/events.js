import React from 'react';
import EventLists from '../components/events';
import Footer from '../components/footer';
import Header from '../components/header';
import SEO from '../components/SEO';
import leftGradient from './../images/gradients/events-gradient-left.svg';
import rightGradient from './../images/gradients/events-gradient-right.svg';

const Eventpage = () => (
  <>
    <SEO />
    <div className='top-0 absolute w-screen overflow-x-hidden'>
      <Header />
      <EventLists />
      <Footer />
      <img src={leftGradient} alt='background gradient left' className='event-gradient-left'/>
      <img src={leftGradient} alt='background gradient right' className='event-gradient-right'/>
    </div>
  </>
);

export default () => {
  return <Eventpage />;
};
