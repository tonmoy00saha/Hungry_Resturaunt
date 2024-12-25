import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../Pages/Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";


const PopularMenu = ({items}) => {
    
    return (
        <div>
            <section className="my-16">
               
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                    {
                        items.map(item=> <MenuItem
                            key={item._id}
                            item={item}
                            ></MenuItem>)
                      
                    }
                </div>
                <div className="text-center mt-8">
               
                    <Link to={`/order/${items}`}> <button className="btn btn-outline border-0 border-b-4 ">Order Now</button></Link>
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;