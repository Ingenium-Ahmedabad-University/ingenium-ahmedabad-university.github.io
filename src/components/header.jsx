import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import logo_src from '../images/icon.svg';

const Logo = () => (
  <div className='flex items-center'>
    <Link to='/home'>
      <div className='mx-4 my-3'>
        <img src={logo_src} alt='' />
      </div>
    </Link>
  </div>
);

const NavIcon = () => {
  const options = [
    { name: 'Home', link: '' },
    { name: 'Events', link: 'events' },
    { name: 'Register', link: 'register' },
    { name: 'Contact Us', link: 'contact-us' },
    { name: 'Sponsors', link: 'sponsors' },
    { name: 'FAQ', link: 'faqs' },
  ];
  const [nav_open, change_nav] = useState(false);

  return (
    <>
      <div className='desktop-nav flex items-center'>
        <div className='pr-6 flex gap-4'>
          {options.map((e) => (
            <div className='text-white text-md font-semibold navText'>
              <Link to={`/${e.link}`}>{e.name}</Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className=' h-24 w-24 z-50 grid place-items-center cursor-pointer mobile-nav'
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
    { name: 'Events', link: 'events' },
    { name: 'Register', link: 'register' },
    { name: 'Contact Us', link: 'contact-us' },
    { name: 'Sponsors', link: 'sponsors' },
    { name: 'FAQ', link: 'faqs' },
  ];
  return (
    <>
      <div className='fixed top-0 left-0'>
        <div
          className={
            'absolute top-0 left-0 h-screen w-screen justify-center ' +
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
    </>
  );
};

const Header = () => {
  useEffect(() => {
    const updateNav = () => {
      try {
        let navbar = document.querySelector('.navbar-back');

        if (window.scrollY > 10) navbar.classList.add('blur');
        else navbar.classList.remove('blur');
      } catch (error) {
        console.log('no-nav');
      }
    };

    window.addEventListener('scroll', updateNav);

    return () => {
      window.removeEventListener('scroll', updateNav);
    };
  }, []);

  return (
    <div className='navbar-back flex z-10 justify-between sm:px-0 md:px-4 lg:px-12 xl:px-24'>
      <Logo />
      <NavIcon />
    </div>
  );
};

export default Header;
