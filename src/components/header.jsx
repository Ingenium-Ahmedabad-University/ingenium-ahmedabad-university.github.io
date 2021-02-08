import React, { useState } from 'react';
import {Link} from "gatsby"
import logo_src from '../images/icon.svg';
const Logo = () => (
  <div className='fixed top-0 left-0'>
    <div className='m-4'>
      <img src={logo_src} alt='' />
    </div>
  </div>
);
const NavIcon = () => {
  const [nav_open, change_nav] = useState(false);
  return (
    <>
      <div
        className='fixed top-0 right-0 z-50 h-24 w-24 grid place-items-center'
        onClick={() => {
          console.log('state change');
          change_nav(!nav_open);
        }}
      >
        <div className='grid grid-row-2'>
          <div
            className={
              nav_open
                ? 'nav-bar w-10 rotateme45'
                : 'nav-bar w-10  rotateme45-back'
            }
          ></div>
          <div
            className={
              nav_open
                ? 'nav-bar w-10 rotateme-45'
                : 'nav-bar w-10 rotateme-45-back'
            }
          ></div>
        </div>
      </div>
      <NavMenu open={nav_open} />
    </>
  );
};
const NavOption = ({ name }) => {
  useState();
  return (
    <Link to="">
    <div className='group grid grid-cols-3 cursor-pointer h-16 lg:h-auto'>
      <div className='hidden h-px bg-black self-center w-0 lg:block' />
      <h1 className='text-right lg:text-left col-span-full lg:col-span-2 text-3xl lg:text-6xl transition-colors duration-700 lg:text-transparent font-title-abril italic text-stroke'>
        {name}
      </h1>
    </div>
    </Link>
  );
};

const NavMenu = ({ open }) => {
  const options = [
    { name: 'Home' },
    { name: 'About Us' },
    { name: 'Events' },
    { name: 'Competitions' },
    { name: 'Contact Us' },
    { name: 'FAQ' },
  ];
  return (
    <div className='fixed'>
      <div
        className={
          'absolute top-0 left-0 h-screen w-screen justify-center bg-orange-100 ' +
          (open ? ' flex nav-bg-in' : 'hidden')
        }
      >
        <div className='w-10/12 h-auto mt-20'>
          {options.map((e) => (
            <NavOption name={e.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <>
    <Logo />
    <NavIcon />
  </>
);

export default Header;
