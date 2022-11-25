import React from 'react';

const BookingModal = ({ cars, setCars }) => {
    const { title, resale_price } = cars;
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const cars = form.cars.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value
        const booking = {
            name,
            email,
            car_names: cars,
            car: price,
            phone,
            location
        }
        console.log(booking);
        setCars(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="name" name='name' placeholder="your name" className="input input-bordered w-full " />
                        <input type="email" required name='email' placeholder="your Email" className="input input-bordered w-full " />
                        <input type="text" required disabled value={title} name='cars' placeholder="item name" className="input input-bordered w-full " />
                        <input type="text" disabled value={resale_price} name='price' placeholder="items price" className="input input-bordered w-full " />
                        <input type="text" required name='phone' placeholder="enter your phone number" className="input input-bordered w-full " />
                        <input type="text" required name='location' placeholder="enter your meeting location" className="input input-bordered w-full " />
                        <br />
                        <input className='w-full  btn btn-accent' type="submit" value='submit' />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;