import React from 'react';
import SEO from './SEO';
import Footer from './footer';
import Header from './header';
import {About} from './about-us'
const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <div className='flex flex-col h-screen justify-center items-center bg-base w-full'>
        <div className='w-6/12'>
          <h1 className='font-title-oswald text-6xl text-secondary uppercase'>
            Lorem ipsum
          </h1>
          <p className='text-gray-500 font-sans'>
            Ad amet adipisicing mollit aute elit commodo ea culpa pariatur
            laboris est duis consectetur irure. Ipsum reprehenderit excepteur eu
            eiusmod. Ex dolore cillum nostrud eu minim veniam nisi quis
            adipisicing qui esse reprehenderit velit. Aliquip pariatur amet
            dolor consequat minim nostrud cupidatat deserunt veniam irure
            pariatur. Irure minim aliquip pariatur minim mollit ullamco labore
            culpa amet eu eiusmod aliqua nisi. Anim tempor sint commodo nostrud
            laborum esse. Elit in deserunt esse magna pariatur ullamco proident
            non deserunt in cillum consequat.
          </p>
          <button className='text-primary bg-base-light px-4 py-1 rounded-full my-3'>
            hey
          </button>
        </div>
      </div>
      <About/>
      <Footer />
    </>
  );
};

export default Layout;
