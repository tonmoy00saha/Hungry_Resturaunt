import FoodCard from "../FoodCard/FoodCard";


const FoodCardItem = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                items.map(data=> <FoodCard key={data._id} item={data}></FoodCard>)
            }
        </div>
    );
};

export default FoodCardItem;