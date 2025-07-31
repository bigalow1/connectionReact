import React from 'react'

function Signupform() {
    let [formData, setFormData] = React.useState({
        fullname: "", 
        email: "",
        password: ""
    });

    let handlchange = (joe) => {
        setFormData({ ...formData, [joe.target.name]:  joe.target.value });
    }

    let handleSubmit =  (e) => {
        e.preventDefault();
        const response = async () => {
            try {
                const res = await fetch("https://blogbackend-cgj8.onrender.com/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                     credentials:'include',
                    body: JSON.stringify(formData)
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
<div className='h-screen flex items-center justify-center bg-gray-400 flex-col text-white'> 
    <h1 className='text-4xl font-bold'>Sign Form</h1>
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4 w-80'>
        
        <label className='flex flex-col'>
            Full Name:
            <input onChange={handlchange} type="text" name='fullname' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
        </label>
        <label className='flex flex-col'>
            Email:
            <input onChange={handlchange} type="text" name='email' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
        </label>
        <label className='flex flex-col'>
            Password:
            <input onChange={handlchange} type="password" name='password' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
        </label>
        <button type='submit' className='mt-4 p-2 bg-blue-600 rounded'>Signup</button>
        


    </form>

 </div>
        
    </>
  )
}

export default Signupform