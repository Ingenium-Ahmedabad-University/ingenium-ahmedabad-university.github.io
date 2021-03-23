import React from 'react';
import { Link } from 'gatsby';
import { Icons, Suggestions } from './eventsPageUtils';

const Workshop = ({ dAndT, eventTitle, desc, speaker, desig, sImg, pUrl }) => (
  <section id='events-page'>
    <div className='container md:max-w-4/5 xl:max-w-7/10 mx-auto py-28'>
      {/* Links and Icons */}
      <div className='flex my-5 text-white'>
        <Link to='/' className='flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
            />
          </svg>
          Go Back
        </Link>
      </div>
      {/* Event and Speaker Details */}
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-between mb-5 sm:mb-8'>
        <div className='text-xl my-2 text-gray-400'>{dAndT}</div>
        <Icons eventUrl='https://www.google.com/' />
      </div>
      <div className='mb-6'>
        <h1 className='text-4xl sm:text-6xl py-3 font-bold bg-gradient-to-br from-red-500 to-indigo-400 social-bg'>
          {eventTitle}
        </h1>
        <p className='text-gray-400 text-lg py-3'>{desc}</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-center'>
        <div className='flex'>
          <div className='rounded-full w-40 mr-5'>
            <img src={sImg} alt='' className='rounded-full' />
          </div>
          <div className='flex items-center'>
            <div>
              <span className='text-white text-lg font-bold'>{speaker}</span>
              <br />
              <span className='text-lg text-white'>{desig}</span>
            </div>
          </div>
        </div>
        <div className='flex sm:justify-end'>
          <Link to='#'>
            {/* <button className='border-2 border-secondary hover:bg-secondary px-5 py-2 mt-8 sm:mt-0 font-bold text-white'> */}
            <button className='register-button px-5 py-2 mt-8 sm:mt-0 font-bold text-white'>
              REGISTER
            </button>
          </Link>
        </div>
      </div>
      {/* Poster and Suggestions */}
      <div className='my-10'>
        <hr className='border-t border-base-light' />
        <img src={pUrl} alt='' className='w-full max-w-2xl my-5 mx-auto' />
        <hr className='border-t border-base-light' />
      </div>
      {/* 
      <Suggestions
        eventName="Paying down technical debt at GitHub"
        speakerName="Keith Ballinger"
        speakerDetails="SVP, Engineering, GitHub"
        speakerImg="https://githubuniverse.com/assets/img/speakers/Keith_Ballinger_Headshot.jpg"
      /> 
      */}
    </div>
  </section>
);

export default Workshop;
