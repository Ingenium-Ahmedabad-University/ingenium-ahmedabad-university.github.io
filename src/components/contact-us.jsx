import React, { useState } from 'react';
import picture1 from '../images/Shivang_gohel.jpeg';
import picture2 from '../images/Kaushal_Patil.jpg';
import picture3 from '../images/Nisarg_Thoriya.jpg';
import picture4 from '../images/Jeet_Shah.jpg';
import picture5 from '../images/Prachee_Javiya.jpg';
import picture6 from '../images/Arpitsinh_Vaghela.jpeg';
import picture7 from '../images/Divye_Kanawala.jpg';
import picture8 from '../images/Viraj_Boghani.jpg';
import picture9 from '../images/Ankit_Devani.jpg';
import picture10 from '../images/Panth_Patel.jpg';
import picture11 from '../images/Sanket_J_Shah.jpg';
import picture12 from '../images/Samkit_Kundalia.jpg';
import picture13 from '../images/Sanket_B_Shah.jpg';

const icon1 =
  'https://cdn.jsdelivr.net/npm/simple-icons@4.12.0/icons/whatsapp.svg';
const icon2 =
  'https://cdn.jsdelivr.net/npm/simple-icons@4.10.0/icons/linkedin.svg';
const icon3 =
  'https://cdn.jsdelivr.net/npm/simple-icons@4.12.0/icons/gmail.svg';
const core_team_details = [
  {
    id: 1,
    name: 'Shivang Gohel',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917779033222',
    gmail_Url_Url: 'mailto:shivang.g@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/shivanggohil',
  },
  {
    id: 2,
    name: 'Kaushal Patil',
    image: picture2,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917043132142',
    gmail_Url_Url: 'mailto:kaushal.p@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/kaushal1011/',
  },

  {
    id: 3,
    name: 'Nisarg Thoriya',
    image: picture3,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919104502001',
    gmail_Url_Url: 'mailto:nisarg.t@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/nisarg-thoriya/',
  },

  {
    id: 4,
    name: 'Jeet Shah',
    image: picture4,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919427252347',
    gmail_Url_Url: 'mailto:jeet.s3@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/jeet-shah-3b9a821a4/',
  },

  {
    id: 5,
    name: 'Prachee Javiya',
    image: picture5,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917046633383',
    gmail_Url_Url: 'mailto:prachee.j@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/pracheejaviya-9234243/',
  },

  {
    id: 6,
    name: 'Arpitsinh Vaghela',
    image: picture6,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917600303434',
    gmail_Url_Url: 'mailto:arpitsinh.v@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/arpitvaghela/',
  },

  {
    id: 7,
    name: 'Divye Kanawala',
    image: picture7,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919099190696',
    gmail_Url_Url: 'mailto:divye.k@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/divye-kanawala/',
  },

  {
    id: 8,
    name: 'Viraj Boghani',
    image: picture8,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919727474707',
    gmail_Url_Url: 'mailto:viraj.b2@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/viraj-boghani-a270671b1',
  },

  {
    id: 9,
    name: 'Ankit Devani',
    image: picture9,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+918866556966',
    gmail_Url_Url: 'mailto:ankit.d1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/ankit-devani-417651190',
  },

  {
    id: 10,
    name: 'Panth Patel',
    image: picture10,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+918511862501',
    gmail_Url_Url: 'mailto:panth.p@ahdni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/panth-patel-93998a199/',
  },

  {
    id: 11,
    name: 'Sanket J Shah',
    image: picture11,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919879624248',
    gmail_Url_Url: 'mailto:sanket.s2@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-403a72176',
  },

  {
    id: 12,
    name: 'Samkit Kundalia',
    image: picture12,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919409631234',
    gmail_Url_Url: 'mailto:samkit.k@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/samkitk/',
  },

  {
    id: 13,
    name: 'Sanket B Shah',
    image: picture13,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+916354973976',
    gmail_Url_Url: 'mailto:sanket.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-978828167/',
  },
];

