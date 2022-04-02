import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Footer from '../components/footer';
import Landing from '../components/landing';
import Gradient from '../components/gradients';

const FaqPage = () => (
  <div>
    <SEO />
    <div className=''>
      <Header />
      <Landing />
      <Footer />
      <Gradient />
    </div>
  </div>
);

export default () => {
  return <FaqPage />;
};
