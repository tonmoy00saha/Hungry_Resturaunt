import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer >
            <div className=" bg-[#1F2937] text-neutral-content p-10 flex justify-center gap-80 mt-14">
              
                    <div >
                        <h2 className="text-3xl font-medium text-center">CONTACT US</h2>
                        <div className="text-lg font-medium text-center">
                            <h3>34/8, Talaimari, Rajshahi</h3>
                            <p>+880 1777777777</p>
                            <p>Mon - Fri : 08:00 - 22:00</p>
                            <p>Sat - Sun : 10:00 - 23:00</p>
                        </div>
                    </div>
               
               
                    <div className="text-center space-y-6">
                        <h2 className="text-3xl font-medium">Follow Us</h2>
                        <p>Join us on social media</p>
                        <div className="flex text-xl gap-4 justify-center">
                         
                            <a href=""><FaFacebook></FaFacebook></a>
                            <a href=""><FaInstagram></FaInstagram></a>
                            <a href=""><FaTwitter></FaTwitter></a>


                        </div>
                    </div>
                
            </div>
            <div className=" bg-black text-neutral-content p-4 text-center">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Hungry Restaurant</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;