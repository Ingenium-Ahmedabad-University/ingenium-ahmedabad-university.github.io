import React from 'react';

const Card = ({ redirectUrl, logoUrl, name, description }) => (
  <div class='w-full mx-auto border border-base-light hover:border-primary sponsors-cards'>
    <a href={redirectUrl}>
      <div className='flex justify-center items-center bg-base-light w-full h-32 max-h-32'>
        <img className='sponsors-logo' src={logoUrl} alt={name} />
      </div>
      <div className='flex text-primary sponsors-content-box h-32 max-h-32 items-center'>
        <div className='align-middle px-5'>
          <h3 className='font-sans-bold my-2'>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  </div>
);

const list = [
  {
    redirectUrl: 'https://www.google.com/search?client=firefox-b-d&q=google',
    logoUrl:
      'https://githubuniverse.com/assets/img/sponsors/Sauce-Labs_Vert_White_RGB.svg',
    name: 'Google',
    description: 'Search Engine',
  },
  {
    redirectUrl: 'https://www.google.com/search?client=firefox-b-d&q=google',
    logoUrl:
      'https://githubuniverse.com/assets/img/sponsors/Contrast_Security%20Logo%20(white).svg',
    name: 'Google',
    description: 'Search Engine',
  },
  {
    redirectUrl: 'https://www.google.com/search?client=firefox-b-d&q=google',
    logoUrl:
      'https://githubuniverse.com/assets/img/sponsors/Snyk-white%20(1).png',
    name: 'Google',
    description: 'Search Engine',
  },
  {
    redirectUrl: 'https://www.google.com/search?client=firefox-b-d&q=google',
    logoUrl:
      'https://githubuniverse.com/assets/img/sponsors/SonarSource%20-%20blanc.svg',
    name: 'Google',
    description: 'Search Engine',
  },
  {
    redirectUrl: 'https://www.google.com/search?client=firefox-b-d&q=google',
    logoUrl:
      'https://githubuniverse.com/assets/img/sponsors/Codame_Badge_Logo_08_white.png',
    name: 'Google',
    description: 'Search Engine',
  },
  {
    redirectUrl: 'https://www.google.com/search?client=firefox-b-d&q=google',
    logoUrl:
      'https://githubuniverse.com/assets/img/sponsors/Datree_Logo_1_color%20(1).png',
    name: 'Google',
    description: 'Search Engine',
    objectId: 2,
  },
];

const Sponsors = () => (
  <section id='sponsors'>
    <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 bg-base px-10 py-28'>
      {list.map((item, i) => {
        return (
          <Card
            redirectUrl={item.redirectUrl}
            logoUrl={item.logoUrl}
            name={item.name}
            description={item.description}
            key={i}
          />
        );
      })}
    </div>
  </section>
);

export default Sponsors;
