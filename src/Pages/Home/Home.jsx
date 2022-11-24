import React from 'react';
import Statistics from '../../Shared/States/Statistics';
import Products from '../Products/Products';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;