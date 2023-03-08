import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageAddProducts = () => {
    const [deleteAddproducts, setdeleteAddproducts] = useState(null)
    const closeModal = () => {
        setdeleteAddproducts(null)
    }



    const { data: addproducts, isLoading, refetch } = useQuery({
        queryKey: ['addproducts'],
        queryFn: async () => {
            try {
                const res = await fetch('https://resale-website-server-ten.vercel.app/addproducts', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    })

    const deleteproducts = product => {
        fetch(`https://resale-website-server-ten.vercel.app/addproducts/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `beare ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    toast.success(`Your Products ${product.name} Delete Successfully`)
                }
            })

    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Products Name</th>
                            <th>Quality of Car</th>
                            <th>Price</th>
                            <th>Used Location</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addproducts?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.condition}</td>
                                <td>${product.price}</td>
                                <td>${product.location}</td>
                                <td><button className='btn btn-accent btn-sm'>Available</button></td>
                                <td>
                                    <label onClick={() => setdeleteAddproducts(product)} htmlFor="confirmation-modal" className="btn btn-sm">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteAddproducts && <ConfirmationModal
                    title={`Are You sure you want to delete Your product`}
                    message={`if you delete ${setdeleteAddproducts.name} it can't be retained`}
                    deleteproducts={deleteproducts}
                    successbutton='Delete'
                    modaldata={deleteAddproducts}
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageAddProducts;