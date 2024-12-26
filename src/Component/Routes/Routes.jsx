import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems";
import Payment from "../../Component/Pages/Dashboard/Payment/Payment"
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            
        ]
    },
    {
       path: '/dashboard',
       element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
       children: [
        {
            path: 'userHome',
            element: <UserHome></UserHome>
        },
        {
            path: 'cart',
            element: <Cart></Cart>
        },
        // admin routes
        {
            path:'users',
            element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
            path:'adminHome',
            element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
            path: 'payment',
            element: <Payment></Payment>
        },
        {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
        },

        {
            path: 'addItems',
            element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
            path: 'manageItems',
            element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        },
       
       ]
    }
]);