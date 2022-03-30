import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Contact from '../components/contact-us';
import Footer from '../components/footer';
import Gradient from '../components/gradients';

const ContactUs = () => (
  <div>
    <SEO />
    <div className='base'>
      <Header />
      <Contact />
      <Footer />
      <Gradient />
    </div>
  </div>
);

export default ContactUs;
