import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ShowCategory from './ShowCategory';

const Category = () => {
    const options = useLoaderData();
    const [cars, setCars] = useState(null)
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5'>
            {
                options.map(option => <ShowCategory
                    key={option.title}
                    option={option}
                    setCars={setCars}
                ></ShowCategory>)
            }
            {
                cars &&
                <BookingModal
                    cars={cars}
                    setCars={setCars}
                ></BookingModal>}
        </div>
    );
};

export default Category;