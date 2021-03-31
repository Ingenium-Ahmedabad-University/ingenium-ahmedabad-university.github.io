import React from 'react';
import { Link } from 'gatsby';
import img from '../images/backdrop.png';

const AboutUs = () => (
  <>
    <div className='about-us-header text-white'>
      <div className='contianer flex h-full items-center justify-center bg-black bg-opacity-40'>
        <div className='relative top-1/4'>
          <p className='about-us-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-5'>
            Ingenium <br></br>2021
          </p>
          <p className='sub-heading md:text-xl'>
            Where innovation is education
          </p>
        </div>
      </div>
    </div>
    {/* <div className='flex items-center justify-center py-16 px-6 bg-base-light'> */}
    <div className='flex items-center justify-center py-16 px-6'>
      <div className='max-w-2xl'>
        <p className='center-heading center-text text-3xl sm:text-4xl lg-text-5xl social-bg bg-gradient-to-br from-red-500 to-indigo-400 font-bold mb-5'>
          Tech-Fest @ Ahmedabad University
        </p>
        <p className='center-text text-white text-xl'>
          Ingenium is the official technology festival of Ahmedabad University
          hosted at the School of Engineering and Applied Science each year
          since 2016. It is a platform to provide opportunities to young and
          aspiring students to compete in various innovate events. We invite and
          host participants from all national level universities and institutes
          as well as institutes from other countries as well. This year Ingenium
          is online. We are successfully getting participation from nearly 60
          institutes across India.
          <Link
            to='/events'
            className='flex mt-12 justify-center hover:text-gray-300'
          >
            Check out our events
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6 ml-3 transform rotate-180'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
              />
            </svg>
          </Link>
        </p>
      </div>
    </div>
    {/* <div className='contianer mx-auto md:max-w-4/5 lg:max-w-7/10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
      <div className='p-10'>
        <p className='text-2xl sm:text-3xl lg-text-4xl text-primary font-bold mb-5'>
          We are
        </p>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          nostrum laborum quaerat natus nulla ducimus deleniti illum velit
          mollitia voluptates, quas totam iure, harum consequuntur similique
          nesciunt earum hic quis.
        </p>
      </div>
      <div className='p-10'>
        <p className='text-2xl sm:text-3xl lg-text-4xl text-primary font-bold mb-5'>
          We are not
        </p>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          nostrum laborum quaerat natus nulla ducimus deleniti illum velit
          mollitia voluptates, quas totam iure, harum consequuntur similique
          nesciunt earum hic quis.
        </p>
      </div>
      <div className='p-10'>
        <p className='text-2xl sm:text-3xl lg-text-4xl text-primary font-bold mb-5'>
          What we have for you
        </p>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          nostrum laborum quaerat natus nulla ducimus deleniti illum velit
          mollitia voluptates, quas totam iure, harum consequuntur similique
          nesciunt earum hic quis.
        </p>
      </div>
    </div> */}
  </>
);

export default AboutUs;
