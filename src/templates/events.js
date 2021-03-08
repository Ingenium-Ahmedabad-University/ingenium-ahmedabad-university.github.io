import { graphql } from 'gatsby';
import React from 'react';
import Events from '../components/events';
import Footer from '../components/footer';
import Header from '../components/header';
import SEO from '../components/SEO';

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
`;

const EventsPage = ({ data }) => {
  const event = data.eventsDataJson;

  const dAndT = event.dateAndTime;
  const eventTitle = event.eventName;
  const desc = event.description;
  const speaker = event.speakerName;
  const desig = event.designation;
  const sImg = event.speakerImg;
  const pUrl = event.posterUrl;

  return (
    <div>
      <SEO />
      <div className='base px-3 md:px-5 lg:px-10 bg-base'>
        <Events
          dAndT={dAndT}
          eventTitle={eventTitle}
          desc={desc}
          speaker={speaker}
          desig={desig}
          sImg={sImg}
          pUrl={pUrl}
        />
        {/* <Events {...event}/> */}
        <Footer />
        <Header />
      </div>
    </div>
  );
};
export default EventsPage;
