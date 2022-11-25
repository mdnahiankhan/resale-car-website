import React from 'react';
import { Link } from 'react-router-dom';

const ProductsOtpion = ({ product }) => {
    const { img, name, id } = product;
    return (
        <div className=" card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>You have to choose a Brand which you take the brand which You liked most.</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${id}`} > <button className="btn btn-primary">Got to the Car</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsOtpion;