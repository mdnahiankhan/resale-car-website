import React from 'react';

import photo from '../../assets/Images.jpg'

const ProductsMarket = () => {
    return (
        <div>
            <div className="hero bg-base-200 mb-4 rounded">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm mx-auto rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">If you have different test here it is !</h1>
                        <p className="py-6">Here you can test different type of stylist used car on your targetted prices.We try to keep car prices are your budget.Whether you can buy your prefferable car on our website. </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsMarket;