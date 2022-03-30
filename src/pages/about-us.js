import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import AboutUs from '../components/about-us';
import Footer from '../components/footer';
import TP from '../components/TP';
import { Mixed } from '../components/matter';
import Matter from 'matter-js';
import { MatterStepOne } from '../components/matter2';

const FaqPage = () => (
  <div>
    <SEO />
    <div className='bg-base'>
      <AboutUs />
      {/* <Mixed /> */}
      <MatterStepOne />
      <Footer />
      <Header />
    </div>
  </div>
);

export default () => {
  return <FaqPage />;
};
