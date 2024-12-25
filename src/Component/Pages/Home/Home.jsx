import useMenu from "../../../hooks/useMenu";
import About from "../../About/About";
import CallUs from "../../CallUs/CallUs";
import Category from "../../Category/Category";
import Featured from "../../Featured/Featured";
import PopularMenu from "../../PopularMenu/PopularMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div>
             <Helmet>
                <title>Hungry | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <div className="my-12"><SectionTitle heading={"---Check it out---"} subheading={"FROM OUR MENU"}></SectionTitle></div>
            <PopularMenu items={popular} ></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;