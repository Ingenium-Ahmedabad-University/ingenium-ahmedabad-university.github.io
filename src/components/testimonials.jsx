import React, { useEffect, useState } from 'react';
import p1 from '../images/francesca-zama-ULdAHlmpcc8-unsplash.jpg';
import p2 from '../images/hans-mendoza-1athw-6ENAY-unsplash.jpg';
import p3 from '../images/sergey-sokolov-RZWqTFXwc-4-unsplash.jpg';
const Profile = ({ url, selected, onClick }) => {
  return (
    <img
      className={'rounded-full h-10 w-10 ' + (selected ? '' : 'grayeffect')}
      src={url}
      onClick={() => onClick()}
    />
  );
};
const testimonials_data = [
  {
    review:
      'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis. Tempor aute anim exercitation non sunt nisi. Excepteur Lorem ea ea non cillum aliqua. Do mollit cillum aute aliquip tempor est est qui. Et ipsum esse quis tempor nostrud sunt sint. Voluptate ut dolor consectetur minim reprehenderit laboris sunt consectetur deserunt consequat elit enim consequat est. Minim aliqua aute aliqua aliquip excepteur.',
    name: 'HOLDEN CAULFIELD',
    image: p1,
  },
  {
    review:
      'Nulla sint nisi nostrud amet. Pariatur eu incididunt culpa voluptate eiusmod esse enim. Velit sit velit excepteur incididunt fugiat reprehenderit deserunt mollit. Ut nisi do ipsum adipisicing tempor.',
    name: 'person 2',
    image: p2,
  },
  {
    review:
      'Velit sunt duis ex commodo quis. Enim pariatur in Lorem irure nisi eu proident pariatur sit dolor. Duis ullamco enim proident elit. Voluptate culpa nisi enim tempor est. Aliqua ipsum labore aliqua sint id sunt qui id tempor dolor.',
    name: 'Person 3',
    image: p3,
  },
];
const Testimonials = () => {
  const data = testimonials_data;
  const [selected, changeselected] = useState(0);
  useEffect(() => {
    let next = selected + 1 < data.length ? selected + 1 : 0;
    setTimeout(() => changeselected(next), 6000);
  }, [selected]);
  return (
    <section class='text-gray-400 body-font'>
      <div class='container px-5 pt-24 pb-8 mx-auto h-30'>
        <div class='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            class='inline-block w-8 h-8 text-gray-500 mb-8'
            viewBox='0 0 975.036 975.036'
          >
            <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
          </svg>
          <p class='leading-relaxed text-lg '>{data[selected].review}</p>
          <span class='inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6'></span>
          <h2 class='text-white font-medium title-font tracking-wider text-sm'>
            {data[selected].name}
          </h2>
          <p class='text-gray-500'>Senior Product Designer</p>
        </div>
      </div>
      <div className='grid grid-flow-col justify-center gap-3'>
        {data.map((e, i) => (
          <Profile
            url={e.image}
            selected={i === selected}
            onClick={() => changeselected(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
