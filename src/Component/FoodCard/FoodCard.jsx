

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
     
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 px-4 py-2 mt-4 mr-4">${price}</p>
                <div className="card-body text-center items-center">
                    <h2 className="card-title ">{name}</h2>
                    <p >{recipe}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-outline bg-slate-100 text-[#BB8506] border-[#BB8506] border-0 border-b-4 ">Add to Cart</button>
                    </div>
                </div>
         
        </div>
    );
};

export default FoodCard;