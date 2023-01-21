import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `https://resale-website-server-ten.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [], refetch, isLoading } = useQuery({
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
    const handleMyOrder = booking => {
        fetch(`https://resale-website-server-ten.vercel.app/bookings/${booking._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Your Selected Products Delete Successfully')
                refetch();
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
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
                            <th>Delete Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id} >
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={booking?.imageUrl} alt="" />
                                    </div>
                                </div></td>
                                <td>{booking?.name}</td>
                                <td>{booking?.car_names}</td>
                                <td>${booking?.carPrice}</td>
                                <td>
                                    {
                                        booking.carPrice && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-sm btn-accent '>Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.carPrice && booking.paid &&
                                        <button className='text-green-500'>Paid</button>
                                    }
                                </td>
                                <td><button onClick={() => handleMyOrder(booking)} className='btn btn-accent'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;