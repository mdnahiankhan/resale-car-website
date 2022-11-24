import React, { useEffect, useState } from 'react';
import ProductsOtpion from './ProductsOtpion';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            })
    }, [])
    return (
        <div className='mt-16 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(product => <ProductsOtpion
                    key={product._id}
                    product={product}
                >
                </ProductsOtpion>)
            }
        </div>
    );
};

export default Products;