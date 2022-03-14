import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Sponsors from '../components/sponsors';
import Footer from '../components/footer';

const SponsorsPage = () => (
  <div>
    <SEO />
    <div className='base bg-base'>
      <Header />
      <Sponsors />
      <Footer />
    </div>
  </div>
);

export default () => {
  return <SponsorsPage />;
};
