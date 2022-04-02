import React from 'react';
import { Link } from 'gatsby';
import Matter from './matter';

const cardList = [
  {
    number: '6',
    detail: 'Years',
  },
  {
    number: '85+',
    detail: 'Colleges',
  },
  {
    number: '5000+',
    detail: 'Participants',
  },
  {
    number: '120+',
    detail: 'Events',
  },
  {
    number: '150+',
    detail: 'Workshops',
  },
];

const AboutUs = () => (
  <div className='flex items-center justify-center px-6'>
    <div className='max-w-2xl'>
      <p className='center-heading center-text text-3xl sm:text-4xl lg-text-5xl social-bg bg-gradient-to-br from-primary to-primary-dark font-bold mb-5'>
        Tech-Fest @ Ahmedabad University
      </p>
      <p className='center-text text-white text-xl'>
        Ingenium is the official technology festival of Ahmedabad University
        hosted at the School of Engineering and Applied Science each year since
        2016. It is a platform to provide opportunities to young and aspiring
        students to compete in various innovative events. We invite and host
        participants from all national universities and institutes. Moreover, we
        invite overseas institutes as well. This year, Ingenium 2022 is hybrid,
        presenting online and offline events. We have successfully counted
        participants from 50+ institutes across India, and counting more. We
        look forward to welcome you all!
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
);

const Cards = () => (
  <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full sm:w-4/5 mx-auto border-gray-300 pb-16'>
    {cardList.map((item) => (
      <div className='w-40 bg-blur-light rounded-xl mx-auto p-4'>
        <h1 className='text-secondary font-bold text-4xl pb-2'>
          {item.number}
        </h1>
        <p className='text-white text-lg'>{item.detail}</p>
      </div>
    ))}
  </div>
);

const Landing = () => (
  <>
    <Matter />
    <div className='bg-blur-light border-t border-b border-gray-600 mt-4 py-16'>
      <Cards />
      <AboutUs />
    </div>
  </>
);

export default Landing;
