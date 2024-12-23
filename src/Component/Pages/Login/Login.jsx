
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from "react-helmet";
import authenticationimg from '../../../assets/others/authentication1.png';
import background from '../../../assets/others/authentication.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from '../../SocialLogin/SocialLogin';
const Login = () => {
    const myStyle = {
        backgroundImage: `url(${background})`,
    };

    const [disabled, setDisabled] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        signIn(email, password)
            .then(result => {
                console.log(result);
                if (validateCaptcha(captcha) == true)
                {
                    Swal.fire({
                        title: "User Login Successful",
                        showClass: {
                            popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                        },
                        hideClass: {
                            popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                        }
                    });
                    navigate(from, { replace: true });
                }
                else
                {
                    setDisabled(true);
                }
            })

    }
  
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    return (
        <div>
            <Helmet>
                <title>Hungry | Login</title>
            </Helmet>
            <div style={myStyle} className="hero min-h-screen bg-base-200 p-28">
                <div className="hero-content flex flex-col md:flex-row md:gap-48">
                    <div className="">
                        <img src={authenticationimg} alt="" />
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm " id="">
                        <h2 className="text-3xl font-bold text-center">Login</h2>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input  type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered " />
                                { disabled && <p className='text-red-700'>***Incorrect Captcha***</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D1A054B3] text-white">Login</button>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className='text-center'>
                        <SocialLogin></SocialLogin>
                        </div>
                        <p className="text-center text-[#D1A054]"><small>New Here? <Link to="/signup">Create an account</Link></small></p>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Login;