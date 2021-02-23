import React, { Component } from 'react';
import SEO from '../components/SEO';
import Header from '../components/header';
import Sponsors from '../components/sponsors';
import Footer from '../components/footer';

const SponsorsPage = () => 
        <div>
            <SEO />
            <div className='base px-3 md:px-5 lg:px-10 bg-base'>
                <Header />
                <Sponsors />
                <Footer />
            </div>
        </div>
    
export default () => {
    return <SponsorsPage />;
};