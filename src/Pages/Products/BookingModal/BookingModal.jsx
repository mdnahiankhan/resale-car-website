import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ cars, setCars }) => {
    const { title, resale_price, image_url } = cars;
    const { user } = useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const cars = form.cars.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const imageUrl = form.imageUrl.value;
        const booking = {
            name,
            email,
            car_names: cars,
            carPrice: price,
            phone,
            location,
            imageUrl
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setCars(null)
                    toast.success('Booking Confirmed Successfully')
                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="name" name='name' readOnly defaultValue={user?.displayName} placeholder="your name" className="input input-bordered w-full " />
                        <input type="email" required name='email' readOnly defaultValue={user?.email} placeholder="your Email" className="input input-bordered w-full " />
                        <input type="text" required disabled defaultValue={title} name='cars' placeholder="item name" className="input input-bordered w-full " />
                        <input type="text" disabled defaultValue={resale_price} name='price' placeholder="items price" className="input input-bordered w-full " />
                        <input type="text" required name='phone' placeholder="enter your phone number" className="input input-bordered w-full " />
                        <input type="text" required name='location' placeholder="enter your meeting location" className="input input-bordered w-full " />
                        <input type="text" required name='imageUrl' defaultValue={image_url} disabled placeholder="enter your meeting location" className="input input-bordered w-full " />
                        <br />
                        <input className='w-full  btn btn-accent' type="submit" value='submit' />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;