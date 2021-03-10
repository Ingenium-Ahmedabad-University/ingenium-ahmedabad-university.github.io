import React , { useEffect } from "react";
import e1 from "../images/about_us2.jpg";
import '../css/custom.css';
import AOS from'aos';
import"aos/dist/aos.css";

const events_data = [
  {
    category:'Mechanical',
    detail:[
    {
      desc:
        'Enhance your app development skills by designing mobile, web, and desktop applications with a single codebase using Flutter.',
      title:'Bootcamp Flutter',
      date:'1 Feb, 2:00 IST',
      image: e1,
    },
    {
      desc:
      'You may not want to miss an opportunity to learn data analysis through two of the widely used data visualization libraries of Python!',
      date:'2 Feb, 2:00 IST',
      title:'Data-visualization',
      image: e1,
    },
    {
      desc:
      'To figure out what the errors are and get a lot of other useful information about scripts, “Developer tools” have been embedded in browsers.',
      title:'Google Developer console',
      date:'3 Feb, 2:00 IST',
      image: e1,
    },
    {
      desc:
        'If the idea of building something like Pokemon Go or HTC Vive has ever crossed your mind, then this the place for you.',
      title:'AR/VR',
      date:'4 Feb, 2:00 IST',
      image: e1,
    },
    {
      desc:
      'By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.',
      date:'5 Feb, 2:00 IST',
      title:'Kick start Docker',
      image: e1,
    },
    {
      desc:
      'GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.',
      title:'Github Actions',
      date:'6 Feb, 2:00 IST',
      image: e1,
    },
  ],
},
{
  category:'Computer',
  detail:[
    {
      desc:
        'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
      title:'Event 4',
      date:'4 Feb, 2:00 IST',
      image: e1,
    },
    {
      desc:
      'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
      date:'5 Feb, 2:00 IST',
      title:'Event 5',
      image: e1,
    },
    {
      desc:
      'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
      title:'Event 6',
      date:'6 Feb, 2:00 IST',
      image: e1,
    },
  ]
}
];

const EventLists=()=>{
  const data = events_data;
  useEffect(() => {
    AOS.init({ duration: 1000});
  });
    return(
        <div className="md:mx-24 my-12 mx-20 pb-5">
            {data.map((el, key)=>(
              
              <div>
                <h1 className="event_title text-center pt-14 pb-5 bg-gradient-to-br from-red-500 to-indigo-400 social-bg">{el.category}</h1>
                <div className="underline mx-auto items-center bg-gradient-to-br from-red-500 to-indigo-400"  style={{width:"250px", height:"2px"}}></div>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 sm:grid-cols-2 xl:gap-20 md:gap-16 py-10">
                {el.detail.map((det, key1)=>
                <div>
                      <div className="avatar relative h-64 w-full flex justify-center items-center text-center bg-cover bg-center" data-aos="fade-up" style={{ backgroundImage:`url(${det.image})` }}>
                        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>

                        <div className="desc z-10 tracking-tight bg-gray-800 bg-opacity-60 text-white">
                          <span className=" font-bold md:text-2xl lg:text-3xl">{det.title}</span>
                          <span className="detail px-2 pb-2"><span className="text-lg">{det.date}</span><br/> {det.desc}</span>
                        </div>  
                      </div>
                      <div className="md_640px bg-black bg-opacity-50 rounded-b-xl p-2">
                        <span className="font-bold text-lg">{det.title}</span><br/>
                        <span className=" text-sm py-2">{det.date}<br/>{det.desc}</span>
                      </div>
                      </div>
                    )}
                  </div>
              </div>
            ))}
        </div>       
    );
}
export default EventLists;
