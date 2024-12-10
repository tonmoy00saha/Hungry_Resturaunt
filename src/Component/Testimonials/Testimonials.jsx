import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-32">
            <SectionTitle
                heading={"---What Our Clients Say---"}
                subheading={"TESTIMONIALS"}
            ></SectionTitle>
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center my-16 mx-24 space-y-4">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="text-6xl"/>
                            <p className="text-center">{review.details}</p>
                            <h3 className="text-3xl font-medium text-[#CD9003]">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;