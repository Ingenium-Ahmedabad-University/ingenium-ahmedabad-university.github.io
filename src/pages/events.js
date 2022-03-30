import React from 'react';
import EventLists from '../components/events';
import Footer from '../components/footer';
import Header from '../components/header';
import SEO from '../components/SEO';
import Gradient from '../components/gradients';

const Eventpage = () => (
  <>
    <SEO />
    <div className='top-0 absolute w-screen overflow-x-hidden'>
      <Header />
      <EventLists />
      <Footer />
      <Gradient />
    </div>
  </>
);

export default () => {
  return <Eventpage />;
};
