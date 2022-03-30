import React from 'react';

import trendinginahmedabad from '../images/sponsor_logos/trendinginahmedabad.png';
import la_milano from '../images/sponsor_logos/la_milano.png';
import radiscan from '../images/sponsor_logos/radiscan.png';
import perpetual from '../images/sponsor_logos/perpetual.png';
import renaissance from '../images/sponsor_logos/renaissance.png';

const data = [
  {
    name: 'Associated with',
    list: [
      {
        redirectUrl: 'https://royaltechnosoft.com/',
        logoUrl:
          'https://royaltechnosoft.com/wp-content/uploads/2018/11/logo_white-1.png',
        name: 'Royal Technosoft',
        description: 'Royal Technosoft',
      },
      {
        redirectUrl: 'http://mfwfoods.com/',
        logoUrl: la_milano,
        name: 'La Milano',
        description: 'La Milano',
      },
      {
        redirectUrl: 'https://therenaissance.co.in/',
        logoUrl: renaissance,
        name: 'Renaissance',
        description: 'Renaissance',
      },
      {
        redirectUrl: 'https://www.facebook.com/RadiscanDiagnostics/',
        logoUrl: radiscan,
        name: 'Radiscan Diagnostics',
        description: 'Radiscan Diagnostics',
      },
      {
        redirectUrl:
          'https://www.facebook.com/people/Perpetual-Pharmaceuticals/100064076289768/',
        logoUrl: perpetual,
        name: 'Perpetual Pharmaceuticals',
        description: 'Perpetual Pharmaceuticals',
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
        redirectUrl: 'https://www.instagram.com/trendinginahmedabad/?hl=en',
        logoUrl: trendinginahmedabad,
        name: 'Trending in Ahmedabad',
        description: 'Trending in Ahmedabad',
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
  <div class='w-full max-w-sm mx-auto border border-transparent hover:border-primary sponsors-cards bg-blur-light'>
    <a href={redirectUrl}>
      <div className='flex justify-center items-center  w-full h-32 max-h-32'>
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
    <div className='pt-28 w-4/5 m-auto'>
      {data.map((category, i) => {
        return (
          <div key={i} className='mb-24'>
            <h1 className='bg-gradient-to-br from-secondary to-secondary-dark social-bg text-3xl font-bold sm:text-4xl'>
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
