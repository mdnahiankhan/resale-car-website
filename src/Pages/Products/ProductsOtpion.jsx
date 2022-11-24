import React from 'react';
import { Link } from 'react-router-dom';

const ProductsOtpion = ({ product }) => {
    const { img, name, price, id } = product;
    return (
        <div className=" card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>

            <div className="card-body">
                <p>Price: ${price}</p>
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${id}`} > <button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsOtpion;