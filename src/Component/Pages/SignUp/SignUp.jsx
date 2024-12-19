import { Helmet } from "react-helmet";
import background from '../../../assets/others/authentication.png'
import authenticationimg from '../../../assets/others/authentication1.png';
import { Link } from "react-router-dom";
const SignUp = () => {
     const myStyle = {
            backgroundImage: `url(${background})`,
        }
        const handleSignUp = e=>{

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
                    <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm " id="">
                        <h2 className="text-3xl font-bold text-center">SignUp</h2>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                            </div>
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
                            
                            <div className="form-control mt-6">
                                <button  className="btn bg-[#D1A054B3] text-white">SignUp</button>
                            </div>
                        </div>
                        <p className="text-center text-[#D1A054]"><small>Already registered? <Link to="/login">Go to log in</Link></small></p>
                       
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default SignUp;