import { Link } from 'gatsby';
import React, { useState } from 'react';
import logo_src from '../images/icon.svg';
const Logo = () => (
  <Link to='/'>
    <div className='fixed top-0 left-0'>
      <div className='m-4'>
        <img src={logo_src} alt='' />
      </div>
    </div>
  </Link>
);

const NavIcon = () => {
  const [nav_open, change_nav] = useState(false);
  return (
    <>
      <div
        className='fixed top-0 right-0 z-50 h-24 w-24 grid place-items-center cursor-pointer'
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
const NavOption = ({ name, link }) => {
  return (
    <Link to={`/${link}`}>
      <div className='group grid grid-cols-3 cursor-pointer h-16 lg:h-auto my-5'>
        <div className='grid col-2 mx-3'>
          <div className='hidden h-px width-transition bg-white self-center w-0 group-hover:w-full lg:block col-start-2 ' />
        </div>
        <h1 className='text-right lg:text-left col-span-full lg:col-span-2 text-3xl lg:text-6xl transition-colors duration-700 text-white lg:text-transparent group-hover:text-white text-stroke-white nav-font'>
          {name}
        </h1>
      </div>
    </Link>
  );
};

const NavMenu = ({ open }) => {
  const options = [
    { name: 'Home', link: '' },
    { name: 'Events', link: 'eventList' },
    { name: 'Competitions', link: 'eventList' },
    { name: 'Contact Us', link: 'contact-us' },
    { name: 'Sponsors', link: 'sponsors' },
    { name: 'FAQ', link: 'faqs' },
  ];
  return (
    <div className='fixed top-0 left-0 z-40'>
      <div
        className={
          'absolute top-0 left-0 h-screen w-screen justify-center z-50 ' +
          (open ? ' flex nav-bg-in bg-base-light' : 'hidden')
        }
      >
        <div className='w-10/12 h-auto mt-20'>
          {options.map((e) => (
            <NavOption name={e.name} link={e.link} />
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
