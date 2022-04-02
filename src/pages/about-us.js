import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import AboutUs from '../components/about-us';
import Footer from '../components/footer';
import TP from '../components/TP';
import { Mixed } from '../components/matter';
import Matter from 'matter-js';
import { MatterStepOne } from '../components/matter2';
import Gradient from '../components/gradients';

const FaqPage = () => (
  <div>
    <SEO />
    <div className=''>
      <Header />
      <AboutUs />
      {/* <Mixed /> */}
      <MatterStepOne />
      <Footer />
      <Gradient />
    </div>
  </div>
);

export default () => {
  return <FaqPage />;
};
