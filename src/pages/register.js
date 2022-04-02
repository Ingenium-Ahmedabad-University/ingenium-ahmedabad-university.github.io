import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Footer from '../components/footer';
import Registration from '../components/registration';
import Gradient from '../components/gradients';

const RegisterPage = () => (
  <div>
    <SEO />
    <div className='base'>
      <Header />
      <Registration />
      <Footer />
      <Gradient />
    </div>
  </div>
);

export default RegisterPage;
