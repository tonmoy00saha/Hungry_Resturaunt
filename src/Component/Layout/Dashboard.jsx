import { CiMenuBurger } from "react-icons/ci";
import { FaCalendar, FaHome, FaList, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex gap-36 cinzel">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4 space-y-4">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>Reservation
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                        My Cart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <MdReviews></MdReviews>Add Reviews
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                            <FaList></FaList>My Bookings
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>  Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <CiMenuBurger></CiMenuBurger> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaShoppingBag></FaShoppingBag> Shop
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;