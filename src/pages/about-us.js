import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import AboutUs from '../components/about-us';
import Footer from '../components/footer';

const FaqPage = () => (
  <div>
    <SEO />
    <div className='bg-base'>
      <AboutUs />
      <Footer />
      <Header />
    </div>
  </div>
);

export default () => {
  return <FaqPage />;
};
