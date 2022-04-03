import React, { Component } from 'react';

function accordionToggler(id) {
  const toggler = document.getElementById(`toggler_${id}`);
  const answer = document.getElementById(`answer_${id}`);

  toggler.classList.toggle('toggler_active');

  if (answer.style.height === 0 + 'px' || answer.style.height === '') {
    answer.style.height = answer.scrollHeight + 'px';
  } else {
    answer.style.height = 0 + 'px';
  }
}

const data = [
  {
    name: 'About',
    list: [
      {
        question: 'What is Ingenium?',
        answer:
          'Since 2016, the students at the School of Engineering and Applied Science organize Tech Ingenium, the annual technological fest of Ahmedabad University. ',
      },
      {
        question: 'Who can attend the event?',
        answer:
          'Students across all the universities of India can attend the fest. ',
      },

      {
        question: 'In which mode Tech Ingenium conducted this year?',
        answer: 'For the year 2022, the event will be held in hybrid mode. ',
      },
      {
        question: 'Who organises Ingenium?',
        answer:
          "Students from the Ahmedabad University's School of Engineering and Applied Sciences.",
      },
    ],
  },
  {
    name: 'Particpation',
    list: [
      {
        question: 'How to participate in the events organised?',
        answer:
          'Head over to register page and fill out the respective form for the events ',
      },
      {
        question: 'Is there a registration fee for participating?',
        answer:
          'Yes, there are three categories for registration. One for all the events, one for gaming events and the other for both. For more details head over to the register page.',
      },
      {
        question: 'What should I do after completing the registration?',
        answer:
          'For participating in the events , go to events page and you can find the registration for the particular event. You can register it by filling the google form of the particular event. ',
      },
    ],
  },
  {
    name: 'Events',
    list: [
      {
        question: 'When will the results of the events be announced?',
        answer:
          'The results will be announced during the closing ceremony of Ingenium.',
      },
      {
        question: 'Which events are going to be held online?',
        answer:
          'The events mode will be announced soon and details of each event will be on the events page.',
      },
      {
        question: 'What all events will be conducted?',
        answer: 'Tech and gaming events will be conducted.',
      },

      {
        question: 'How many events can I participate in?',
        answer:
          'As in total we are having around 15-20 events in total , you can participate in all events as per your convenience.',
      },

      {
        question: 'Who will be the judges of the event?',
        answer:
          'The entries will be judged by experts with a proven track record in their respective fields',
      },
    ],
  },
];

const Header = () => (
  <div
    className='container md:max-w-4/5 lg:max-w-3/5 mb-16 hero'
    data-detect-viewport
  >
    <div className='hero__content' data-animate-in='up'>
      <h1 className='mb-5 text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-br from-secondary to-secondary-dark social-bg'>
        Frequently asked questions
      </h1>
      <p className='f3 text-white text-lg'>
        You have questions, and we have (some) answers. If you can’t find what
        you’re looking for,&nbsp;
        <a
          href='https://www.instagram.com/tech.ingenium/'
          target='_blank'
          className='hover:text-gray-400'
        >
          <u>send us a note</u>
        </a>
        .
      </p>
    </div>
  </div>
);

const Tabs = ({ currentCategory, onCategoryChange }) => (
  <div className='container max-w-full'>
    {/* <div className='container max-w-full z-20'> */}
    <div className='flex overflow-auto'>
      {data.map((category, i) => {
        if (category.name === currentCategory) {
          return (
            <a
              className='flex align-middle text-white cursor-pointer text-lg pb-4 mr-10 capitalize relative tabs__tab current__tab'
              key={i}
              onClick={() => onCategoryChange(i)}
            >
              {category.name}
            </a>
          );
        } else {
          return (
            <a
              className='flex align-middle text-gray-400 hover:text-white cursor-pointer focus:text-white text-lg pb-4 mr-10 capitalize relative tabs__tab'
              key={i}
              onClick={() => onCategoryChange(i)}
            >
              {category.name}
            </a>
          );
        }
      })}
    </div>
    <hr className='border-t border-base-light mb-16' />
  </div>
);

const Question = ({ question, answer, id }) => (
  <div>
    <div
      className='flex justify-between mb-8 cursor-pointer quetiton-container'
      onClick={() => accordionToggler(id)}
    >
      <span className='text-white text-lg sm:text-xl md:text-2xl mr-2'>
        {question}
      </span>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          height='24px'
          width='24px'
          stroke='currentColor'
          className='text-white transition-all duration-500 ease-in'
          id={`toggler_${id}`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
    </div>
    <div
      className='h-0 overflow-hidden text-gray-400 transition-all duration-500 text-md sm:text-lg md:text-xl pl-4 md:pl-8 lg:pl-12 mb-8'
      id={`answer_${id}`}
    >
      <p>{answer}</p>
    </div>
  </div>
);

const Questions = ({ list }) => (
  <div>
    {list.map((question, j) => (
      <Question
        question={question.question}
        answer={question.answer}
        key={j}
        id={j}
      />
    ))}
  </div>
);

class FAQs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  onCategoryChange = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { currentIndex } = this.state;
    const currentCategory = data[currentIndex].name;
    const list = data[currentIndex].list;

    return (
      <section id='faqs'>
        <div className='contianer md:max-w-4/5 lg:max-w-7/10 py-28 mx-auto'>
          <Header />
          <Tabs
            currentCategory={currentCategory}
            onCategoryChange={this.onCategoryChange}
          />
          <Questions list={list} />
        </div>
      </section>
    );
  }
}

export default () => <FAQs />;
