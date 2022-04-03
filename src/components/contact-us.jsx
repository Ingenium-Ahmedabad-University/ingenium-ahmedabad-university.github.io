import React from 'react';
import picture1 from '../images/Nisarg_Thoriya_updated.jpg';
import picture2 from '../images/Kaushal_Patil_updated.jpg';
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
import picture18 from '../images/Prof_Akhand_Rai.jpeg';
import picture19 from '../images/Prof_Jayendra_Bhalodiya.jpeg';
import picture20 from '../images/Tirth_Patel.jpeg';
import picture21 from '../images/Poojan_Gandhi.jpeg';
import picture22 from '../images/Nipun_Patel.jpeg';
import picture23 from '../images/Jinesh_Salot_updated.jpeg';
import picture24 from '../images/Henil_Shah.jpg';

const icon1 =
  'https://cdn.jsdelivr.net/npm/simple-icons@4.12.0/icons/whatsapp.svg';
const icon2 =
  'https://cdn.jsdelivr.net/npm/simple-icons@4.10.0/icons/linkedin.svg';
const icon3 =
  'https://cdn.jsdelivr.net/npm/simple-icons@4.12.0/icons/gmail.svg';

const advisory_team_details = [
  {
    id: 1,
    name: 'Akhand Rai',
    image: picture18,
    role: 'Faculty Advisor',
  },
  {
    id: 2,
    name: 'Jayendra Bhalodiya',
    image: picture19,
    role: 'Faculty Advisor',
  },
  {
    id: 3,
    name: 'Nisarg Thoriya',
    image: picture1,
    role: 'Advisor',
  },
  {
    id: 4,
    name: 'Kaushal Patil ',
    image: picture2,
    role: 'Advisor',
  },
];
const core_team_details = [
  {
    id: 1,
    name: 'Ankit Devani',
    image: picture3,
    role: 'Committee Head',
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919104502001',
    gmail_Url_Url: 'mailto:nisarg.t@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/nisarg-thoriya/',
  },
  {
    id: 2,
    name: 'Viraj Boghani',
    image: picture4,
    role: 'Committee Head',
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919427252347',
    gmail_Url_Url: 'mailto:jeet.s3@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/jeet-shah-3b9a821a4/',
  },

  {
    id: 3,
    name: 'Kashish Jivani',
    role: 'Secretary',
    image: picture5,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917046633383',
    gmail_Url_Url: 'mailto:prachee.j@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/pracheejaviya-9234243/',
  },

  {
    id: 4,
    name: 'Neel Popat',
    role: 'Treasurer',
    image: picture8,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917600303434',
    gmail_Url_Url: 'mailto:arpitsinh.v@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/arpitvaghela/',
  },

  {
    id: 5,
    name: 'Krunal Savaj',
    role: 'Registration & Marketing Head',
    image: picture7,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919099190696',
    gmail_Url_Url: 'mailto:divye.k@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/divye-kanawala/',
  },

  {
    id: 7,
    name: 'Jay Mehta',
    role: 'CSE Event Head',
    image: picture9,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+918866556966',
    gmail_Url_Url: 'mailto:ankit.d1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/ankit-devani-417651190',
  },

  {
    id: 8,
    name: 'Jainil Siddhapura',
    role: 'Mechanical Event Head',
    image: picture10,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+918511862501',
    gmail_Url_Url: 'mailto:panth.p@ahdni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/panth-patel-93998a199/',
  },

  {
    id: 9,
    name: 'Saurav Pajvani',
    role: 'Chemical Event Head',
    image: picture11,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919879624248',
    gmail_Url_Url: 'mailto:sanket.s2@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-403a72176',
  },

  {
    id: 10,
    name: 'Aditi Vasa',
    role: 'Content Team Head',
    image: picture12,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919409631234',
    gmail_Url_Url: 'mailto:samkit.k@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/samkitk/',
  },

  {
    id: 11,
    name: 'Kenil Gondaliya',
    role: 'Design Team Head',
    image: picture13,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+916354973976',
    gmail_Url_Url: 'mailto:sanket.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-978828167/',
  },

  {
    id: 12,
    name: 'Anshi Shah',
    role: 'Social Media Head',
    image: picture14,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+916354973976',
    gmail_Url_Url: 'mailto:sanket.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-978828167/',
  },

  {
    id: 13,
    name: 'Yash Longani',
    role: 'Hackathon Lead',
    image: picture15,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+916354973976',
    gmail_Url_Url: 'mailto:sanket.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-978828167/',
  },

  {
    id: 14,
    name: 'Krina Khakhariya',
    role: 'Decoration Head',
    image: picture16,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+916354973976',
    gmail_Url_Url: 'mailto:sanket.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/sanket-shah-978828167/',
  },
];

