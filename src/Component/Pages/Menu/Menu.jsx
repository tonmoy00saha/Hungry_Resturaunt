import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img1 from '../../../assets/menu/banner3.jpg'
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import salad from '../../../assets/menu/salad-bg.jpg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import PopularMenu from '../../PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../SectionTitle/SectionTitle';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const offereds = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Hungry | Menu</title>
            </Helmet>
            <Cover img={img1} title={"our menu"} description={"would you like to try a dish?"}></Cover>

            <div className='my-12'><SectionTitle heading={"---Don't miss---"} subheading={"TODAY'S OFFER"}></SectionTitle></div>

            <PopularMenu
                items={offereds}
            ></PopularMenu>

            <Cover img={dessert} title={"Desserts"} description={"Indulge in our delectable desserts, the perfect sweet ending to your meal!"}></Cover>

            <div className='my-12'><SectionTitle heading={""} subheading={"Desserts Items"}></SectionTitle></div>

            <PopularMenu
                items={desserts}
            ></PopularMenu>

            <Cover img={pizza} title={"Pizza"} description={"Delicious, handcrafted pizzas made fresh with the finest ingredients!"}></Cover>

            <div className='my-12'><SectionTitle heading={""} subheading={"Pizza Items"}></SectionTitle></div>

            <PopularMenu
                items={pizzas}
            ></PopularMenu>

            <Cover img={soup} title={"Soups"} description={"Fresh, vibrant salads made with crisp ingredients and bold flavors."}></Cover>

            <div className='my-12'> <SectionTitle heading={""} subheading={"Soup Items"}></SectionTitle></div>

            <PopularMenu
                items={soups}
            ></PopularMenu>
            <Cover img={salad} title={"Salads"} description={"Fresh, vibrant salads made with crisp ingredients and bold flavors"}></Cover>

            <div className='my-12'><SectionTitle heading={""} subheading={"Salad Items"}></SectionTitle></div>

            <PopularMenu
                items={salads}
            ></PopularMenu>

        </div>
    );
};

export default Menu;