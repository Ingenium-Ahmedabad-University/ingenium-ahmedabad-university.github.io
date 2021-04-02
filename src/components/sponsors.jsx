import React from 'react';

import inkedstories from '../images/sponsor_logos/inked-stories.png';
import trendinginahmedabad from '../images/sponsor_logos/trendinginahmedabad.png';
import youthera from '../images/sponsor_logos/youth_era.png';

const data = [
  {
    name: 'Gold Sponsors',
    list: [
      {
        redirectUrl: 'https://www.meditab.com/',
        logoUrl:
          'https://lirp.cdn-website.com/b9c8e2cb/dms3rep/multi/opt/Transparent_Meditab%2BLogo%2B%2B%2BIMS%2BLogo%2B%281%29-720w-720w.png',
        name: 'Meditab',
        description: 'Search Engine',
      },
      {
        redirectUrl: 'https://www.silvertouch.com/',
        logoUrl:
          'https://www.silvertouch.com/wp-content/themes/silvertouch/assets/images-new/logo-white.png',
        name: 'Silver Touch',
        description: 'Search Engine',
      },
      {
        redirectUrl: 'https://therenaissance.co.in/',
        logoUrl:
          'https://therenaissance.co.in/wp-content/uploads/2018/06/Renaissance-logo.png',
        name: 'Renaissance',
        description: 'Renaissance',
      },
      {
        redirectUrl: 'https://www.instagram.com/youthera.clothing/',
        logoUrl: youthera,
        name: 'Youth Era',
        description: 'Renaissance',
      },
      //   {
      //     redirectUrl:
      //       'https://www.google.com/search?client=firefox-b-d&q=google',
      //     logoUrl:
      //       'https://githubuniverse.com/assets/img/sponsors/SonarSource%20-%20blanc.svg',
      //     name: 'Google',
      //     description: 'Search Engine',
      //   },
      //   {
      //     redirectUrl:
      //       'https://www.google.com/search?client=firefox-b-d&q=google',
      //     logoUrl:
      //       'https://githubuniverse.com/assets/img/sponsors/Codame_Badge_Logo_08_white.png',
      //     name: 'Google',
      //     description: 'Search Engine',
      //   },
      //   {
      //     redirectUrl:
      //       'https://www.google.com/search?client=firefox-b-d&q=google',
      //     logoUrl:
      //       'https://githubuniverse.com/assets/img/sponsors/Datree_Logo_1_color%20(1).png',
      //     name: 'Google',
      //     description: 'Search Engine',
      //   },
    ],
  },
  {
    name: 'Media Partners',
    list: [
      {
        redirectUrl: 'https://inkedstories.in/',
        logoUrl: inkedstories,
        name: 'Inked Stories',
        description: '',
      },
      {
        redirectUrl: 'https://www.instagram.com/trendinginahmedabad/?hl=en',
        logoUrl: trendinginahmedabad,
        name: 'Trending in Ahmedabad',
        description: '',
      },
      //   {
      //     redirectUrl:
      //       'https://www.google.com/search?client=firefox-b-d&q=google',
      //     logoUrl:
      //       'https://githubuniverse.com/assets/img/sponsors/Snyk-white%20(1).png',
      //     name: 'Google',
      //     description: 'Search Engine',
      //   },
      //   {
      //     redirectUrl:
      //       'https://www.google.com/search?client=firefox-b-d&q=google',
      //     logoUrl:
      //       'https://githubuniverse.com/assets/img/sponsors/Sauce-Labs_Vert_White_RGB.svg',
      //     name: 'Google',
      //     description: 'Search Engine',
      //   },
      //   {
      //     redirectUrl:
      //       'https://www.google.com/search?client=firefox-b-d&q=google',
      //     logoUrl:
      //       'https://githubuniverse.com/assets/img/sponsors/Contrast_Security%20Logo%20(white).svg',
      //     name: 'Google',
      //     description: 'Search Engine',
      //   },
      //   {
      //     redirectUrl:
      //       'https://www.google.com/search?client=firefox-b-d&q=google',
      //     logoUrl:
      //       'https://githubuniverse.com/assets/img/sponsors/Snyk-white%20(1).png',
      //     name: 'Google',
      //     description: 'Search Engine',
      //   },
    ],
  },
  //   {
  //     name: 'Media Partners',
  //     list: [
  //       {
  //         redirectUrl:
  //           'https://www.google.com/search?client=firefox-b-d&q=google',
  //         logoUrl:
  //           'https://githubuniverse.com/assets/img/sponsors/Sauce-Labs_Vert_White_RGB.svg',
  //         name: 'Google',
  //         description: 'Search Engine',
  //       },
  //       {
  //         redirectUrl:
  //           'https://www.google.com/search?client=firefox-b-d&q=google',
  //         logoUrl:
  //           'https://githubuniverse.com/assets/img/sponsors/Contrast_Security%20Logo%20(white).svg',
  //         name: 'Google',
  //         description: 'Search Engine',
  //       },
  //       {
  //         redirectUrl:
  //           'https://www.google.com/search?client=firefox-b-d&q=google',
  //         logoUrl:
  //           'https://githubuniverse.com/assets/img/sponsors/Snyk-white%20(1).png',
  //         name: 'Google',
  //         description: 'Search Engine',
  //       },
  //       {
  //         redirectUrl:
  //           'https://www.google.com/search?client=firefox-b-d&q=google',
  //         logoUrl:
  //           'https://githubuniverse.com/assets/img/sponsors/Sauce-Labs_Vert_White_RGB.svg',
  //         name: 'Google',
  //         description: 'Search Engine',
  //       },
  //       {
  //         redirectUrl:
  //           'https://www.google.com/search?client=firefox-b-d&q=google',
  //         logoUrl:
  //           'https://githubuniverse.com/assets/img/sponsors/Contrast_Security%20Logo%20(white).svg',
  //         name: 'Google',
  //         description: 'Search Engine',
  //       },
  //       {
  //         redirectUrl:
  //           'https://www.google.com/search?client=firefox-b-d&q=google',
  //         logoUrl:
  //           'https://githubuniverse.com/assets/img/sponsors/Snyk-white%20(1).png',
  //         name: 'Google',
  //         description: 'Search Engine',
  //       },
  //     ],
  //   },
];

const Card = ({ redirectUrl, logoUrl, name, description }) => (
  <div class='w-full max-w-sm mx-auto border border-base-light hover:border-primary sponsors-cards'>
    <a href={redirectUrl}>
      <div className='flex justify-center items-center bg-base-light w-full h-32 max-h-32'>
        <img className='sponsors-logo' src={logoUrl} alt={name} />
      </div>
      <div className='flex text-primary sponsors-content-box h-32 max-h-32 justify-center items-center'>
        <div className='align-middle text-center px-5'>
          <h3 className='font-sans font-bold text-xl my-2'>{name}</h3>
          {/* <p className='text-lg'>{description}</p> */}
        </div>
      </div>
    </a>
  </div>
);

const Sponsors = () => (
  <section id='sponsors'>
    <div className='pt-28'>
      {data.map((category, i) => {
        return (
          <div key={i} className='mb-24'>
            <h1 className='bg-gradient-to-br from-red-500 to-indigo-400 social-bg text-3xl font-bold sm:text-4xl'>
              {category.name}
            </h1>

            <hr className='border-t border-base-light my-5' />

            <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
              {category.list.map((sponsor, j) => {
                return (
                  <Card
                    redirectUrl={sponsor.redirectUrl}
                    logoUrl={sponsor.logoUrl}
                    name={sponsor.name}
                    description={sponsor.description}
                    key={`${i}_${j}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Sponsors;
