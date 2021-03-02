import React , {useState} from 'react'
import picture1 from '../images/engineering-unsplash.jpg'
import picture2 from '../images/itay-verchik-unsplash.jpg'

const icon1 = "https://cdn.jsdelivr.net/npm/simple-icons@4.12.0/icons/whatsapp.svg";
const icon2 = "https://cdn.jsdelivr.net/npm/simple-icons@4.10.0/icons/linkedin.svg";
const icon3 = "https://cdn.jsdelivr.net/npm/simple-icons@4.12.0/icons/gmail.svg";
const core_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture2,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture2,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:4,
        name: "HUMAN4",
        image: picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    }
];

const event_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture2,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture2,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:4,
        name: "HUMAN4",
        image: picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    }
];

const logistics_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture2,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:4,
        name: "HUMAN4",
        image: picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    }
];

const content_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture2,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture2,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:4,
        name: "HUMAN4",
        image: picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    }
];

const marketing_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture2,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:4,
        name: "HUMAN4",
        image: picture2,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    }
];

const sponsor_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture2,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture1,
        whatsapp_Url:"https://api.whatsapp.com/send?phone=+919999999999",
        gmail_Url_Url:"mailto:random@ahduni.edu.in",
        linkedLn_Url:"https://www.google.com/",
    },

];

const ImgTemplate = ({name,image,whatsapp_Url,gmail_Url_Url,linkedLn_Url}) =>{
const[hoverRef, isHovered] = useState(false);
return (
<div className="">
            <div onMouseEnter={() => {
                isHovered(true);
            }}onMouseLeave={() => {
                isHovered(false);
            }}> 
        <div className=""> 
        <div class="text-center text-white font-bold text-lg">{name}
        </div>
        <br/>      
        <div class={hoverRef ?"relative text-black mx-auto rounded-full bg-center object-cover bg-cover max_img_size img_padding img_greyscale imgtransition":"relative text-black mx-auto rounded-full bg-center object-cover bg-cover max_img_size img_padding img_greyscale"} style={{ backgroundImage:`url(${image})`}}>
        <div class="hidden lg:block text-base">
        {hoverRef &&(
          <div class="text_transition">  
            <div class="grid grid-cols-3 absolute bottom-10 object-cover text-center justify-center place-items-center gap-7 align-middle icon_size">
            <a href={whatsapp_Url}>
            <img alt="" src={icon1} height="36" width="36"/></a>
            <a href={linkedLn_Url }>
            <img alt="" src={icon2} height="36" width="36"/></a>
            <a href={gmail_Url_Url}>
            <img alt="" src={icon3} height="36" width="36"/></a>
            </div>
        </div>
        )}
            </div>
            </div>
            </div>
            </div>

        <div class="py-5 lg:hidden">
        <div class="grid grid-cols-3 justify-center align-middle place-items-center object-cover icon_padding">
            <a href={whatsapp_Url}>
            <img src={icon1} height='24' width='24' alt="" class="icons_invert"/></a>
            <a href={linkedLn_Url}>
            <img src={icon2} height='24' width='24' alt="" class="icons_invert" /></a>
            <a href={gmail_Url_Url}>
            <img src={icon3} height='24' width='24' alt="" class="icons_invert " /></a>
            </div>
        </div>
    </div>
)};

export const Contact_Us = ()=> (
    <code class="font-sans">
        <div class="grid grid-cols-1 relative lg:grid-cols-3 gap-5">
        <div class="grid grid-cols-1 relative">
        <div class="hidden lg:grid object-cover bg-gradient-to-br from-red-500 to-indigo-400 social-bg fixed left-0 top-36 space-y-3 px-12 xl:px-20">
            <div class="text-4xl font-bold py-5">
            <h1 class="">MEET THE TEAM</h1>
            </div>
        
            <div class="font-bold cursor-pointer">
            <a href="#1">
            <h1 class="text-base">CORE TEAM</h1>
            </a>
            </div>

            <div class="font-bold cursor-pointer">
            <a href="#2">
            <h1 class="text-base">EVENT TEAM</h1>
            </a>
            </div>
      
            <div class="font-bold cursor-pointer">
            <a href="#3">
            <h1 class="text-base">SPONSORS TEAM</h1>
            </a>
            </div>

            <div class="font-bold cursor-pointer">
            <a href="#4">
            <h1 class="text-base">MARKETING TEAM</h1>
            </a>
            </div>

            <div class="font-bold cursor-pointer">
            <a href="#5">
            <h1 class="text-base">LOGISTICS TEAM</h1>
            </a>
            </div>

            <div class="font-bold cursor-pointer">
            <a href="#6">
            <h1 class="text-base">CONTENT TEAM</h1>
            </a>
            </div>

        </div>
        </div>

        
        <div class="grid grid-rows-6 text-primary gap-5 w-full col-span-2">
        <div class="core_team mt-32" id="1">
        <div class="font-bold text-center text-gray-300 py-8 text-4xl lg:text-left">
            <h1>Core Team</h1>
            </div>
        <div class="grid grid-cols-1 justify-center items-center py-5 gap-4 sm:grid-cols-2 lg:gap-8">
            {
                core_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        whatsapp_Url={e.whatsapp_Url}
                        gmail_Url_Url={e.gmail_Url_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>

        <div class="event_team" id="2">
        <div class="font-bold text-center text-gray-300 py-8 text-4xl lg:text-left">
            <h1>Event Team</h1>
            </div>
        <div class="grid grid-cols-1 justify-center items-center py-5 gap-4 sm:grid-cols-2 lg:gap-8">
            {
                event_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        whatsapp_Url={e.whatsapp_Url}
                        gmail_Url_Url={e.gmail_Url_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>

        <div class="sponsors_team" id="3">
        <div class="font-bold text-center text-gray-300 py-8 text-4xl lg:text-left">
            <h2>Sponsors Team</h2>
            </div>
        <div class="grid grid-cols-1 justify-center items-center py-5 gap-4  sm:grid-cols-2 lg:gap-8">
            {
                sponsor_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        whatsapp_Url={e.whatsapp_Url}
                        gmail_Url_Url={e.gmail_Url_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>

        <div class="sponsors_team" id="4">
        <div class="font-bold text-center text-gray-300 py-8 text-4xl lg:text-left">
            <h2>Marketing Team</h2>
            </div>
        <div class="grid grid-cols-1 justify-center items-center py-5 gap-4  sm:grid-cols-2 lg:gap-8">
            {
                marketing_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        whatsapp_Url={e.whatsapp_Url}
                        gmail_Url_Url={e.gmail_Url_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>

        <div class="logistics_team" id="5">
        <div class="font-bold text-center text-gray-300 py-8 text-4xl lg:text-left">
            <h2>Logistics Team</h2>
            </div>
        <div class="grid grid-cols-1 justify-center items-center py-5 gap-4 sm:grid-cols-2 lg:gap-8">
            {
                logistics_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        whatsapp_Url={e.whatsapp_Url}
                        gmail_Url_Url={e.gmail_Url_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>

        <div class="content_team" id="6">
        <div class="font-bold text-center text-gray-300 py-8 text-4xl lg:text-left">
            <h2>Content Team</h2>
            </div>
        <div class="grid grid-cols-1 justify-center items-center py-5 gap-4 sm:grid-cols-2 lg:gap-8">
            {
                content_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        whatsapp_Url={e.whatsapp_Url}
                        gmail_Url_Url={e.gmail_Url_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>
        </div>
        </div>
    </code>
);

export default Contact_Us;