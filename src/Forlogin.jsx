import React from 'react'


function Forlogin() {
    let [formData, setFormData] = React.useState({ 
        email: "",
        password: ""
    });

    let fandlechange = (joe) => {
        setFormData({ ...formData, [joe.target.name]:  joe.target.value });
    }

    let landleSubmit =  (e) => {
        e.preventDefault();
        const response = async () => {
            try {
                // const res = await fetch("https://blogbackend-cgj8.onrender.com/user/login", {
                 const res = await fetch("http://localhost:3001/user/login", {
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
    <h1 className='text-4xl font-bold'>Forlogin</h1>
    <form onSubmit={landleSubmit} className='flex flex-col space-y-4 w-80'>
        
        
        <label className='flex flex-col'>
            Email:
            <input onChange={fandlechange} type="email" name='email' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
        </label>
        <label className='flex flex-col'>
            Password:
            <input onChange={fandlechange} type="password" name='password' className='mt-1 p-2 bg-gray-800 border border-gray-700 rounded' />
        </label>
        <button type='submit' className='mt-4 p-2 bg-blue-600 rounded'>Login</button>
        


    </form>

 </div>
        
    </>
  )
}

export default Forlogin