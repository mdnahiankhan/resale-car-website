import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../../DashBoard/AddProducts/AddProducts";
import ManageAddProducts from "../../DashBoard/ManageAddProducts/ManageAddProducts";
import MyOrders from "../../DashBoard/MyOrders/MyOrders";
import Allsellers from "../../DashBoard/Sellers/Allsellers";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main/Main";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Category from "../../Pages/Products/Category/Category";
import Register from "../../Pages/Register/Register";
import Blog from "../../Shared/Blog/Blog";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/options/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/allusers/allseller',
                element: <AdminRoutes><Allsellers></Allsellers></AdminRoutes>
            },
            {
                path: '/dashboard/addProduct',
                element: <AdminRoutes><AddProducts></AddProducts></AdminRoutes>
            },
            {
                path: '/dashboard/manageAddproduct',
                element: <AdminRoutes> <ManageAddProducts></ManageAddProducts></AdminRoutes>
            },
        ]
    }
])
export default router;