import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import FAQs from '../components/faqs';
import Footer from '../components/footer';

const FaqPage = () => (
  <div>
    <SEO />
    <div className='base bg-base'>
      <Header />
      <FAQs />
      <Footer />
    </div>
  </div>
);

export default () => {
  return <FaqPage />;
};
