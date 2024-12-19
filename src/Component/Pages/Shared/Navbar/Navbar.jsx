import { Link, NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
const Navbar = () => {
    const navOptions =
        <>
            <li><NavLink to="/">HOME</NavLink></li>
            <li><Link>CONTACT US</Link></li>
            <li><Link>DASHBOARD</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/order/salad">Order Food</Link></li>
            <li><Link to="/login">Login</Link></li>
        </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-[#151515] md:flex md:justify-between max-w-screen-xl text-white">
            <div >
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-extrabold">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case"><span className="text-3xl font-black">HUNGRY</span><span className="text-2xl font-bold">RESTAURANT</span></a>
            </div>
            <div >
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-extrabold gap-3">
                        {navOptions}
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar;