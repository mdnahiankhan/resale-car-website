import React from 'react';
import { Link } from 'react-router-dom';

const ProductsOtpion = ({ product }) => {
    const { img, name, id } = product;
    console.log(product);
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
            <figure><img src={img} alt="Car" /></figure>
            <div className="card-body cards-container">
                <h2 className="card-title font-bold text-3xl">{name}</h2>
                <p >Here your luxury car brand <span className='text-warning font-bold'>{name}</span> .Choose your best car's what you want to Buy.</p>
                <div className=" card-actions justify-end">
                    <Link to={`/category/${id}`} > <button className="btn btn-primary">Products</button></Link>
                </div>
            </div>
        </div>


    );
};

export default ProductsOtpion;