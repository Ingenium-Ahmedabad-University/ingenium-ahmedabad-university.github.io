import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Contact from '../components/contact-us';
import Footer from '../components/footer';
import leftGradient from './../images/gradients/events-gradient-left.svg';
import rightGradient from './../images/gradients/events-gradient-right.svg';

const ContactUs = () => (
  <div>
    <SEO />
    <div className='base'>
      <Header />
      <Contact />
      <Footer />
      <img src={leftGradient} alt='background gradient left' className='event-gradient-left'/>
      <img src={rightGradient} alt='background gradient right' className='event-gradient-right'/>
    </div>
  </div>
);

export default ContactUs;
