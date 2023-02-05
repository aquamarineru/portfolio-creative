import React from 'react'
import { FiFigma } from 'react-icons/fi'

export default function Main() {
  return (
    <div id='main' className='bg-[#E8EDDF]'>
        <div className='w-full h-screen absolute top-0 left-0 bg-[#E8EDDF]'>
         <div className='container mx-auto px-4'>
            <button className='absolute right-32 top-10 border border-black rounded-lg py-[15px] px-[30px] cursor-pointer hover:bg-[#F5CB5C] scale-110 easy-in duration-200'>
            <a href="#" className='font-["Inconsolata"] text-2xl'>Work with me</a>
            </button>
            <div className='flex items-center justify-between my-20'>
                <div className='flex'>
                    <div className='absolute w-[100px] h-[100px] bg-[#CFDBD5] rounded-lg z-10'></div>
                    <div className='absolute bg-white border border-black rounded-lg py-[40px] px-[30px] shadow-lg shadow-gray-400 z-20 my-10 mx-10'>
                    <h1 className='text-3xl font-["Inconsolata"]'>01  Hi! I'm Marina  </h1>
                    <h2 className='text-3xl font-["Inconsolata"]'>02 I'm a web developer</h2>
                </div>
            </div>
            <img src="src/img/main-light.png" alt="main illustration light" className='object-cover' /> 
            {/* absolute top-24 right-10 */}
        </div>
        <div>
            <FiFigma size={40} className='absolute text-gray-500'/>
        </div>
        
    </div>
    </div>
    </div>
  )
}
