import React from 'react';
import Statistics from '../../Shared/States/Statistics';
import Products from '../Products/Products';
import Getproducts from '../ProductsMarket/Getproducts';
import ProductsMarket from '../ProductsMarket/ProductsMarket';
import Banner from './Banner/Banner';
import Connects from './Connects/Connects';
import Review from './CustomerReview/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Statistics></Statistics>
            <ProductsMarket></ProductsMarket>
            <Review></Review>
            <Getproducts></Getproducts>
            <Connects></Connects>
        </div>
    );
};

export default Home;