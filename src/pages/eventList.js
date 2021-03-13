import React from 'react';
import EventLists from '../components/eventlists';
import Footer from '../components/footer';
import Header from '../components/header';
import SEO from '../components/SEO';

const Eventpage = () => (
  <>
    <SEO />
    <div className='px-3 md:px-5 lg:px-10 top-0 absolute bg-base w-screen overflow-x-hidden'>
      <Header />
      <EventLists />
      <Footer />
    </div>
  </>
);

export default () => {
  return <Eventpage />;
};
