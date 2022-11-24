import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCategory from './ShowCategory';

const Category = () => {
    const options = useLoaderData();
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5'>
            {
                options.map(option => <ShowCategory
                    key={option.title}
                    option={option}
                ></ShowCategory>)
            }
        </div>
    );
};

export default Category;