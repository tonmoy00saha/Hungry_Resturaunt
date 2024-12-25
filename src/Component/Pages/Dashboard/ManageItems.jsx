import { AiOutlineDelete } from "react-icons/ai";
import SectionTitle from "../../SectionTitle/SectionTitle";

import { useEffect, useState } from "react";
import { FaRegEdit, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, loading, refetch]= useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    return (
        <div className="my-12">
            <SectionTitle
                heading="------Hurry Up------"
                subheading="Manage All Items"
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white text-lg">
                        <tr>
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                       
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td><img className="w-20" src={item.image} alt="" /></td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                               
                                <td><button onClick={() => handleDelete(item)}
                                    className="bg-red-700 btn p-3"><AiOutlineDelete className="text-white text-lg"></AiOutlineDelete></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;