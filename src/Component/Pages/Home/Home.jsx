import About from "../../About/About";
import CallUs from "../../CallUs/CallUs";
import Category from "../../Category/Category";
import Featured from "../../Featured/Featured";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;