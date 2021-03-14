import React, { useEffect } from 'react';
import e1 from '../images/about_us2.jpg';
import '../css/custom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const events_data = [
  {
    category: 'Workshops',
    event: [
      {
        type: 'Mechanical...',
        detail: [
          {
            desc:
              'First, introduction of arduino would be given and the basics would be covered. Then tasks would be given based on the learning.',
            title: 'Arduino Workshop',
            date: '20th March, TBA',
            image: e1,
          },
          {
            desc:
              ' It would be a workshop on where the faults occur in our machines and how we can find them.',
            date: '2nd/3rd April, TBA',
            title: 'Faults in the Machines',
            image: e1,
          },
          {
            desc: 'Upcoming!!',
            title: 'Robotics Workshop',
            date: '4th April, TBA',
            image: e1,
          },
          {
            desc:
              'CNC Lathe, CNC Milling and Laser Cutting machines would be explained starting from the basics of CNC programming.',
            title: 'CNC Workshop',
            date: '20th March, TBA',
            image: e1,
          },
        ],
      },
      {
        type: 'Computer Science',
        detail: [
          {
            desc:
              'Enhance your app development skills by designing mobile, web, and desktop applications with a single codebase using Flutter.',
            title: 'Bootcamp Flutter',
            date: 'TBA',
            image: e1,
          },
          {
            desc:
              'You may not want to miss an opportunity to learn data analysis through two of the widely used data visualization libraries of Python!',
            date: 'TBA',
            title: 'Data-visualization',
            image: e1,
          },
          {
            desc:
              'Enhance your UI/UX of web applications with Progressive Web App',
            title: 'PWA',
            date: 'TBA',
            image: e1,
          },
          {
            desc:
              'If the idea of building something like Pokemon Go or HTC Vive has ever crossed your mind, then this the place for you.',
            title: 'AR/VR',
            date: 'TBA',
            image: e1,
          },
          {
            desc:
              'GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.',
            title: 'Github Actions',
            date: 'TBA',
            image: e1,
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'DL with Tensorflow',
            image: e1,
          },
        ],
      },
    ],
  },
  {
    category: 'Contests',
    event: [
      {
        type: 'Mechanical...',
        detail: [
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'Quiz on Automobiles',
            image: e1,
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'Meme Story',
            image: e1,
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'E-Gaming Fests',
            image: e1,
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'Identify the car',
            image: e1,
          },
        ],
      },
      {
        type: 'Computer Science',
        detail: [
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'Codefi',
            image: e1,
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'E-treasure Hunt',
            image: e1,
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'Kaggle Competition',
            image: e1,
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'Iot Auction',
            image: e1,
          },
        ],
      },
    ],
  },
];

const EventLists = () => {
  const data = events_data;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className='sm:mx-12 mx-6 my-12 lg:mx-18 pb-5'>
      {data.map((el, key) => (
        <div>
          <h1 id={el.category} className='event_title text-3xl md:text-5xl text-center pt-16 pb-3 bg-gradient-to-br from-red-500 to-indigo-400 social-bg'>
            {el.category}
          </h1>
          <div className='underline mx-auto md:w-64 w-40 h-1 items-center bg-gradient-to-br from-red-500 to-indigo-400'>
            {' '}
          </div>

          {el.event.map((typ, key1) => (
            <div>
              <h1 className='text-left font-bold text-xl md:text-3xl pt-12 pb-1 bg-gradient-to-br from-red-500 to-indigo-400 social-bg'>
                {typ.type}{' '}
              </h1>

              <div className='underline md:w-48 w-36 h-1 left-0 bg-gradient-to-br from-red-500 to-indigo-400'>
                {' '}
              </div>
              <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 sm:grid-cols-2 xl:gap-20 md:gap-16 py-10'>
                {typ.detail.map((det, key1) => (
                  <div>
                    <div
                      className='avatar relative h-64 w-full flex justify-center items-center text-center bg-cover bg-center'
                      data-aos='fade-up'
                      style={{ backgroundImage: `url(${det.image})` }}
                    >
                      <div className='absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900'></div>

                      <div className='desc z-10 tracking-tight bg-gray-800 bg-opacity-60 text-white'>
                        <span className=' font-bold md:text-2xl lg:text-3xl'>
                          {det.title}
                        </span>
                        <span className='detail px-2 pb-2'>
                          <span className='text-lg'>{det.date}</span>
                          <br /> {det.desc}
                        </span>
                      </div>
                    </div>
                    <div className='md_640px bg-black bg-opacity-50 rounded-b-xl p-2'>
                      <span className='font-bold text-lg'>{det.title}</span>
                      <br />
                      <span className=' text-sm py-2'>
                        {det.date}
                        <br />
                        {det.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default EventLists;
