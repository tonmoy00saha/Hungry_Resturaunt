import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo = {
                email : result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn rounded-full border-[#D1A054]">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;