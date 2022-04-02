import React from 'react';
import SEO from './SEO';
import Header from './header';

const HeroSection = () => (
  <div className='h-screen bg-base grid place-items-center text-secondary font-title-oswald'>
    <h1>Hero Section</h1>
  </div>
);

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className='base px-3 md:px-5 lg:px-10 bg-base'>
        <Header />
      </div>
    </>
  );
};

export default Layout;
