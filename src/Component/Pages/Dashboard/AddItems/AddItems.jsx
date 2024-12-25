import { useForm } from "react-hook-form";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddItems = () => {

    const axiosSecure = useAxiosSecure();
    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: data.image
        }
        const menuRes = await axiosSecure.post('/menu', menuItem);

        if (menuRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu`,
                showConfirmButton: false,
                timer: 1500
            });

        }




    };
    return (
        <div className="my-12">
            <SectionTitle
                heading="-----What's New?-----"
                subheading="ADD AN ITEM"
            ></SectionTitle>
            <div className="bg-base-200 p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe name *</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                        {errors.name && <span className="text-red-600">**This field is required**</span>}

                    </div>
                    <div className="flex gap-6">
                        <div className=" w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Category *</span>
                            </label>
                            <select defaultValue="default" {...register("category", { required: true })} placeholder="Category" className="select select-bordered w-full">
                                <option disabled value="default">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="soup">Soup</option>
                                <option value="drink">Drink</option>
                            </select>
                            {errors.category && <span className="text-red-600">**This field is required**</span>}
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price *</span>
                            </label>
                            <input {...register("price", { required: true })} type="text" placeholder="Price" className="input input-bordered w-full " />
                            {errors.price && <span className="text-red-600">**This field is required**</span>}
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details *</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered w-full" placeholder="Recipe Details"></textarea>
                        {errors.recipe && <span className="text-red-600">**This field is required**</span>}
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Image URL</span>
                        </label>
                        <input {...register("image")} type="text" placeholder="Image Url" className="input input-bordered w-full " />
                    </div>
                    <button className="btn my-4 bg-[#D1A054] text-white">Add Items <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );

};
export default AddItems;