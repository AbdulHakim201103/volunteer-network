import React from 'react';
import Banner from '../Banner/Banner';
import EventCategory from '../EventCategory/EventCategory';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <EventCategory></EventCategory>
        </div>
    );
};

export default Home;