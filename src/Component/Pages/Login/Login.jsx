import { IoMdCheckmark } from "react-icons/io";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from "react-helmet";
import authenticationimg from '../../../assets/others/authentication1.png';
import background from '../../../assets/others/authentication.png'
import { useEffect, useRef, useState } from 'react';
const Login = () => {
    const myStyle = {
        backgroundImage: `url(${background})`,
    }
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


    
    }
    const handleCaptcha = e =>{
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)==true){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

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
                        <h2 className="text-3xl font-semibold text-center">Login</h2>
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
                                <div className="flex">
                                <input ref={captchaRef}  type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered w-full" />
                                <button className="btn p-4 border-0" onClick={handleCaptcha}><IoMdCheckmark></IoMdCheckmark></button>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn bg-[#D1A054B3] text-white">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;