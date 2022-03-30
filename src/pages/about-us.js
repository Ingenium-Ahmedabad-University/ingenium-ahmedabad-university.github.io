import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import AboutUs from '../components/about-us';
import Footer from '../components/footer';
import Gradient from '../components/gradients';

const FaqPage = () => (
  <div>
    <SEO />
    <div className=''>
      <Header />
      <AboutUs />
      <Footer />
      <Gradient />
    </div>
  </div>
);

export default () => {
  return <FaqPage />;
};
