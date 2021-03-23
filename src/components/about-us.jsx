import React from 'react';
import img from '../images/ingenium.png';

const AboutUs = () => (
  <>
    <div className='about-us-header text-white'>
      <div className='contianer flex h-full items-center justify-center bg-black bg-opacity-30'>
        <div className='relative top-1/4'>
          <p className='about-us-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-5'>
            Ingenium <br></br>2021
          </p>
          <p className='sub-heading md:text-xl'>
            Just some random text to get things started
          </p>
        </div>
      </div>
    </div>
    <div className='flex items-center justify-center py-16 px-6 bg-base-light'>
      <div className='max-w-lg'>
        <p className='center-heading text-2xl sm:text-3xl lg-text-4xl text-primary font-bold mb-5'>
          Some cool heading
        </p>
        <p className='center-text text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          nostrum laborum quaerat natus nulla ducimus deleniti illum velit
          mollitia voluptates, quas totam iure, harum consequuntur similique
          nesciunt earum hic quis.
        </p>
      </div>
    </div>
    <div className='contianer mx-auto md:max-w-4/5 lg:max-w-7/10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
      <div className='p-10'>
        <p className='text-2xl sm:text-3xl lg-text-4xl text-primary font-bold mb-5'>
          We are
        </p>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          nostrum laborum quaerat natus nulla ducimus deleniti illum velit
          mollitia voluptates, quas totam iure, harum consequuntur similique
          nesciunt earum hic quis.
        </p>
      </div>
      <div className='p-10'>
        <p className='text-2xl sm:text-3xl lg-text-4xl text-primary font-bold mb-5'>
          We are not
        </p>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          nostrum laborum quaerat natus nulla ducimus deleniti illum velit
          mollitia voluptates, quas totam iure, harum consequuntur similique
          nesciunt earum hic quis.
        </p>
      </div>
      <div className='p-10'>
        <p className='text-2xl sm:text-3xl lg-text-4xl text-primary font-bold mb-5'>
          What we have for you
        </p>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          nostrum laborum quaerat natus nulla ducimus deleniti illum velit
          mollitia voluptates, quas totam iure, harum consequuntur similique
          nesciunt earum hic quis.
        </p>
      </div>
    </div>
  </>
);

export default AboutUs;
