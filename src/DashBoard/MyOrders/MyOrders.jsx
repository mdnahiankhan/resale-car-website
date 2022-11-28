import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })



    return (
        <div>
            <h3 className='text-3xl font-bold mb-6'>My Orders</h3>
            <div className="overflow-x-auto">

                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Car Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id} >
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={booking.imageUrl} alt="" />
                                    </div>
                                </div></td>
                                <td>{booking.name}</td>
                                <td>{booking.car_names}</td>
                                <td>${booking.carPrice}</td>
                                <td>
                                    {
                                        booking.carPrice && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-sm btn-accent'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.carPrice && booking.paid &&
                                        <button className='btn btn-sm btn-success'>Paid</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;