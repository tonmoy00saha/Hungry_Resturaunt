import About from "../../About/About";
import CallUs from "../../CallUs/CallUs";
import Category from "../../Category/Category";
import Featured from "../../Featured/Featured";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Hungry | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu select={'popular'} heading={"---Check it out---"} subheading={"FROM OUR MENU"}></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;