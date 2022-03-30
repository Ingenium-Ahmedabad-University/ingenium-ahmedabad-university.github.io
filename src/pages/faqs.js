import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import FAQs from '../components/faqs';
import Footer from '../components/footer';
import Gradient from '../components/gradients';

const FaqPage = () => (
  <div>
    <SEO />
    <div className='base'>
      <Header />
      <FAQs />
      <Footer />
      <Gradient />
    </div>
  </div>
);

export default () => {
  return <FaqPage />;
};
