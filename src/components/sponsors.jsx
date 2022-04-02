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
    ],
  },
];

const Card = ({ redirectUrl, logoUrl, name, description }) => (
  <div class='w-full max-w-sm mx-auto border border-gray-800 rounded-xl hover:border-primary sponsors-cards'>
    <a href={redirectUrl}>
      <div className='flex justify-center rounded-t-xl items-center bg-blur-light w-full h-32 max-h-32'>
        <img className='sponsors-logo' src={logoUrl} alt={name} />
      </div>
      <div className='flex text-primary sponsors-content-box h-32 max-h-32 justify-center items-center'>
        <div className='align-middle text-center px-5'>
          <h3 className='font-sans font-bold text-xl my-2'>{name}</h3>
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
