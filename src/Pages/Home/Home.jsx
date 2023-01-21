import React from 'react';
import Statistics from '../../Shared/States/Statistics';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Review from './CustomerReview/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Statistics></Statistics>
            <Review></Review>
        </div>
    );
};

export default Home;