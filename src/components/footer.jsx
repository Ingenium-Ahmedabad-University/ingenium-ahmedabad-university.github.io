import React, { useState } from 'react';
import logo_src from '../images/icon.svg';
// import data from '../../content/data.json'
import send from '../images/send.png';

const contact_details = [
  {
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/instagram.svg',
    url: 'https://www.instagram.com/tech.ingenium/',
  },
  {
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/discord.svg',
    url: 'https://discord.gg/cRjurW4u',
  },
  {
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/gmail.svg',
    url: 'mailto: ingenium@ahduni.edu.in',
  },
];

const Newletter = () => {
  const [opened, changestate] = useState(false);
  return (
    <>
      <div
        className='inline-block relative cursor-pointer nl-link'
        onClick={() => {
          changestate(true);
          console.log('clicked');
        }}
      >
        <div className='h-px bg-gray-300 absolute w-full bottom-0' />
        Signup
      </div>
      <div
        id='modal'
        className={
          opened
            ? 'opacity-100 scale-100 visible'
            : 'opacity-0 scale-0 invisible'
        }
      >
        <div class='flex-item'>
          <div class='content'>
            <h2 class='title'>Enter Your E-Mail for updates</h2>
            <div class='field'>
              <input
                type='email'
                value=''
                aria-required='true'
                aria-invalid='true'
                placeholder='Email Address'
                required
              />
              <button type='submit'>
                <img class='h-6 w-13' src={send} alt=''></img>
              </button>
            </div>
          </div>
          <div class='close-button'></div>
        </div>
        <a
          id='back-screen'
          className='absolute w-full h-full opacity-70 bg-gray-900'
          onClick={() => changestate(false)}
        ></a>
      </div>
    </>
  );
};
const Footer = () => (
  <div className=''>
    <div className='flex justify-center pt-6'>
      <div className='w-full h-px bg-gray-900'></div>
    </div>
    {/* <div className='footer grid col-1 lg:row-1 lg:grid-flow-col row-gap-8 lg:gap-0 justify-center\items-center my-16 lg:my-8 mx-3 md:mx-5 lg:mx-10'>
      Signup
      <div className='font-sans text-gray-300 font-normal text-xl'>
        <Newletter />
        &nbsp; for latest Ingenium Updates
      </div>
      <div className='text-gray-300 flex items-center flex-col lg:grid lg:grid-flow-col'>
        <div classNmae='text-right'>
          Follow the event{' '}
          <span className='bg-gradient-to-br from-secondary to-secondary-dark social-bg'>
            #feelingenium
          </span>
        </div>
        <ul className='grid grid-flow-col justify-start gap-6 mx-4 my-4'>
          {contact_details.map((e, i) => (
            <a href={e.url} target='_blank'>
              <li key={i}>
                <img
                  height='24'
                  width='24'
                  src={e.icon}
                  className='hover:invert-5 invert-7'
                />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div> */}
    <div className='grid grid-cols-1 sm:grid-cols-2 py-5 justify-center text-gray-300 items-center'>
      <div className='flex justify-center sm:justify-end sm:-mr-3'>
        Follow the event{' '}
        <span className='bg-gradient-to-br from-secondary to-secondary-dark social-bg'>
          #feelingenium
        </span>
      </div>
      <div className='flex justify-center sm:justify-start sm:ml-3'>
        <ul className='grid grid-flow-col justify-start gap-6 mx-4 my-4'>
          {contact_details.map((e, i) => (
            <a href={e.url} target='_blank'>
              <li key={i}>
                <img
                  height='24'
                  width='24'
                  src={e.icon}
                  className='hover:invert-5 invert-7'
                />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
    <div className='w-full h-px bg-gray-900'></div>
    {/* logo and copy right */}
    <div className='grid grid-flow-row justify-center py-16 lg:py-10 lg:grid-flow-col lg:justify-start lg:items-center mx-3 md:mx-5 lg:mx-10'>
      <div className='flex justify-center'>
        <img src={logo_src} alt='' />
      </div>

      <div className='text-gray-300 text-sm font-sans lg:ml-3'>
        &copy; 2022 Ingenium, Ahmedabad University.
      </div>
    </div>
  </div>
);

export default Footer;
