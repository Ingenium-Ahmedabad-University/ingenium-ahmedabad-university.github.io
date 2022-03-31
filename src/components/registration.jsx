import React from 'react';

const data = [
  {
    title: 'Tech Events',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '80',
    points: ['benefit #1', 'benefit #2', 'benefit #3'],
  },
  {
    title: 'Gaming Events',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '50',
    points: ['benefit #1', 'benefit #2', 'benefit #3'],
  },
  {
    title: 'Combo',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '100',
    points: ['benefit #1', 'benefit #2', 'benefit #3'],
  },
];

const Registration = () => (
  <section id='sponsors'>
    <div className='py-28 w-full sm:w-4/5 m-auto'>
      <div className='md:max-w-4/5 lg:max-w-3/5 mb-16 ml-8'>
        <h1 className='bg-gradient-to-br from-secondary to-secondary-dark social-bg text-3xl font-bold sm:text-4xl'>
          Only one step away!
        </h1>
        <p className='f3 mt-4 text-white text-lg'>
          Click the button below to register and associate yourself with the
          51st edition of Mood Indigo, IIT Bombay. Who knows, you might even get
          free coupons!
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {data.map((item) => {
          return (
            <div className='text-white text-md w-80 bg-blur-light border-t-4 border-transparent hover:border-primary sponsors-cards mx-8 p-8 rounded-xl'>
              <>
                <p className='text-2xl text-primary font-bold mb-6'>
                  {item.title}
                </p>
                <p className='mb-6'>{item.description}</p>
                <p className='text-4xl sm:text-5xl font-bold mt-6'>
                  ₹{item.price}
                </p>
                <p className='mb-10 text-gray-300'>per Person</p>
                <p className='font-bold mb-3'>Benefits: </p>
                {item.points.map((point) => (
                  <div className='font-medium flex items-center mb-1'>
                    <img
                      src='https://img.icons8.com/external-kiranshastry-solid-kiranshastry/28/64B8FB/external-check-multimedia-kiranshastry-solid-kiranshastry.png'
                      className='mr-2'
                    />
                    {point}
                  </div>
                ))}

                <button className='px-5 py-2 mt-10 font-bold border border-primary text-white rounded-md hover:bg-primary'>
                  Register
                </button>
              </>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
export default Registration;
