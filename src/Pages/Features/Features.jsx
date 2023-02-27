import React from 'react';

import car1 from '../../assets/car-6-ferra.jpg'
import car2 from '../../assets/car-5-mer.jpg'
import car3 from '../../assets/car-4-hor.jpg'
import car4 from '../../assets/car-3-tes.jpg'
import car5 from '../../assets/Car-2-ra.webp'
import car6 from '../../assets/Car-1-pe.jpg'

const Features = () => {
    return (
        <div>
            <section className="m-4 md:m-8 dark:text-gray-900">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center" data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h2 className="text-5xl font-bold">Worlds Famous Car you can from purchasing our company.</h2>
                    <p className="dark:text-gray-400">Lets see some high-profiled car </p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div className="flex flex-col items-center p-4">
                        <img src={car1} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Ferrari Italia</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4" data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={car2} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Marcedes</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={car3} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Hornate</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4" data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <img src={car4} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Tesla</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <img src={car5} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Range Rover</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4" data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <img src={car6} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">Peugeot</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;