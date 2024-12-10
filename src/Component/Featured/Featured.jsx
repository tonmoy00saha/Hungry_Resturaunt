import img from '../../assets/home/featured.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';
import dateFormat from "dateformat";
const Featured = () => {
    return (
        <div style={{ backgroundImage: `url(${img})`}} className='bg-cover bg-fixed  text-white '>
           
            <div  className='bg-[#151515B2] bg-opacity-70 pt-8'>
            <section>
                <SectionTitle
                heading={"---Check it out---"}
                subheading={"FROM OUR MENU"}
                ></SectionTitle>
            </section>
            <div className='md:flex justify-center items-center py-20 px-36 md:gap-10'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='space-y-4'>
                    <p className='text-2xl'>{dateFormat("longDate")}</p>
                    <p className='text-2xl'> WHERE CAN I GET SOME?</p>
                    <p>Hungry Restaurant offers a well-rounded menu that caters to all tastes, featuring irresistible pizzas, fresh salads, comforting soups, and indulgent desserts. The pizzas boast perfectly crisp, chewy crusts topped with fresh, flavorful ingredients, while the salads are vibrant and refreshing, ideal for a lighter option. The soups provide warmth and comfort with every spoonful, and the desserts are the perfect finale, offering a balance of decadent and fruity choices. Whether you're craving a hearty slice or a sweet indulgence, this menu delivers a delightful dining experience for any occasion.</p>
                    <button className='btn btn-outline text-white border-0 border-b-4'>Order Now</button>

                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;