/* 
const event_team_details = [
  {
    id: 1,
    name: 'HUMAN1',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 2,
    name: 'HUMAN2',
    image: picture2,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 3,
    name: 'HUMAN3',
    image: picture2,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in/',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 4,
    name: 'HUMAN4',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },
];

const logistics_team_details = [
  {
    id: 1,
    name: 'HUMAN1',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 2,
    name: 'HUMAN2',
    image: picture2,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 3,
    name: 'HUMAN3',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 4,
    name: 'HUMAN4',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },
];

const content_team_details = [
  {
    id: 1,
    name: 'HUMAN1',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 2,
    name: 'HUMAN2',
    image: picture2,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 3,
    name: 'HUMAN3',
    image: picture2,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 4,
    name: 'HUMAN4',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },
];

const marketing_team_details = [
  {
    id: 1,
    name: 'HUMAN1',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 2,
    name: 'HUMAN2',
    image: picture2,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 3,
    name: 'HUMAN3',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 4,
    name: 'HUMAN4',
    image: picture2,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 5,
    name: 'HUMAN5',
    image: picture2,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },
];

const sponsor_team_details = [
  {
    id: 1,
    name: 'HUMAN1',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 2,
    name: 'HUMAN2',
    image: picture2,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },

  {
    id: 3,
    name: 'HUMAN3',
    image: picture1,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919999999999',
    gmail_Url_Url: 'mailto:random@ahduni.edu.in',
    linkedLn_Url: 'https://www.google.com/',
  },
]; */

