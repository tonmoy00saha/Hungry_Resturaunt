import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../SectionTitle/SectionTitle";


const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item.name);
    return (
        <div className="my-12">
            <SectionTitle
            heading=""
            subheading="Update AN Item"
            ></SectionTitle>
        </div>
    );
};

export default UpdateItem;