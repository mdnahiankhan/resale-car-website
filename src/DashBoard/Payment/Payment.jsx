import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const data = useLoaderData();
    const { car_names, carPrice, } = data;

    return (
        <div>
            <h1 className='text-3xl mb-5'>Payment for {car_names}</h1>
            <p className='text-xl'>Your Total payment <strong> ${carPrice} </strong> for {car_names} .Please pay and confirmed your Booking.</p>
            <div className='w-96 my-6 '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        data={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;