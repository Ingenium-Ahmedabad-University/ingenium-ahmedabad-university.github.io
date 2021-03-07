import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import FAQs from '../components/faqs';
import Footer from '../components/footer';

const FaqPage = () => (
  <div>
    <SEO />
    <div className='base px-3 md:px-5 lg:px-10 bg-base'>
      <FAQs />
      <Footer />
      <Header />
    </div>
  </div>
);

export default () => {
  return <FaqPage />;
};
