import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../Pages/Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";


const PopularMenu = ({select,heading, subheading}) => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItems = data.filter(item=> item.category === select);
            setMenu(popularItems);
        });
    },[])
    return (
        <div>
            <section className="my-16">
                <SectionTitle
                heading={heading}
                subheading={subheading}
                ></SectionTitle>
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                    {
                        menu.map(item=> <MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className="text-center mt-8">
               
                    <Link to={`/order/${select}`}> <button className="btn btn-outline border-0 border-b-4 ">Order Now</button></Link>
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;