import React from 'react'

function Navbar() {
  return (
    <div>
         <div className='w-full flex justify-between'>
            <h1 className='ml-28 mt-6 text-3xl font-extrabold text-blue-400'>ColdDMs</h1>
            <div className='text-xl text-sky-700'>
               <button className='mr-4 border border-black rounded-full px-3.5 py-1'>3-day free trial</button>
               <button className='mr-24 mt-6 border border-black rounded-full px-4 py-1 bg-black text-white'>Log In</button>
            </div>
         </div>
    </div>
  )
}

export default Navbar
