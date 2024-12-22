import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import '../Navbar/Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useCart from "../../../../hooks/useCart";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><Link to="/secret">Secret</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/order/salad">Order Food</Link></li>
            <li><Link to="/dashboard/cart">
                <button className="btn gap-2">
                    <FaCartPlus></FaCartPlus>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link></li>

            {
                user ?
                    <>
                        {/* <span>{user?.displayName}</span> */}
                        <button className="btn btn-ghost text-lg font-semibold" onClick={handleLogOut}>Logout</button></> :
                    <><li><Link to="/login">Login</Link></li></>
            }
        </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-[#151515] md:flex md:justify-between max-w-screen-xl text-white">
            <div >
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52 text-lg font-semibold">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case"><span className="text-3xl font-black">HUNGRY</span><span className="text-2xl font-bold">RESTAURANT</span></a>
            </div>
            <div >
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal items-center px-1  font-semibold">
                        {navOptions}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;