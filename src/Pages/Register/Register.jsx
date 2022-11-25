import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const signUphandler = data => {
        console.log(data);
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
                    <input className='btn btn-accent w-full mt-2' value='Login' type="submit" />
                </form>
                <p>Have an account to resales car ? please <Link to='/login' className='text-white'>Login your account</Link></p>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                </p>
            </div>
        </div>
    );
};

export default Register;