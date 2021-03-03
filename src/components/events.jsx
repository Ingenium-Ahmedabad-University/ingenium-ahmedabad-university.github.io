import React , { useEffect } from "react";
import e1 from "../images/keefikus-fFhFkOj1KQY-unsplash.jpg";
import '../css/custom.css';
import AOS from'aos';
import"aos/dist/aos.css";

const events_data = [
  {
    desc:
      'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
    title:'Event 1',
    date:'1 Feb',
    image: e1,
  },
  {
    desc:
    'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
    date:'2 Feb',
    title:'Event 2',
    image: e1,
  },
  {
    desc:
    'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
    title:'Event 3',
    date:'3 Feb',
    image: e1,
  },
  {
    desc:
      'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
    title:'Event 4',
    date:'4 Feb',
    image: e1,
  },
  {
    desc:
    'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
    date:'5 Feb',
    title:'Event 5',
    image: e1,
  },
  {
    desc:
    'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
    title:'Event 6',
    date:'6 Feb',
    image: e1,
  },
  {
    desc:
      'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
    title:'Event 4',
    date:'4 Feb',
    image: e1,
  },
  {
    desc:
    'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
    date:'5 Feb',
    title:'Event 5',
    image: e1,
  },
  {
    desc:
    'Magna aliqua do eiusmod sunt tempor aute irure in consectetur aliquip duis',
    title:'Event 6',
    date:'6 Feb',
    image: e1,
  },
];

const Events=()=>{
  const data = events_data;
  useEffect(() => {
    AOS.init({ duration: 1000});
  });
    return(
      <div className="md:m-24 m-16 pb-5">
          <h1 className="event_title text-left -mx-10 pb-5 text-white">Category...</h1><div className="underline bg-white -mx-10"  style={{width:"150px", height:"2px"}}></div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 sm:grid-cols-2 xl:gap-20 md:gap-16 pt-8">

              {data.map((el, key)=>(
                <div>
                    <div className="avatar relative h-64 w-full flex justify-center items-center text-center bg-cover bg-center" data-aos="fade-up" style={{ backgroundImage:`url(${data[1].image})` }}>
                        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                        <div className="absolute z-20 top-0 right-0 left-0 mt-2 flex justify-between items-center">
                          <span className="date flex-col -mx-1 justify-start">{el.date} </span>
                        </div>
                        
                        <div className="desc z-10 tracking-tight text-white">
                          <span className=" font-title-abril font-bold text-6xl">{el.title}</span>
                          <span className="detail px-2 pb-2 text-sm">{el.desc}</span>
                        </div>  
                    </div>
                    <div className="md_640px bg-black bg-opacity-50 rounded-b-xl p-2">
                        <span className="font-title-abril font-bold text-3xl">{el.title}</span><br/>
                        <span className=" text-md py-2">{el.desc}</span>
                    </div>
                </div>
              ))}
            </div>
      </div>       
    );
}
export default Events;