import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import AboutUs from '../components/about-us';
import Footer from '../components/footer';
import leftGradient from './../images/gradients/events-gradient-left.svg';
import rightGradient from './../images/gradients/events-gradient-right.svg';

const FaqPage = () => (
  <div>
    <SEO />
    <div className=''>
      <Header />
      <AboutUs />
      <Footer />
      <img src={leftGradient} alt='background gradient left' className='event-gradient-left'/>
      <img src={rightGradient} alt='background gradient right' className='event-gradient-right'/>
    </div>
  </div>
);

export default () => {
  return <FaqPage />;
};
