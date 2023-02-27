import React from 'react';
import { FaCarBattery } from "react-icons/fa";
import { BiCycling, BiGitCompare, BiCar } from "react-icons/bi";
import car from "../../assets/1.jpg"

const Offered = () => {

    return (
        <div>
            <section className=" dark:text-gray-900">
                <h1 className='text-3xl font-bold text-center
    '>What do we offer?</h1>
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-100 dark:text-gray-900">
                        <div className="flex space-x-8 sm:space-x-4">
                            <FaCarBattery className='h-24 w-24'></FaCarBattery>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">All time engine reparing system.</p>
                                <p className="leading-snug">We have some skilled helpfull machine engenieer.</p>
                            </div>
                        </div>
                        <div className="flex space-x-8 sm:space-x-4">
                            <BiCycling className='h-24 w-24
                            ' />
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Have an original License and get all document for every car.</p>
                                <p className="leading-snug">Make sure you to up to the mark for your money and mind.</p>
                            </div>
                        </div>
                        <div className="flex space-x-8 sm:space-x-4">
                            <BiGitCompare className='h-20 w-20'></BiGitCompare>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Compare from other Car.</p>
                                <p className="leading-snug">Choose the right car for you.</p>
                            </div>
                        </div>
                        <div className="flex space-x-8 sm:space-x-4">
                            <BiCar className='h-20 w-20'></BiCar>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">Car Sold</p>
                                <p className="leading-snug">In every 30 minutes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[1440px] mx-auto lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={car} alt="" className="rounded-lg shadow-lg sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Offered;