const ImgTemplate = ({
  name,
  image,
  whatsapp_Url,
  gmail_Url_Url,
  linkedLn_Url,
}) => {
  const [hoverRef, isHovered] = useState(false);
  return (
    <div className=''>
      <div
        onMouseEnter={() => {
          isHovered(true);
        }}
        onMouseLeave={() => {
          isHovered(false);
        }}
      >
        <div className=''>
          <div
            class={
              hoverRef
                ? 'text-center text_transition text-white font-bold text-lg'
                : 'text-center text_transition text-white font-bold text-lg lg:text-gray-300 '
            }
          >
            {name}
          </div>
          <br />
          <div
            class={
              hoverRef
                ? 'relative text-black mx-auto rounded-full bg-center object-cover bg-cover max_img_size img_padding img_greyscale imgtransition'
                : 'relative text-black mx-auto rounded-full bg-center object-cover bg-cover max_img_size img_padding img_greyscale'
            }
            style={{ backgroundImage: `url(${image})` }}
          >
            <div class='hidden lg:block text-base'>
              {hoverRef && (
                <div class='text_transition'>
                  <div class='grid grid-cols-3 absolute bottom-10 object-cover text-center justify-center place-items-center gap-7 align-middle icon_size'>
                    <a href={whatsapp_Url}>
                      <img alt='' src={icon1} height='36' width='36' />
                    </a>
                    <a href={linkedLn_Url}>
                      <img alt='' src={icon2} height='36' width='36' />
                    </a>
                    <a href={gmail_Url_Url}>
                      <img alt='' src={icon3} height='36' width='36' />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div class='py-5 lg:hidden'>
        <div class='grid grid-cols-3 justify-center align-middle place-items-center object-cover icon_padding'>
          <a href={whatsapp_Url}>
            <img
              src={icon1}
              height='24'
              width='24'
              alt=''
              class='hover:invert-5 invert-7'
            />
          </a>
          <a href={linkedLn_Url}>
            <img
              src={icon2}
              height='24'
              width='24'
              alt=''
              class='hover:invert-5 invert-7'
            />
          </a>
          <a href={gmail_Url_Url}>
            <img
              src={icon3}
              height='24'
              width='24'
              alt=''
              class='hover:invert-5 invert-7'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Contact_Us = () => {
  return (
    <code class='font-sans'>
      {/* <div class='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div>
          <div class='hidden lg:grid object-cover fixed left-0 top-36 space-y-3 px-10 xl:px-20'>
            <div class='text-4xl font-bold py-5'>
              <h1 class='bg-gradient-to-br from-red-500 to-indigo-400 social-bg'>
                MEET THE TEAM
              </h1>
            </div>

            <div class='font-bold text-gray-400 cursor-pointer'>
              <a href='#1'>
                <h1 class='hover:text-white'>CORE TEAM</h1>
              </a>
            </div>

            <div class='font-bold cursor-pointer text-gray-400'>
              <a href='#2'>
                <h1 class='hover:text-white'>EVENT TEAM</h1>
              </a>
            </div>

            <div class='font-bold cursor-pointer text-gray-400'>
              <a href='#3'>
                <h1 class='hover:text-white'>SPONSORS TEAM</h1>
              </a>
            </div>

            <div class='font-bold cursor-pointer text-gray-400'>
              <a href='#4'>
                <h1 class='hover:text-white'>MARKETING TEAM</h1>
              </a>
            </div>

            <div class='font-bold cursor-pointer text-gray-400'>
              <a href='#5'>
                <h1 class='hover:text-white'>LOGISTICS TEAM</h1>
              </a>
            </div>

            <div class='font-bold cursor-pointer text-gray-400'>
              <a href='#6'>
                <h1 class='hover:text-white'>CONTENT TEAM</h1>
              </a>
            </div>
          </div>
        </div> */}

      <div class='w-full mx-auto'>
        <div class='core_team' id='1'>
          <br />
          <br />
          <div class='font-bold bg-gradient-to-br from-red-500 to-indigo-400 social-bg text-center pb-10 pt-14 text-4xl'>
            MEET THE TEAM
          </div>
          <div class='grid grid-cols-1 justify-center items-center py-8 gap-x-12 gap-y-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {core_team_details.map((e) => {
              return (
                <ImgTemplate
                  name={e.name}
                  image={e.image}
                  whatsapp_Url={e.whatsapp_Url}
                  gmail_Url_Url={e.gmail_Url_Url}
                  linkedLn_Url={e.linkedLn_Url}
                />
              );
            })}
          </div>
        </div>

        {/*           <div class='event_team' id='2'>
            <div class='font-bold text-primary pb-7 pt-14 text-4xl'>
              <h1>Event Team</h1>
            </div>
            <div class='grid grid-cols-1 justify-center items-center py-8 gap-4 sm:grid-cols-2 lg:gap-8 lg:grid-cols-4'>
              {event_team_details.map((e) => {
                return (
                  <ImgTemplate
                    name={e.name}
                    image={e.image}
                    whatsapp_Url={e.whatsapp_Url}
                    gmail_Url_Url={e.gmail_Url_Url}
                    linkedLn_Url={e.linkedLn_Url}
                  />
                );
              })}
            </div>
          </div>

          <div class='sponsors_team' id='3'>
            <div class='font-bold text-primary pb-7 pt-14 text-4xl'>
              <h2>Sponsors Team</h2>
            </div>
            <div class='grid grid-cols-1 auto justify-center items-center py-8 gap-4  sm:grid-cols-2 lg:gap-8 lg:grid-cols-4'>
              {sponsor_team_details.map((e) => {
                return (
                  <ImgTemplate
                    name={e.name}
                    image={e.image}
                    whatsapp_Url={e.whatsapp_Url}
                    gmail_Url_Url={e.gmail_Url_Url}
                    linkedLn_Url={e.linkedLn_Url}
                  />
                );
              })}
            </div>
          </div>

          <div class='sponsors_team' id='4'>
            <div class='font-bold text-primary pb-7 pt-14 text-4xl'>
              <h2>Marketing Team</h2>
            </div>
            <div class='grid grid-cols-1 auto-cols-min justify-center items-center py-8 gap-4  sm:grid-cols-2 lg:gap-8 lg:grid-cols-4'>
              {marketing_team_details.map((e) => {
                return (
                  <ImgTemplate
                    name={e.name}
                    image={e.image}
                    whatsapp_Url={e.whatsapp_Url}
                    gmail_Url_Url={e.gmail_Url_Url}
                    linkedLn_Url={e.linkedLn_Url}
                  />
                );
              })}
            </div>
          </div>

          <div class='logistics_team' id='5'>
            <div class='font-bold text-primary pb-7 pt-14 text-4xl'>
              <h2>Logistics Team</h2>
            </div>
            <div class='grid grid-cols-1 justify-center items-center py-8 gap-4 sm:grid-cols-2 lg:gap-8 lg:grid-cols-4'>
              {logistics_team_details.map((e) => {
                return (
                  <ImgTemplate
                    name={e.name}
                    image={e.image}
                    whatsapp_Url={e.whatsapp_Url}
                    gmail_Url_Url={e.gmail_Url_Url}
                    linkedLn_Url={e.linkedLn_Url}
                  />
                );
              })}
            </div>
          </div>

          <div class='content_team' id='6'>
            <div class='font-bold text-primary pb-7 pt-14 text-4xl'>
              <h2>Content Team</h2>
            </div>
            <div class='grid grid-cols-1 justify-center items-center py-8 gap-4 sm:grid-cols-2 lg:gap-8 lg:grid-cols-4'>
              {content_team_details.map((e) => {
                return (
                  <ImgTemplate
                    name={e.name}
                    image={e.image}
                    whatsapp_Url={e.whatsapp_Url}
                    gmail_Url_Url={e.gmail_Url_Url}
                    linkedLn_Url={e.linkedLn_Url}
                  />
                );
              })}
            </div>
          </div> */}
      </div>
      {/* </div> */}
    </code>
  );
};

export default Contact_Us;
