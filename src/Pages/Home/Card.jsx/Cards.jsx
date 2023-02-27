import React from 'react';
import car1 from '../../../assets/car-img.jpg'
import car2 from '../../../assets/car.2.jpg'
import car3 from '../../../assets/car.3.jpg'
import car4 from '../../../assets/car.4.jpg'
import car5 from '../../../assets/car.jpg'

const Cards = () => {
    return (
        <div>
            <section className="py-6  dark:text-gray-500">
                <h1 className='text-center text-lg
                 font-bold text-black
                 '>Here You can see different types of cars which you demand on your wish.</h1>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <img src={car1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={car2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={car3} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={car4} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={car5} />
                </div>
            </section>
        </div>
    );
};

export default Cards;