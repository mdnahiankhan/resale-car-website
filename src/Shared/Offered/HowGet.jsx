import React from 'react';
import { FcTemplate, FcVoicePresentation, FcSms, FcMoneyTransfer, FcSelfServiceKiosk } from "react-icons/fc";
import "../css/style.css"
const HowGet = () => {
    return (
        <div className='mt-4'>
            <h1 className='ml-48 text-3xl font-bold'>How to buy your car with resales car portal?</h1>
            <div className='max-w-[1440px] mx-auto 
         shadow-xl mt-4 mb-4 rounded-lg'>
                <div className="flex w-full h-64  box-shadow p-6">
                    <div className="grid h-auto flex-grow card rounded place-items-center">
                        <h1>Step 1 </h1>
                        <FcSelfServiceKiosk className='h-24 w-24
                        '></FcSelfServiceKiosk>
                        <h1>Choose Your car.</h1>
                        <p>We have compiled recommended information that you want to know to buy your car.</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-20 flex-grow card rounded place-items-center">
                        <h1>Step 2 </h1>
                        <FcVoicePresentation className='h-24 w-24
                        '></FcVoicePresentation>
                        <h1>Contact Seller</h1>
                        <p>After you've selected a car, we arrange a viewing to seller location or one of our points.</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-20 flex-grow card rounded place-items-center">
                        <h1>Step 3 </h1>
                        <div className='flex '><FcTemplate className='h-24 w-24
                        '></FcTemplate><FcMoneyTransfer className='h-24 w-24
                        '></FcMoneyTransfer></div>
                        <h1>Financing & Registration</h1>
                        <p>We deal with the paper work to avail your financing and registration in 24 hours</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-20 flex-grow card rounded place-items-center p-2">
                        <h1>Step 4 </h1>
                        <FcSms className='h-24 w-24
                        '></FcSms>
                        <h1>Get your car.</h1>
                        <p>Embrace the joy of Car Ownership without any of the hassle!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowGet;