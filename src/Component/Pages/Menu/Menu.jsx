import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img1 from '../../../assets/menu/banner3.jpg'
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import salad from '../../../assets/menu/salad-bg.jpg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import PopularMenu from '../../PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Hungry | Menu</title>
            </Helmet>
            <Cover img={img1} title={"our menu"} description={"would you like to try a dish?"}></Cover>
            <PopularMenu 
            select={'offered'} heading={"---Don't miss---"} subheading={"TODAY'S OFFER"}
            ></PopularMenu>
            <Cover img={dessert} title={"Desserts"} description={"Indulge in our delectable desserts, the perfect sweet ending to your meal!"}></Cover>
            <PopularMenu 
            select={'dessert'} heading={""} subheading={"Desserts Items"}
            ></PopularMenu>
            <Cover img={pizza} title={"Pizza"} description={"Delicious, handcrafted pizzas made fresh with the finest ingredients!"}></Cover>
            <PopularMenu 
            select={'pizza'} heading={""} subheading={"Pizza Items"}
            ></PopularMenu>
            <Cover img={soup} title={"Soups"} description={"Fresh, vibrant salads made with crisp ingredients and bold flavors."}></Cover>
            <PopularMenu 
            select={'soup'} heading={""} subheading={"Soup Items"}
            ></PopularMenu>
            <Cover img={salad} title={"Salads"} description={"Fresh, vibrant salads made with crisp ingredients and bold flavors"}></Cover>
            <PopularMenu 
            select={'salad'} heading={""} subheading={"Salad Items"}
            ></PopularMenu>

        </div>
    );
};

export default Menu;