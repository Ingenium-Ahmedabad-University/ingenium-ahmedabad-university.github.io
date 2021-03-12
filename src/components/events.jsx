import React from 'react';
import { Link } from 'gatsby';

function copyToClipboard(eventUrl) {
  const tooltipText = document.querySelector('.tooltip-text');

  navigator.clipboard.writeText(eventUrl);
  tooltipText.innerHTML = 'Copied';

  setTimeout(() => {
    tooltipText.innerHTML = 'Copy to clipborad';
  }, 3000);
}

const Tooltip = ({ children }) => (
  <div class='has-tooltip'>
    <span class='tooltip tooltip-text rounded shadow-lg px-3 py-2 bg-base-light text-white text-sm font-normal -mt-10'>
      Copy to clipboard
    </span>
    {children}
  </div>
);

const Icons = ({ eventUrl }) => {
  return (
    <div className='flex my-3 justify-start sm:justify-end font-bold text-white'>
      <div className='flex items-center hover:text-gray-400'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-5 w-5 mr-2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
        <p className='mr-3'>Like</p>
      </div>

      <Tooltip>
        <div className='flex hover:text-gray-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-5 w-5 mr-2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
            />
          </svg>
          <button
            id='share-button'
            className='font-bold focus:outline-none foucs-within:outline-none'
            onClick={() => {
              copyToClipboard(eventUrl);
            }}
          >
            Share
          </button>
        </div>
      </Tooltip>
    </div>
  );
};

const Suggestions = ({
  eventName,
  speakerName,
  speakerDetails,
  speakerImg,
}) => (
  <div className='border-2 border-secondary p-5'>
    <div className='flex justify-between mb-5'>
      <div className='text-2xl font-bold text-white'>{eventName}</div>
      <Icons eventUrl='https://www.google.com/' />
    </div>
    <div className='flex align-middle'>
      <div className='rounded-full w-16 mr-5'>
        <img src={speakerImg} alt='' className='rounded-full' />
      </div>
      <div className='flex items-center text-white text-l font-bold'>
        <div>
          <span>{speakerName}</span>
          <br />
          <span>{speakerDetails}</span>
        </div>
      </div>
    </div>
  </div>
);

const Events = ({ dAndT, eventTitle, desc, speaker, desig, sImg, pUrl }) => (
  <section id='events-page'>
    <div className='container md:max-w-4/5 xl:max-w-7/10 mx-auto py-28'>
      <div className='flex my-5 text-white'>
        <Link to='/' className='flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
            />
          </svg>
          Go Back
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 justify-between mb-5 sm:mb-8'>
        <div className='text-xl my-2 text-gray-400'>{dAndT}</div>
        <Icons eventUrl='https://www.google.com/' />
      </div>
      <div className='mb-6'>
        <h1 className='text-4xl sm:text-6xl py-3 font-bold bg-gradient-to-br from-red-500 to-indigo-400 social-bg'>
          {eventTitle}
        </h1>
        <p className='text-gray-400 text-lg py-3'>{desc}</p>
      </div>
      <div className='flex align-middle'>
        <div className='rounded-full w-40 mr-5'>
          <img src={sImg} alt='' className='rounded-full' />
        </div>
        <div className='flex items-center'>
          <div>
            <span className='text-white text-lg font-bold'>{speaker}</span>
            <br />
            <span className='text-lg text-white'>{desig}</span>
          </div>
        </div>
      </div>
      <div className='my-10'>
        <hr className='border-t border-base-light' />
        <img src={pUrl} alt='' className='w-full max-w-2xl my-5 mx-auto' />
        <hr className='border-t border-base-light' />
      </div>
      {/* <Suggestions
                eventName="Paying down technical debt at GitHub"
                speakerName="Keith Ballinger"
                speakerDetails="SVP, Engineering, GitHub"
                speakerImg="https://githubuniverse.com/assets/img/speakers/Keith_Ballinger_Headshot.jpg"
            /> */}
    </div>
  </section>
);

export default Events;
/*
export const eventsDataQuery = graphql`
query EventsDataByPath($event: String!) {
    eventsDataJson(event: { eq: $event }) {
        
        dateAndTime
        eventName
        description
        speakerName
        designation
        speakerImg
        posterUrl
    }
}
`
*/
