import React from 'react';
import picture1 from '../images/Nisarg_Thoriya.jpg';
import picture2 from '../images/Kaushal_Patil.jpg';
import picture3 from '../images/Ankit_Devani.jpg';
import picture4 from '../images/Viraj_Boghani.jpg';
import picture5 from '../images/Kashish_Jivani.jpg';
import picture6 from '../images/Harsh_Patel.jpg';
import picture7 from '../images/Krunal_Savaj.jpeg';
import picture8 from '../images/Neel_Popat.jpg';
import picture9 from '../images/Jay_Mehta.jpg';
import picture10 from '../images/Jainil_Siddhapura.jpg';
import picture11 from '../images/Saurav_Pajvani.jpg';
import picture12 from '../images/Aditi_Vasa.jpg';
import picture13 from '../images/Kenil_Gondaliya.jpg';
import picture14 from '../images/Anshi_Shah.jpg';
import picture15 from '../images/Yash_Longani.jpg';
import picture16 from '../images/Krina_Khakhariya.jpeg';
import picture17 from '../images/Vinay_Kakkad.jpg';

const icon1 =
  'https://cdn.jsdelivr.net/npm/simple-icons@4.12.0/icons/whatsapp.svg';
const icon2 =
  'https://cdn.jsdelivr.net/npm/simple-icons@4.10.0/icons/linkedin.svg';
const icon3 =
  'https://cdn.jsdelivr.net/npm/simple-icons@4.12.0/icons/gmail.svg';
const team_details = [
  {
    id: 1,
    name: 'Nisarg Thoriya',
    image: picture1,
    role: 'Advisor ',
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917779033222',
    gmail_Url_Url: 'mailto:shivang.g@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/shivanggohil',
  },
  {
    id: 2,
    name: 'Kaushal Patil ',
    image: picture2,
    role: 'Advisor',
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917043132142',
    gmail_Url_Url: 'mailto:kaushal.p@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/kaushal1011/',
  },
  {
    id: 3,
    name: 'Ankit Devani',
    image: picture3,
    role: 'Committee Head',
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919104502001',
    gmail_Url_Url: 'mailto:nisarg.t@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/nisarg-thoriya/',
  },
  {
    id: 4,
    name: 'Viraj Boghani',
    image: picture4,
    role: 'Committee Head',
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919427252347',
    gmail_Url_Url: 'mailto:jeet.s3@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/jeet-shah-3b9a821a4/',
  },

  {
    id: 5,
    name: 'Kashish Jivani',
    role: 'Secretary',
    image: picture5,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917046633383',
    gmail_Url_Url: 'mailto:prachee.j@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/pracheejaviya-9234243/',
  },

  {
    id: 6,
    name: 'Neel Popat',
    role: 'Treasurer',
    image: picture8,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917600303434',
    gmail_Url_Url: 'mailto:arpitsinh.v@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/arpitvaghela/',
  },

  {
    id: 7,
    name: 'Krunal Savaj',
    role: 'Registration & Marketing Head',
    image: picture7,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919099190696',
    gmail_Url_Url: 'mailto:divye.k@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/divye-kanawala/',
  },


  {
    id: 9,
    name: 'Jay Mehta',
    role: 'CSE Event Head',
    image: picture9,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+918866556966',
    gmail_Url_Url: 'mailto:ankit.d1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/ankit-devani-417651190',
  },

  {
    id: 10,
    name: 'Jainil Siddhapura',
    role: 'Mechanical Event Head',
    image: picture10,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+918511862501',
    gmail_Url_Url: 'mailto:panth.p@ahdni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/panth-patel-93998a199/',
  },

  {
    id: 11,
    name: 'Saurav Pajvani',
    role: 'Chemical Event Head',
    image: picture11,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919879624248',
    gmail_Url_Url: 'mailto:sanket.s2@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-403a72176',
  },

  {
    id: 12,
    name: 'Aditi Vasa',
    role: 'Content Team Head',
    image: picture12,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919409631234',
    gmail_Url_Url: 'mailto:samkit.k@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/samkitk/',
  },

  {
    id: 13,
    name: 'Kenil Gondaliya',
    role: 'Design Team Head',
    image: picture13,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+916354973976',
    gmail_Url_Url: 'mailto:sanket.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-978828167/',
  },

  {
    id: 14,
    name: 'Anshi Shah',
    role: 'Social Media Head',
    image: picture14,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+916354973976',
    gmail_Url_Url: 'mailto:sanket.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-978828167/',
  },

  {
    id: 15,
    name: 'Yash Longani',
    role: 'Hackathon Lead',
    image: picture15,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+916354973976',
    gmail_Url_Url: 'mailto:sanket.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-978828167/',
  },
  {
    id: 16,
    name: 'Krina Khakhariya',
    role: 'Decoration Head',
    image: picture16,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+916354973976',
    gmail_Url_Url: 'mailto:sanket.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-978828167/',
  },

  {
    id: 17,
    name: 'Vinay Kakkad',
    role: 'Tech Lead',
    image: picture17,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+916354973976',
    gmail_Url_Url: 'mailto:sanket.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-978828167/',
  },
];

const ImgTemplate = ({
  name,
  image,
  role,
  whatsapp_Url,
  gmail_Url_Url,
  linkedLn_Url,
}) => {
  /* const [hoverRef, isHovered] = useState(false); */
  return (
    <div>
      <div
        class='relative mx-auto rounded-full bg-center object-cover bg-cover max_img_size img_padding'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <br />
      <div class='text-center text-white font-bold text-xl'>{name}</div>
      <br />
      <div class='text-center text-white font-bold italic text-xl'>{role}</div>
      <br />

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
  );
};

const Contact_Us = () => {
  return (
    <code class='font-sans'>
      <div class='mx-auto w-4/5 m-auto'>
        <div class='core_team' id='1'>
          <br />
          <br />
          <div class='font-bold bg-gradient-to-br from-secondary to-secondary-dark social-bg text-center py-14 text-4xl'>
            MEET THE TEAM
          </div>
          <div class='grid grid-cols-1 justify-center items-center py-8 gap-x-12 gap-y-36 sm:grid-cols-2 lg:grid-cols-3'>
            {team_details.map((e) => {
              return (
                <ImgTemplate
                  name={e.name}
                  image={e.image}
                  role={e.role}
                  whatsapp_Url={e.whatsapp_Url}
                  gmail_Url_Url={e.gmail_Url_Url}
                  linkedLn_Url={e.linkedLn_Url}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* </div> */}
    </code>
  );
};

export default Contact_Us;
