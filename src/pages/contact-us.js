import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Contact from '../components/contact-us';
import Footer from '../components/footer';

<<<<<<< HEAD
const ContactUS = () => 
        <div>
            <SEO />
            <div className='base px-3 md:px-5 lg:px-10 bg-base'>
                <Header />
                <Contact />
                <Footer />
            </div>
        </div>
    
export default () => {
    return <ContactUS />;
};
=======
const ContactUS = () => (
  <div>
    <SEO />
    <div className='base px-3 md:px-5 lg:px-10 bg-base'>
      <Contact />
      <Footer />
      <Header />
    </div>
  </div>
);

export default () => {
  return <ContactUS />;
};
>>>>>>> 552f176bd6d01dbb55d2f82db7157b6353b0ca14
