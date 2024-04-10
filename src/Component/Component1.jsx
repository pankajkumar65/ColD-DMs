import React from 'react'
import logo_1 from './logo_1.png'
import logo_2 from './Logo_2.png'
import logo_3 from './Logo_3.png'

function Component1() {
  return (
    <div>
        <div className='mt-60'>
          <h1 className='text-center font-bold text-5xl'>How It Works</h1>
        </div>
        <div className='flex justify-around mt-20 mx-10'>
             <div className='border border-black rounded-xl px-20 py-4' >
               <img src={logo_1} alt="Logo" height={150} width={160}/>
               <h1>Find Prospects To Target</h1>
             </div>
             <div className="border border-black rounded-xl px-20 py-4">
               <img src={logo_2} alt="Logo" height={150} width={160}/>
             </div>
             <div className='border border-black rounded-xl px-20 py-4'>
               <img src={logo_3} alt="Logo" height={150} width={160}/>
             </div>
        </div>
    </div>
  )
}

export default Component1
