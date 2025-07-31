import React, { useEffect, useState } from "react";


function App() {
  let [holdBlogs, setHoldBlogs] = useState([]);
  let [loading, setLoading] = useState(false);


  useEffect(()=>{
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3001/post");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHoldBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally { 
        setLoading(false);
      }
    };

    fetchBlogs();
  },[]);

  return (
    <div>
      <table className="  border-collapse border border-gray-200 w-full">
        <thead className=" bg-gray-100 ">
          <tr className=" border-b border-gray-200">
            <th className=" p-2 text-left">Title</th>
            <th className=" p-2 text-left">Snippet</th>
            <th className=" p-2 text-left">Content</th>
            <th className=" p-2 text-left">Author</th>
          </tr> 
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan="4" className="p-2 text-center">Loading...</td>
            </tr>
          ) : (
            holdBlogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-50">
                <td className="p-2">{blog.title}</td>
                <td className="p-2">{blog.snippet}</td>
                <td className="p-2">{blog.content}</td>
                <td className="p-2">{blog.author?.fullname}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;