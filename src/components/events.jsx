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
import e10 from '../images/dev-con.png';
import e11 from '../images/web-dev.png';
import e12 from '../images/docker.png';
import e13 from '../images/arduino.png';
import e14 from '../images/NFS.png';
import e15 from '../images/chemical-hunt.png';
import e16 from '../images/road-to-treasure.png';
import '../css/custom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'gatsby';

const events_data = [
  {
    category: 'Contests',
    event: [
      {
        type: 'Computer Science',
        detail: [
          {
            desc:
              'In this event, a team of 3 members would be given a set of problems that they are supposed to solve under the given time constraint.',
            date: '3rd April, 2-5 pm',
            title: 'Codefi',
            image: e5,
            url: 'codefi',
          },
          {
            desc:
              'Treasure Hunt is not just about the hunt, it requires much more than that! Ingenium brings you one of its most exciting events.',
            date: '3rd April, 5-7 pm',
            title: 'E-treasure Hunt',
            image: e3,
            url: 'e-treasure-hunt',
          },
          {
            desc:
              'If you are a Data Science and Machine Learning enthusiast, get ready for an amazing competition we have for you.',
            date: '2nd April, 8 am',
            title: 'Kaggle Competition',
            image: e4,
            url: 'kaggle-competition',
          },
          {
            desc:
              'If you wish to flex or learn these skills, we bring you the perfect opportunity. One of the most anticipated events of the Ingenium is here!',
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
            date: '2nd-3rd April, 1 pm',
            title: 'Need for solution',
            image: e14,
            url: 'need-for-solution',
          },
          {
            desc:
              'A quiz-based event that contains the structure of testing wits, strategies, and knowledge of a true Chemical Engineer!',
            date: '3rd April, 10-12am',
            title: 'Chemical Hunt ',
            image: e15,
            url: 'chemical-hunt',
          },
          {
            desc:
              'An ultimate competition where teams compete with each other to reach the treasure!',
            date: '4th April, 10-12 pm',
            title: 'Road to treasure',
            image: e16,
            url: 'road-to-treasure',
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
            url: 'mechathon',
          },
          {
            desc:
              'There would be three different tournaments for the following games: CounterStrike: Global Offensive, Valorant and Rocket League.',
            date: 'TBA',
            title: 'E-Gaming Fests',
            image: e1,
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
            title: 'Identify the car',
            image: e1,
            url: '',
          },
        ],
      },
    ],
  },
  {
    category: 'Workshops',
    event: [
      {
        type: 'Computer Science',
        detail: [
          {
            desc:
              'Explore various career options available in CSE along with explaining which skills are needed for a specific career.',
            title: 'Careers in CSE',
            date: '27th March, 12 pm',
            image: e7,
            url: 'careers-in-cse',
          },
          {
            desc:
              'If you wish to learn from the best and create something uber cool this season, here is the perfect opportunity! Talk by Kevin Naik.',
            date: '21st March, 4 pm',
            title: 'Kickstart IOT',
            image: e2,
            url: 'kickstart-iot',
          },
          {
            desc:
              'Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.',
            date: '14th March, 3 pm',
            title: 'Docker',
            image: e12,
            url: 'docker',
          },
          {
            desc:
              'The Developer Console is an integrated development environment with a collection of tools you can use to create, debug, and test applications.',
            date: '13th March, 4 pm',
            title: 'Developer Console',
            image: e10,
            url: 'dev-con',
          },
          {
            desc:
              'Web Development is not just about designing or programming, it is about creating an interface for information and interaction!',
            date: '10th March, 5:30 pm',
            title: 'Web Development',
            image: e11,
            url: 'web-dev',
          },
        ],
      },
      {
        type: 'Mechanical',
        detail: [
          {
            desc:
              'Workshop would consist of introduction, basics of Arduino and end with interesting task based learning.',
            date: '24th March, 6-9pm',
            title: 'Arduino Workshop',
            image: e13,
            url: 'arduino',
          },
          {
            desc:
              'In the talk Dr. Srinivas, ISRO HQ, Bangalore, would be explaining what is FEA and how it is used to design space components.',
            date: '3rd April, 2-3:30pm',
            title: 'FEA in Space Talk',
            image: e1,
            url: 'space-talk',
          },
          {
            desc:
              'Workshop by Prof. Harshal Oza. This webinar will introduce the participants to the latest advances in industrial robotics.',
            title: 'Advances in Industrial Robotics',
            date: '4th April, 11-12:30 pm',
            image: e1,
            url: 'robotics',
          },
          {
            desc:
              'Workshop on Condition monitoring: a lifeline for preventing failures of rotating machines by Prof. Akhand.',
            title: 'Machine Fault Diagnosis',
            date: '3rd April, 2-3:30pm',
            image: e1,
            url: 'fault-daignosis',
          },
          {
            desc:
              'Workshop by Prof. Sanket: CNC Lathe, CNC Milling and Laser Cutting machines would be explained from the basics of CNC programming.',
            date: 'TBA',
            title: 'CNC Workshop',
            image: e1,
            url: 'cnc',
          },
        ],
      },
      {
        type: 'Chemical',
        detail: [
          {
            desc: 'Enhance your knowledge by an Industrial Talk!',
            title: 'Talk on Project Management ',
            date: '27th March, 12 pm',
            image: e8,
            url: 'industry-talk',
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
          <h1 className='event_title text-3xl md:text-5xl text-center pt-16 pb-3 bg-gradient-to-br from-red-500 to-indigo-400 social-bg'>
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

              <div className='underline md:w-40 w-28 h-1 left-0 bg-gradient-to-br from-red-500 to-indigo-400'>
                {' '}
              </div>
              <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 sm:grid-cols-2 xl:gap-20 md:gap-16 py-10'>
                {typ.detail.map((det, key1) => (
                  <div>
                    {' '}
                    <Link to={`${det.url}`}>
                      <div
                        className='avatar relative h-64 w-full flex justify-center items-center text-center bg-cover bg-center'
                        data-aos='fade-up'
                        style={{ backgroundImage: `url(${det.image})` }}
                      >
                        <div className='desc z-10 tracking-tight bg-gray-800 bg-opacity-60 text-white'>
                          <span className=' font-bold md:text-2xl lg:text-3xl'>
                            {det.title}
                          </span>
                          <span className='detail px-2 pb-2'>
                            <span className='text-lg'>{det.date}</span>
                            <br /> {det.desc}
                          </span>
                        </div>
                      </div>{' '}
                    </Link>
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
