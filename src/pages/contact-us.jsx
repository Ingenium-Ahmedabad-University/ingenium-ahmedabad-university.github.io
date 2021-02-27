import React , {useState} from 'react'
import picture from '../images/coloured-boy.jpg'

const icon1 = "https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/instagram.svg";
const icon2 = "https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/facebook.svg";
const icon3 = "https://cdn.jsdelivr.net/npm/simple-icons@4.10.0/icons/linkedin.svg";
const core_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:4,
        name: "HUMAN4",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    }
];

const event_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:4,
        name: "HUMAN4",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    }
];

const logistics_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:4,
        name: "HUMAN4",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    }
];

const content_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:4,
        name: "HUMAN4",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    }
];

const marketing_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:4,
        name: "HUMAN4",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    }
];

const sponsor_team_details = [
    {
        id:1,
        name: "HUMAN1",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:2,
        name: "HUMAN2",
        image:picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

    {
        id:3,
        name: "HUMAN3",
        image: picture,
        email:"random@ahduni.edu.in",
        phone_no:"+919999999999",
        facebook_Url:"https://www.google.com/",
        instagram_Url:"https://www.google.com/",
        linkedLn_Url:"https://www.google.com/",
    },

];

const ImgTemplate = ({name,image,email,phone_no,instagram_Url,facebook_Url,linkedLn_Url}) =>{
const[hoverRef, isHovered] = useState(false);
return (
<div className="grid grid-row-2">
        <div class="font-sans-bold align-middle">
            <h1 class="text-center">{name}</h1>
            </div>
            <div onMouseEnter={() => {
                isHovered(true);
            }}onMouseLeave={() => {
                isHovered(false);
            }}>        
        <div class="place-items-center px-5 text-black mx-auto bg-center bg-cover h-48 w-40 md:mx-8 lg:w-64 h-64" style={{ backgroundImage:`url(${image})`}}>
        <div class="hidden md:block py-40 text-xs text-center lg:text-base ">
        {hoverRef && (
          <div class="">  
            <a href={email}>{email}</a>
            <h1>{phone_no}</h1>
            <div class="grid grid-cols-3 justify-center align-middle px-6 gap-3 place-items-center lg:px-10">
            <a href={instagram_Url}>
            <img src={icon1} height="24" width="24"/></a>
            <a href={facebook_Url}>
            <img src={icon2} height="24" width="24"/></a>
            <a href={linkedLn_Url}>
            <img src={icon3} height="24" width="24"/></a>
            </div>
        </div>
        )}
            </div>
            </div>
            </div>
        <div class="md:hidden">
        <div class="text-center text-sm">
            <a href={email}>{email}</a>
            <h1>{phone_no}</h1>
            </div>
        <div class="grid grid-cols-3 justify-center align-middle px-20 place-items-center md:px-5">
            <a href={instagram_Url}>
            <img src={icon1} height="24" width="24"/></a>
            <a href={facebook_Url}>
            <img src={icon2} height="24" width="24"/></a>
            <a href={linkedLn_Url}>
            <img src={icon3} height="24" width="24"/></a>
            </div>
        </div>
    </div>
)}

export const Contact_Us = ()=> (
    <code>
        
        <div class="hidden md:block text-secondary w-3/6 fixed top-40 left-0 space-y-3 px-24">
            <div class="text-4xl font-bold py-5">
            <h1 class="">MEET THE TEAM</h1>
            </div>
        
            <div class="font-bold">
            <a href="#1">
            <h1>CORE TEAM</h1>
            </a>
            </div>

            <div class="font-bold">
            <a href="#2">
            <h1>EVENT TEAM</h1>
            </a>
            </div>
      
            <div class="font-bold">
            <a href="#3">
            <h1>SPONSORS TEAM</h1>
            </a>
            </div>

            <div class="font-bold">
            <a href="#4">
            <h1>MARKETING TEAM</h1>
            </a>
            </div>

            <div class="font-bold">
            <a href="#5">
            <h1>LOGISTICS TEAM</h1>
            </a>
            </div>

            <div class="font-bold">
            <a href="#6">
            <h1>CONTENT TEAM</h1>
            </a>
            </div>

        </div>

        
        <div class="grid grid-rows-6 text-primary gap-5 w-full md:w-3/6 float-right">
        <div class="core_team" id="1">
        <div class="font-bold text-center py-8 text-4xl">
            <h1>CORE TEAM</h1>
            </div>
        <div class="grid grid-cols-2 justify-center gap-5 items-center px-8 py-5">
            {
                core_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        email={e.email}
                        phone_no={e.phone_no}
                        facebook_Url={e.facebook_Url}
                        instagram_Url={e.instagram_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>

        <div class="event_team" id="2">
        <div class="font-bold text-center py-8 text-4xl">
            <h1>EVENT TEAM</h1>
            </div>
        <div class="grid grid-cols-2 justify-center gap-5 items-center px-8 py-5">
            {
                event_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        email={e.email}
                        phone_no={e.phone_no}
                        facebook_Url={e.facebook_Url}
                        instagram_Url={e.instagram_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>

        <div class="sponsors_team" id="3">
        <div class="font-bold text-center py-8 text-4xl">
            <h1>SPONSORS TEAM</h1>
            </div>
        <div class="grid grid-cols-2 justify-center gap-5 items-center px-8 py-5">
            {
                sponsor_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        email={e.email}
                        phone_no={e.phone_no}
                        facebook_Url={e.facebook_Url}
                        instagram_Url={e.instagram_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>

        <div class="sponsors_team" id="4">
        <div class="font-bold text-center py-8 text-4xl">
            <h1>MARKETING TEAM</h1>
            </div>
        <div class="grid grid-cols-2 justify-center gap-5 items-center px-8 py-5">
            {
                marketing_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        email={e.email}
                        phone_no={e.phone_no}
                        facebook_Url={e.facebook_Url}
                        instagram_Url={e.instagram_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>

        <div class="logistics_team" id="5">
        <div class="font-bold text-center py-8 text-4xl">
            <h1>LOGISTICS TEAM</h1>
            </div>
        <div class="grid grid-cols-2 justify-center gap-5 items-center px-8 py-5">
            {
                logistics_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        email={e.email}
                        phone_no={e.phone_no}
                        facebook_Url={e.facebook_Url}
                        instagram_Url={e.instagram_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>

        <div class="content_team" id="6">
        <div class="font-bold text-center py-8 text-4xl">
            <h1>CONTENT TEAM</h1>
            </div>
        <div class="grid grid-cols-2 justify-center gap-5 items-center px-8 py-5">
            {
                content_team_details.map(e =>{
                    return(
                        <ImgTemplate 
                        name={e.name}
                        image={e.image}
                        email={e.email}
                        phone_no={e.phone_no}
                        facebook_Url={e.facebook_Url}
                        instagram_Url={e.instagram_Url}
                        linkedLn_Url={e.linkedLn_Url}
                        />
                    );
                })
            }
        </div>
        </div>
        </div>
    </code>
)
export default Contact_Us;