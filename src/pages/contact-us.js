import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Contact from '../components/contact-us';
import Footer from '../components/footer';

const ContactUs = () => (
  <div>
    <SEO />
    <div className='base bg-base'>
      <Header />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default ContactUs;
