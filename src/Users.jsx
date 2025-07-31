import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import { RiDeleteBack2Fill } from "react-icons/ri";

function Users() {

    let [holdBlogs, setHoldBlogs] = useState([]);
      let [loading, setLoading] = useState(false);
    
    
      useEffect(()=>{
        const fetchusers = async () => {
          setLoading(true);
          try {
            const response = await fetch("https://blogbackend-cgj8.onrender.com/user");
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setHoldBlogs(data);
          } catch (error) {
            console.error("Error fetching users:", error);
          } finally { 
            setLoading(false);
          }
        };
    
        fetchusers();
      },[]);

      const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3001/user/${userId}`, {
                method: 'DELETE',   
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const data = await response.json();
            console.log( data);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };                      

  return (
       <div>
      <table className="  border-collapse border border-gray-200 w-full">
        <thead className=" bg-gray-100 ">
          <tr className=" border-b border-gray-200">
            <th className=" p-2 text-left">Fullname</th>
            <th className=" p-2 text-left">Email</th>
            <th className=" p-2 text-left">Role</th>
             <th className=" p-2 text-left">Delete</th>
          </tr> 
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan="4" className="p-2 text-center">Loading...</td>
            </tr>
          ) : (
            holdBlogs.map((users) => (
              <tr key={users._id} className="hover:bg-gray-50">
                <td className="p-2">{users.fullname}</td>
                <td className="p-2">{users.email}</td>
                <td className="p-2">{users.role}</td>
                <td className="p-2"><button onClick={()=> handleDelete(users._id)} className='bg-amber-300 h-[20px] w-[30px] '><RiDeleteBack2Fill /></button></td>
            
              </tr>
            ))
          )}
        </tbody>
      </table>
       {data.length === 0 && !loading &&(
         <div className='text-center p-4'>No user found.</div>
       )}
    </div>
       
    
    

  )
}

export default Users