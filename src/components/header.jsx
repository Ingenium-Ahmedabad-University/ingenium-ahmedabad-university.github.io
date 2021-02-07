import React, { useState } from 'react';
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
    <div
      className='fixed top-0 right-0'
      onClick={() => {
        console.log('state change');
        change_nav(!nav_open);
      }}
    >
      <div className='grid grid-row-2 py-8 px-6'>
        <div
          className={
            nav_open
              ? 'nav-bar w-10 bg-white rotateme45'
              : 'nav-bar w-10 bg-white rotateme45-back'
          }
        ></div>
        <div
          className={
            nav_open
              ? 'nav-bar w-10 bg-white rotateme-45'
              : 'nav-bar w-10 bg-white rotateme-45-back'
          }
        ></div>
      </div>
    </div>
  );
};

const NavMenu = () => <div></div>;

const Header = () => (
  <>
    <Logo />
    <NavIcon />
  </>
);

export default Header;
