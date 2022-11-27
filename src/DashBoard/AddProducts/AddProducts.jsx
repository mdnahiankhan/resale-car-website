import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddProducts = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { data: productsnames, isLoading } = useQuery({
        queryKey: ['productsName'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productsName')
            const data = await res.json();
            return data;
        }
    })



    if (isLoading) {
        return <Loading></Loading>
    }

    const handleaddProduct = data => {
        console.log(data);
        const addProducts = {
            name: data.name,
            price: data.price,
            condition: data.condition,
            categories: data.categories,
            mobileno: data.mobile,
            location: data.location,
            purchaseyear: data.purchaseyear
        }
        fetch('http://localhost:5000/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addProducts)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`Congratulation Your ${data.name}  products is added`)
                navigate('/dashboard/manageAddproduct')
            })
    }

    return (
        <div>
            <h1>This is Add products</h1>
            <form className='w-96 p-7' onSubmit={handleSubmit(handleaddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Products Name</span>
                    </label>
                    <input type='text' {...register("name")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text ">Price</span>
                    </label>
                    <input type='text' {...register("price")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text ">Products Validity</span>
                    </label>
                    <select
                        {...register("condition")}
                        className="select input-bordered w-full max-w-xs">
                        <option disabled selected>Products Condition Now</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Products in Categories</span>
                    </label>
                    <select
                        {...register("categories")}
                        className="select input-bordered w-full max-w-xs">
                        <option

                            disabled selected>Please select the product Categories</option>
                        {
                            productsnames.map(name => <option
                                key={name._id}
                                defaultValue={name.name}
                            >{name.name}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input type='number' {...register("mobile", { required: true })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location Where Used</span>
                    </label>
                    <input type='location' {...register("location", { required: true })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Year Of purchase</span>
                    </label>
                    <input type='location' {...register("purchaseyear", { required: true })} className="input input-bordered w-full max-w-xs" />
                </div>
                <input className='btn btn-accent w-full mt-2' value='Add Products' type="submit" />

            </form>
        </div>
    );
};

export default AddProducts;