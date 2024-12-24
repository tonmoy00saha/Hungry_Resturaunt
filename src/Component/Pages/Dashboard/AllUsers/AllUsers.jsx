import {  useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AiOutlineDelete } from "react-icons/ai";
import {  FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
   
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0)
            {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now!!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser = user => {
         Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      
                    axiosSecure.delete(`/users/${user._id}`)
                    .then(res=>{
                        if(res.data.deletedCount >0)
                        {
                            refetch();
                            Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                  });
                        }
                    })
                    }
                  });
    }
    return (
        <div className="my-12">
            <SectionTitle heading="-----How Many?-----"
                subheading="Manage All Users"></SectionTitle>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white text-lg">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin'? 'Admin': 
                                    <button onClick={()=>handleMakeAdmin(user)}
                                    className="btn bg-[#D1A054] p-3"><FaUsers className="text-white text-lg"></FaUsers></button> }
                                </td>
                                <td><button onClick={() => handleDeleteUser(user)}
                                    className="bg-red-700 btn p-3"><AiOutlineDelete className="text-white text-lg"></AiOutlineDelete></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;