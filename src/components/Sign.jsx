import React, { useState } from 'react'

const Sign = () => {

 const [action, setAction] = useState("Sign Up")

  return (
    <>
    <section className="min-h-screen bg-gray-200">
     <div className="container flex  justify-center">
      <div className="bg-white shadow-2xl mt-20 p-10 flex flex-col items-center justify-center space-y-7 rounded-sm">
        <div>
         <h1 className="text-2xl text-center">
          {action}
         </h1>
         <div className='bg-blue-700 h-1 mt-2'></div>
        </div>
        <div className="space-y-2">
        {action === "Sign Up" ? <div className='flex flex-col'>
         <label htmlFor="Name">Name</label>
         <input className='rounded-md bg-gray-200 p-3' type="text" placeholder='Enter your name...' required />
        </div> : <div></div>}
        <div className='flex flex-col'>
         <label htmlFor="Email">Email</label>
         <input className='rounded-md bg-gray-200 p-3' type="email" required placeholder='Email address...' />
        </div>
        <div className='flex flex-col'>
         <label htmlFor="Epassword">Password</label>
         <input className='rounded-md bg-gray-200 p-3' type="email" required placeholder='Enter your password...' />
         {action === "Login" ? <a href="#home">
         forgot password? <span className='text-sm text-green-500'>click here</span>
         </a> : <div></div>}
        </div>
        </div>

        <div className="flex space-x-4 text-black ">
         <button className={action === "Login" ? "bg-blue-700 text-white p-2 rounded-md" : 'bg-gray-200 p-2 rounded-md'}
         onClick={() => setAction("Login")}
         >Sign in</button>
         <button className={action === "Sign Up" ? "bg-blue-700 text-white p-2 rounded-md" : 'bg-gray-200 p-2 rounded-md'} 
         onClick={() => setAction("Sign Up")}
         >Sign Up</button>
        </div>
      </div>
     </div>
    </section>
    </>
  )
}

export default Sign