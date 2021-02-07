import React from 'react';
//import data from '../../content/data.json'
const contact_details = [
  {
    name: 'Instagram',
    icon: 'icon',
  },
  {
    name: 'Discord',
    icon: 'icon2',
  },
  {
    name: 'mail',
    icon: 'icon3',
  },
];

const Footer = () => (
  <div className='bg-teal-200'>
    {contact_details.map((e) => (
      <a>
        <h1>{e.name}</h1>
        <code>{e.icon}</code>
      </a>
    ))}
  </div>
);

export const Code = () => <code>This is a code block</code>;
export default Footer;
