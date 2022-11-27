
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/UseToken';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)

            })
            .catch(error => console.error(error))
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-400 dark:text-gray-900">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form className='w-96 p-7' onSubmit={handleSubmit(handleLogin)}>
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
                <p>New to resales car ? please <Link to='/register' className='text-white'>create a new account</Link></p>

            </div>
        </div>
    );
};

export default Login;