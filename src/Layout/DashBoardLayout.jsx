import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/Useadmin';
import Navbar from '../Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side gap-y-2">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 lg:hidden:bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Orders</Link></li>

                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/manageAddproduct'>Available Products</Link></li>
                                <li><Link to='/dashboard/allusers/'>All Buyers</Link></li>
                                <li><Link to='/dashboard/allusers/allseller'>All Sellers</Link></li>
                                <li><Link to='/dashboard/addProduct'>Add A products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;