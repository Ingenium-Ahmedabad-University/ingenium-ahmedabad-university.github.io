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
  <div className='has-tooltip'>
    <span className='tooltip tooltip-text rounded shadow-lg px-3 py-2 bg-base-light text-white text-sm font-normal -mt-10'>
      Copy to clipboard
    </span>
    {children}
  </div>
);

const Icons = ({ eventUrl }) => {
  return (
    <div className='flex my-3 justify-start sm:justify-end font-bold text-white'>
      {/* <div className='flex items-center hover:text-gray-400'>
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
      </div> */}

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
              strokeLinecap='round'
              strokeLlinejoin='round'
              strokeWidth='2'
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

const RegisterButton = ({ jsDate }) => {
  const eventDate = new Date(jsDate);
  const today = new Date();

  if (eventDate > today) {
    return (
      <Link to='#'>
        {/* <button className='border-2 border-secondary hover:bg-secondary px-5 py-2 mt-8 sm:mt-0 font-bold text-white'> */}
        <button className='register-button px-5 py-2 mt-8 sm:mt-0 font-bold text-white'>
          REGISTER
        </button>
      </Link>
    );
  } else {
    return <div></div>;
  }
};

export { Icons, Suggestions, RegisterButton };
