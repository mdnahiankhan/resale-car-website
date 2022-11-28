import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const Allsellers = () => {
    const { user } = useContext(AuthContext);
    const url = `https://resale-website-server-ten.vercel.app/sellers?email=${user?.email}`
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })

    const handlemakeadmin = id => {
        fetch(`https://resale-website-server-ten.vercel.app/sellers/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully');
                    refetch();
                }

            })
    }
    const handleDeleteSellers = seller => {
        fetch(`https://resale-website-server-ten.vercel.app/sellers/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }

    const handleverified = id => {
        fetch(`https://resale-website-server-ten.vercel.app/sellers/verified/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }



    return (
        <div>
            <h1 className='text-3xl font-bold mb-6'>This is all sellers{sellers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email Adress</th>
                            <th>Shop Name</th>
                            <th>Sellers Status</th>
                            <th>Delete</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.seller}</td>
                                <td>{
                                    <button onClick={() => handleverified(seller._id)} className='btn btn-warning btn-sm'>{seller.status ? seller.status : 'verify'}</button>

                                }


                                </td>
                                <td><button className='btn btn-accent' onClick={() => handleDeleteSellers(seller)}>Delete</button></td>
                                <td>{seller?.role !== "admin" && <button onClick={() => handlemakeadmin(seller._id)} className='btn btn-accent btn-sm'>Make Admin</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allsellers;