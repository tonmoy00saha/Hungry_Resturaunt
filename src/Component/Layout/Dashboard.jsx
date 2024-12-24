import { CiMenuBurger } from "react-icons/ci";
import { FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { MdRestaurant, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { Helmet } from "react-helmet";
import { TiThMenu } from "react-icons/ti";
import { TbBrandBooking } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div>
            <Helmet>
                <title>Hungry | Dashboard</title>
            </Helmet>
            <div className="flex gap-36 cinzel">
                <div className="w-64 min-h-screen bg-[#D1A054]">
                    <ul className="menu p-4 space-y-4">
                        {
                            isAdmin ? <>
                            <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome className="text-2xl font-semibold"></FaHome> <h2 className="text-lg font-semibold text-white">Admin Home</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                            <MdRestaurant className="text-2xl font-semibold"></MdRestaurant>  <h2 className="text-lg font-semibold text-white">Add Items</h2>
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/dashboard/manageItems">
                        <TiThMenu className="text-2xl font-semibold"></TiThMenu>  <h2 className="text-lg font-semibold text-white">Manage Items</h2>
                       </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageBookings">
                            <TbBrandBooking className="text-2xl font-semibold"></TbBrandBooking>  <h2 className="text-lg font-semibold text-white">Bookings</h2>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                            <FaPeopleGroup className="text-2xl font-semibold"></FaPeopleGroup > <h2 className="text-lg font-semibold text-white">All Users</h2>
                        </NavLink>
                    </li>
                            </> :
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userHome">
                                            <FaHome className="text-2xl font-semibold"></FaHome>  <h2 className="text-lg font-semibold text-white">User Home</h2>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/reservation">
                                            <FaCalendar className="text-2xl font-semibold"></FaCalendar> <h2 className="text-lg font-semibold text-white">Reservation</h2>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/dashboard/cart">
                                            <FaShoppingCart className="text-2xl font-semibold"></FaShoppingCart> <h2 className="text-lg font-semibold text-white"> My Cart ({cart.length})</h2>
                                           </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review">
                                            <MdReviews className="text-2xl font-semibold"></MdReviews> <h2 className="text-lg font-semibold text-white">Add Reviews</h2>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/bookings">
                                            <FaList className="text-2xl font-semibold"></FaList> <h2 className="text-lg font-semibold text-white">My Bookings</h2>
                                        </NavLink>
                                    </li>
                                </>
                        }
                        {/* shared navlinks */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <FaHome className="text-2xl font-semibold"></FaHome>  <h2 className="text-lg font-semibold text-white"> Home</h2>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu">
                                <CiMenuBurger className="text-2xl font-semibold"></CiMenuBurger> <h2 className="text-lg font-semibold text-white">Menu</h2> 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/salad">
                                <FaShoppingBag className="text-2xl font-semibold"></FaShoppingBag>  <h2 className="text-lg font-semibold text-white">Shop</h2>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/contact">
                                <FaEnvelope className="text-2xl font-semibold"></FaEnvelope> <h2 className="text-lg font-semibold text-white">Contact</h2>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;