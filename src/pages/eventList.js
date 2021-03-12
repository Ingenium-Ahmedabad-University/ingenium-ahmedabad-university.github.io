import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Footer from '../components/footer';
import EventLists from '../components/eventlists';

const Eventpage = () => (
  <>
    <SEO />
    <div className='px-3 md:px-5 lg:px-10 top-0 absolute bg-base'>
      <EventLists />
      <Footer />
      <Header />
    </div>
  </>
);

export default () => {
  return <Eventpage />;
};
