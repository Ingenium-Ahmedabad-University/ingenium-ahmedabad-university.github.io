import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Events from '../components/events';
import Footer from '../components/footer';
import  {graphql}  from 'gatsby';

export const eventsDataQuery = graphql`
query EventsDataByPath($event: String!) {
    eventsDataJson(event: { eq: $event }) {        
        dateAndTime
        eventName
        description
        speakerName
        designation
        speakerImg
        posterUrl
    }
}
`

const EventsPage = ({data}) => {
    const event = data.eventsDataJson
    
    const dAndT = event.dateAndTime
    const eventTitle = event.eventName
    const desc = event.description
    const speaker = event.speakerName
    const desig = event.designation
    const sImg = event.speakerImg
    const pUrl = event.posterUrl
    
    
    return(
        <div>
            <SEO />
            <div className='base px-3 md:px-5 lg:px-10 bg-base'>                
                <Header />
                <Events dAndT={dAndT} eventTitle={eventTitle} desc={desc} speaker={speaker} desig={desig} sImg={sImg} pUrl={pUrl}/>
                {/* <Events {...event}/> */}
                <Footer />
            </div>
        </div>
    )
}
export default EventsPage