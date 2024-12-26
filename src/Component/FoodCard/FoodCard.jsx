import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";




const FoodCard = ({ item }) => {
    const { name, image, price, recipe,_id } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch]= useCart();

    const handleAddToCard= () =>{
        if(user && user.email){
            // send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image, 
                price
            };
         
            axiosSecure.post('/carts', cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId)
                {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch the cart to update the cart items count
                    refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                //   send the user to the login page
                navigate('/login', {state: {from : location}});
                }
              });
        }
    }
    return (
     
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 px-4 py-2 mt-4 mr-4">${price}</p>
                <div className="card-body text-center items-center">
                    <h2 className="card-title ">{name}</h2>
                    <p >{recipe}</p>
                    <div className="card-actions justify-center">
                    <button onClick={handleAddToCard}
                     className="btn btn-outline bg-slate-100 text-[#BB8506] border-[#BB8506] border-0 border-b-4 ">Add to Cart</button>
                    </div>
                </div>
         
        </div>
    );
};

export default FoodCard;