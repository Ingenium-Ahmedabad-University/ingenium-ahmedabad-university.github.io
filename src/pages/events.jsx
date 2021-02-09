import React from 'react';

const EventsPage = ({date, eventName, description, speakerName, speakerDetails, speakerImg}) => 
    <section id="events-page" className="bg-base">
        <div className="container md:max-w-4/5 mx-auto bg-base py-10">
            <div className="flex my-5 text-white">
                ← Go Back
            </div>
            <div className="flex justify-between my-5">
                <div className="text-xl text-gray-400">{ date }</div>
                <div className="flex font-bold text-white">
                    <p className="mr-2">♥ Like</p>
                    <p>🔽 Share</p>
                </div>
            </div>
            <div className="my-16">
                <h1 className="text-5xl py-5 text-bold bg-gradient-to-br from-red-500 to-indigo-400 social-bg">{ eventName }</h1>
                <p className="text-gray-400 font-semibold">{ description }</p>
            </div>
            <div className="flex align-middle">
                <div className="rounded-full w-40 mr-5">
                    <img src={ speakerImg } alt="" className="rounded-full" />
                </div>
                <div className="flex items-center">
                    <div>
                        <span className="text-white font-bold">{ speakerName }</span><br/>
                        <span className="text-xl text-white">{ speakerDetails }</span>
                    </div>
                </div>
            </div> 
        </div>
    </section>


export default () => 
    <EventsPage 
        date = "8 December, 22:45 IST"
        eventName = "Opening keynote"
        description = "Join Nat Friedman and special guests for an inside look at the latest updates and product announcements from GitHub."
        speakerName = "Nat Friedman"
        speakerDetails = "CEO, Github"
        speakerImg = "https://githubuniverse.com/assets/img/speakers/Nat_Friedman_Headshot.jpg"
    />
  