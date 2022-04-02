import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Sponsors from '../components/sponsors';
import Footer from '../components/footer';
import Gradient from '../components/gradients';

const SponsorsPage = () => (
  <div>
    <SEO />
    <div className='base'>
      <Header />
      <Sponsors />
      <Footer />
      <Gradient />
    </div>
  </div>
);

export default () => {
  return <SponsorsPage />;
};
