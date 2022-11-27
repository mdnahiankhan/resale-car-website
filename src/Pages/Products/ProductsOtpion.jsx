import React from 'react';
import { Link } from 'react-router-dom';

const ProductsOtpion = ({ product }) => {
    const { img, name, id } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Here the luxury brand .Choose your best brand what you want to choice.</p>
                <div className=" card-actions justify-end">
                    <Link to={`/category/${id}`} > <button className="btn btn-primary">Category</button></Link>
                </div>
            </div>
        </div>


    );
};

export default ProductsOtpion;