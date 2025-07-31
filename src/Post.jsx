import React from 'react'

   function Post() {
       let [PostData, setPostData] = React.useState({
           title: "", 
           snippet: "",
           content: ""
       });
   
       let pandlchange = (joo) => {
           setPostData({ ...PostData, [joo.target.name]:  joo.target.value });
       }
   
       let kandleSubmit =  (e) => {
           e.preventDefault();
           const response = async () => {
               try {
                //    const res = await fetch("https://blogbackend-cgj8.onrender.com/post", {
                     const res = await fetch("http://localhost:3001/post", {
                       method: "POST",
                       headers: {
                           "Content-Type": "application/json"
                       },
                       credentials:'include',
                       body: JSON.stringify(PostData)
                   });
                   
                   const data = await res.json();
   
                   console.log('Sucess:', data);
               } catch (error) {
                   console.error('Error:', error);
               }
           }    
           response();                                              
           
       }
   
     return (
       <>
   <div className='h-screen flex items-center justify-center bg-black flex-col text-white'> 
       <h1 className='text-4xl font-bold'> Posts </h1>
       <form onSubmit={kandleSubmit} className='flex flex-col space-y-4 w-80'>
           
           <label className='flex flex-col'>
               Title :
               <input onChange={pandlchange} type="text" name='title' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
           </label>
           <label className='flex flex-col'>
               Snippet :
               <input onChange={pandlchange} type="text" name='snippet' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
           </label>
           <label className='flex flex-col'>
               Content :
               <input  onChange={pandlchange} type="text" name='content' className=' mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
           </label>
           <button type='submit' className=' w-[100px] mt-4 p-2 bg-blue-600 rounded'>post</button>
           
   
   
       </form>
   
    </div>
           
       </>
     )
   }
   

export default Post