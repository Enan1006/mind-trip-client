import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Packages from './Packages';

const Home = () => {
    return (
        <div>
            <Banner />
            <Packages />
            <Categories />
        </div>
    );
};

export default Home;