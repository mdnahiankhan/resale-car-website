import React from 'react';

const ShowCategory = ({ option, setCars }) => {
    const { title, image_url, total_view, original_price, resale_price, uses, author } = option;
    return (
        <div className="max-w-xl p-6 rounded-md shadow-md dark:bg-gray-200 dark:text-gray-900">
            <img src={image_url} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">totalview: {total_view}</span>
                <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
            </div>
            <p className="dark:text-gray-900">Orignal Price :${original_price}</p>
            <p className="dark:text-gray-900">Resale Price :${resale_price}</p>
            <p className="dark:text-gray-900">Used :{uses} year</p>
            <p className="dark:text-gray-900">Posted :{author.published_date}</p>
            <label
                htmlFor="booking-modal"
                className="btn btn-primary text-center"
                onClick={() => setCars(option)}
            > Orders Now</label>
        </div>
    );
};

export default ShowCategory;