import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import image from '../../assets/images-car.jpeg'

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {user?.uid ?
            <>
                <li><Link to='/dashboard'>DashBoard</Link></li>
                <li><button className='btn btn-accent rounded-lg' onClick={handleLogOut} >Sign Out</button></li>
            </> :
            <li><button className='btn btn-accent'><Link to='/login rounded-lg'>Login</Link></button></li>}
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className="flex items-center justify-center w-12 h-12 rounded-full" src={image} alt="" />
                <Link className="btn btn-ghost normal-case text-xl"> Resales Car Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;