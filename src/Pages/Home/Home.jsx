import React from 'react';
import HowGet from '../../Shared/Offered/HowGet';
import Offered from '../../Shared/Offered/Offered';
import Statistics from '../../Shared/States/Statistics';
import Features from '../Features/Features';
import Products from '../Products/Products';
import Getproducts from '../ProductsMarket/Getproducts';
import ProductsMarket from '../ProductsMarket/ProductsMarket';
import Banner from './Banner/Banner';
import Cards from './Card.jsx/Cards';
import Connects from './Connects/Connects';
import Review from './CustomerReview/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Statistics></Statistics>
            <ProductsMarket></ProductsMarket>
            <Cards></Cards>
            <Review></Review>
            <Features></Features>
            <Offered></Offered>
            <HowGet></HowGet>
            <Getproducts></Getproducts>
            <Connects></Connects>
        </div>
    );
};

export default Home;