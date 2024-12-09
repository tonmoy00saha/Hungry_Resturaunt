import img1 from '../../assets/home/chef-service.jpg';
import './About.css'
const About = () => {
    return (
        <div style={{ backgroundImage: `url(${img1})` }} className='p-28 bg-cover'>
            <div className='bg-white text-center px-40 py-24 space-y-4'>
                <h2 className='cinzel text-4xl cinzel'>Hungry Restaurant</h2>
                <p className='inter'>Hungry Restaurant – where cravings meet satisfaction! Indulge in a delightful dining experience with a menu crafted to tantalize your taste buds. From hearty meals to light bites, every dish is made with passion and fresh ingredients. Perfect for family dinners, casual outings, or quick lunches, Hungry Restaurant promises a warm atmosphere, excellent service, and flavors that keep you coming back for more. Come hungry, leave happy!
                </p>
            </div>
        </div>
    );
};

export default About;