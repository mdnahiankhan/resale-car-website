import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUperror, setSignUperror] = useState('');
    const navigate = useNavigate()
    const signUphandler = data => {
        console.log(data);
        setSignUperror('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast('User created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error);
                setSignUperror(error.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-400 dark:text-gray-900">
                <h1 className="text-2xl font-bold text-center">SignUP</h1>
                <form className='w-96 p-7' onSubmit={handleSubmit(signUphandler)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type='text' {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text' {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password", { required: true })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <label className="label">
                        <span className="label-text">forgot password ?</span>
                    </label>
                    <input className='btn btn-accent w-full mt-2' value='SignUp' type="submit" />
                    {signUperror && <p className='text-red-500'>{signUperror}</p>}
                </form>
                <p>Have an account to resales car ? please <Link to='/login' className='text-white'>Login your account</Link></p>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                </p>
            </div>
        </div>
    );
};

export default Register;