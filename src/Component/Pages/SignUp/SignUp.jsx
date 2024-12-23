import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

import background from '../../../assets/others/authentication.png'
import authenticationimg from '../../../assets/others/authentication1.png';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../../Providers/AuthProvider'
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../SocialLogin/SocialLogin";
const SignUp = () => {
    const myStyle = {
        backgroundImage: `url(${background})`,
    }

    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;

                updateUserProfile(data.name, data.photourl)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user created to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .then(error => console.log(error))
            })
    }


    return (
        <div>
            <Helmet>
                <title>Hungry | SignUp</title>
            </Helmet>
            <div style={myStyle} className="hero min-h-screen bg-base-200 p-28">
                <div className="hero-content flex flex-col md:flex-row-reverse md:gap-48">
                    <div className="">
                        <img src={authenticationimg} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm " id="">
                        <h2 className="text-3xl font-bold text-center">SignUp</h2>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">**This field is required**</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">**This field is required**</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photourl", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photourl && <span className="text-red-600">**This field is required**</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">**This field is required**</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">**Password must be 6 characters**</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">**Password must have one uppercase,one lowercase one number and one special character**</span>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#D1A054B3] text-white">SignUp</button>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className='text-center'>
                        <SocialLogin></SocialLogin>
                        </div>
                        <p className="text-center text-[#D1A054]"><small>Already registered? <Link to="/login">Go to log in</Link></small></p>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;