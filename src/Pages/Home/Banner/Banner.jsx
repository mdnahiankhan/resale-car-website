import React, { useState } from 'react';
import "../../../Shared/css/style.css"
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const Banner = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());



    return (
        <div className=''>
            <section>
                <div className="car-image">
                    <div className=" container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-100">
                        <h1 className="text-xl font-bold leading-none sm:text-4xl xl:max-w-3xl dark:text-white mb-4">The Best Resales Car website wait for you which car you want.</h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="btn btn-accent">Get started</button>
                            <button className="btn btn-primary">Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-96 dark:bg-gray-500" >
                    <div className='bg-color grid md:grid-cols-1 lg:grid-cols-2 gap-24'>
                        <div className="space-y-2 p-6">
                            <h1 className=" text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</h1>
                            <h1 className=' text-2xl font-semibold sm:text-3xl dark:text-gray-100'>Pick Up the Day when do you like to purchase.</h1>
                        </div>
                        <div className="dark:text-gray-100 mr-6">
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            ></DayPicker>
                            <p>You have selected date: {format(selectedDate, 'PP')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;