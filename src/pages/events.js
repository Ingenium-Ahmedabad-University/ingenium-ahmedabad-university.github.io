import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Events from '../components/events';
import Footer from '../components/footer';

const EventsPage = () => 
        <div>
            <SEO />
            <div className='base px-3 md:px-5 lg:px-10 bg-base'>
                <Header />
                <Events />
                <Footer />
            </div>
        </div>
    
export default () => {
    return <EventsPage />;
};