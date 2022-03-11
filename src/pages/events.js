import React from 'react';
import EventLists from '../components/events';
import Footer from '../components/footer';
import Header from '../components/header';
import SEO from '../components/SEO';

const Eventpage = () => (
  <>
    <SEO />
    <div className='top-0 absolute bg-base w-screen overflow-x-hidden'>
      <Header />
      <EventLists />
      <Footer />
    </div>
  </>
);

export default () => {
  return <Eventpage />;
};