const tech_team_details = [
  {
    id: 1,
    name: 'Vinay Kakkad',
    role: 'Tech Lead',
    image: picture17,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919429479019',
    gmail_Url_Url: 'mailto:vinay.k@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/vinaykakkad',
  },

  {
    id: 2,
    name: 'Tirth Patel',
    role: 'Developer',
    image: picture20,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+918200612084',
    gmail_Url_Url: 'mailto:tirth.p5@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/tirth-patel-412b70192',
  },

  {
    id: 3,
    name: 'Nipun Patel',
    role: 'Developer',
    image: picture21,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+917990224584',
    gmail_Url_Url: 'mailto:nipun.p@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/nipun-patel-9a18101ab',
  },

  {
    id: 4,
    name: 'Poojan Gandhi',
    role: 'Developer',
    image: picture22,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919510923972',
    gmail_Url_Url: 'mailto:poojan.g@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/poojan-gandhi-8b77931a5',
  },
  {
    id: 5,
    name: 'Jinesh Salot',
    role: 'Developer',
    image: picture23,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919106810725',
    gmail_Url_Url: 'mailto:jinesh.s1@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/jinesh-salot-502a071a6',
  },
  {
    id: 6,
    name: 'Henil Shah',
    role: 'Developer',
    image: picture24,
    whatsapp_Url: 'https://api.whatsapp.com/send?phone=+919512120133',
    gmail_Url_Url: 'mailto:shah.h@ahduni.edu.in',
    linkedLn_Url: 'https://www.linkedin.com/in/henil-shah-095837190',
  },
];

const AdvisorImgTemplate = ({ name, image, role }) => {
  /* const [hoverRef, isHovered] = useState(false); */
  return (
    <div>
      <div
        class='relative mx-auto rounded-full object-cover bg-cover max_img_size_advisor img_padding'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <br />
      <div class='text-center text-white font-bold text-xl'>{name}</div>
      <br />
      <div class='text-center text-white font-bold italic text-xl'>{role}</div>
      <br />
    </div>
  );
};

const CoreImgTemplate = ({
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
      <div class='text-center text-white py-4 font-bold italic text-xl'>
        {role}
      </div>

      <div class='grid grid-cols-3 justify-center py-3 align-middle place-items-center object-cover icon_padding'>
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

const TechImgTemplate = ({
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
      <div class='text-center py-3 text-white font-bold italic text-xl'>
        {role}
      </div>

      <div class='grid grid-cols-3 py-3 justify-center align-middle place-items-center object-cover icon_padding'>
        <a href={whatsapp_Url}>
          <img
            src={icon1}
            height='22'
            width='22'
            alt=''
            class='hover:invert-5 invert-7'
          />
        </a>
        <a href={linkedLn_Url}>
          <img
            src={icon2}
            height='22'
            width='22'
            alt=''
            class='hover:invert-5 invert-7'
          />
        </a>
        <a href={gmail_Url_Url}>
          <img
            src={icon3}
            height='22'
            width='22'
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
          <div class='core-team'>
            <div class='font-bold bg-gradient-to-br from-primary to-primary-dark social-bg py-14 text-3xl'>
              Advisors
            </div>
            <div class='grid grid-cols-1 justify-center items-center py-8 gap-x-12 gap-y-32 sm:grid-cols-2'>
              {advisory_team_details.map((e) => {
                return (
                  <AdvisorImgTemplate
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

          <div class='core-team'>
            <div class='font-bold bg-gradient-to-br from-primary to-primary-dark social-bg py-14 text-3xl'>
              Core Team
            </div>
            <div class='grid grid-cols-1 justify-center items-center py-8 gap-x-12 gap-y-32 sm:grid-cols-2 lg:grid-cols-3'>
              {core_team_details.map((e) => {
                return (
                  <CoreImgTemplate
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

          <div class='tech-team'>
            <div class='font-bold bg-gradient-to-br from-primary to-primary-dark social-bg py-14 text-3xl'>
              Tech Team
            </div>
            <div class='grid grid-cols-1 justify-center items-center py-8 gap-x-16 gap-y-32 sm:grid-cols-3 lg:grid-cols-4'>
              {tech_team_details.map((e) => {
                return (
                  <TechImgTemplate
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
      </div>
      {/* </div> */}
    </code>
  );
};

export default Contact_Us;
