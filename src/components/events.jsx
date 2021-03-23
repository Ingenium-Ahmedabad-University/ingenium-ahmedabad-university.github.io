import React, { useEffect } from 'react';
import e2 from '../images/IOT.png';
import e1 from '../images/cnc.png';
import e4 from '../images/kaggle.jpeg';
import e3 from '../images/E-treasure.jpeg';
import e5 from '../images/codefi.jpeg';
import e6 from '../images/mechathon.jpeg';
import e7 from '../images/CSE.png';
import e8 from '../images/industrytalk.png';
import e9 from '../images/auction.jpeg';
import '../css/custom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'gatsby';

const events_data = [
  {
    category: 'Workshops',
    event: [
      /*{
        type: 'Mechanical...',
        detail: [
          {
            desc:
              'In the talk Dr. Srinivas, ISRO HQ, Bangalore, would be explaining what is FEA and how it is used to design space components.',
            date: '3rd April, 2-3:30pm',
            title: 'FEA in Space Talk',
            image: e1,
          },
          {
            desc: 'Workshop by Harshal Sir',
            title: 'Robotics Workshop',
            date: '4th April, 11-12:30 pm',
            image: e1,
          },
          {
            desc:
              'Workshop on Condition monitoring: a lifeline for preventing failures of rotating machines by Akhand Sir',
            title: 'Machine Fault Diagnosis',
            date: '3rd April, 2-3:30pm',
            image: e1,
          },
        ],
      },*/
      {
        type: 'Computer Science',
        detail: [
          {
            desc:
              'Enhance your app development skills by designing mobile, web, and desktop applications with a single codebase using Flutter.',
            title: 'Careers in CSE',
            date: '27th March, 12 pm',
            image: e7,
            url: '',
          },
          {
            desc:
              'If you wish to learn from the best and create something uber cool this season, here is the perfect opportunity! Talk by Kevin Naik',
            date: '21st March, 4 pm',
            title: 'Kickstart IOT',
            image: e2,
            url: 'kickstart-iot',
          },
        ],
      },
      {
        type: 'Chemical',
        detail: [
          {
            desc: 'Enhance your knowledge!',
            title: 'Talk on Project Management ',
            date: '27th March, 12 pm',
            image: e8,
            url: '',
          },
        ],
      },
    ],
  },
  {
    category: 'Contests',
    event: [
      {
        type: 'Computer Science',
        detail: [
          {
            desc: 'Upcoming!!',
            date: '3rd April, 2-5 pm',
            title: 'Codefi',
            image: e5,
            url: '',
          },
          {
            desc: 'Upcoming!!',
            date: '3rd April, 5-7 pm',
            title: 'E-treasure Hunt',
            image: e3,
            url: 'e-treasure-hunt',
          },
          {
            desc: 'Upcoming!!',
            date: '2nd April, 8am',
            title: 'Kaggle Competition',
            image: e4,
            url: 'kaggle-competition',
          },
          {
            desc: 'Upcoming!!',
            date: '4th April, 10-6 pm',
            title: 'Iot Auction',
            image: e9,
            url: 'iot-auction',
          },
        ],
      },
      {
        type: 'Chemical',
        detail: [
          {
            desc:
              'Test your problem-solving and tactical skills to overcome hinderance of the production of the end product',
            date: '2nd-3rd April, 1pm onwards',
            title: 'Need for solution',
            image: e1,
            url: '',
          },
          {
            desc:
              'A quiz-based event that contains the structure of testing wits, strategies, and knowledge of a true Chemist/Chemical Engineer!',
            date: '3rd April, 10-12am',
            title: 'Chemical Hunt ',
            image: e1,
            url: '',
          },
          {
            desc:
              'An ultimate competition where teams compete with each other to reach the treasure!',
            date: '4th April, 10-12 pm',
            title: 'Road to treasure',
            image: e1,
            url: '',
          },
        ],
      },
      {
        type: 'Mechanical',
        detail: [
          {
            desc:
              'It is a competition in which max 4 membered team would solve an industrial problem statement in a time of 32 hours.',
            title: 'Mechathon V2.0',
            date: ' 27-28 March, 9am-5pm',
            image: e6,
            url: '',
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'Quiz on Automobiles',
            image: e1,
            url: '',
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'Meme Story',
            image: e1,
            url: '',
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'E-Gaming Fests',
            image: e1,
            url: '',
          },
          {
            desc: 'Upcoming!!',
            date: 'TBA',
            title: 'Identify the car',
            image: e1,
            url: '',
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
          <h1
            id={el.category}
            className='event_title text-3xl md:text-5xl text-center pt-16 pb-3 bg-gradient-to-br from-red-500 to-indigo-400 social-bg'
          >
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
                  <div> <Link to={`${det.url}`}>
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
                    </div> </Link>
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
