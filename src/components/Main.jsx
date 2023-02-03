import React from 'react'

export default function Main() {
  return (
    <div id='main' className='bg-[#E8EDDF]'>
        <div className='w-full h-screen absolute top-0 left-0 bg-[#E8EDDF] grid'>
        <img src="src/img/main-light.png" alt="main illustration light" className='absolute top-24 right-10 object-cover' />
        <button className='absolute right-32 top-10 border border-black rounded-lg py-[15px] px-[30px] cursor-pointer hover:bg-[#F5CB5C] scale-110 easy-in duration-200'>
            <a href="#" className='font-["Inconsolata"] text-2xl'>Work with me</a>
        </button>
        <div className='absolute w-[100px] h-[100px] bg-[#CFDBD5] rounded-lg top-[40%] left-[20%]'></div>
        <div className='absolute bg-white border border-black rounded-lg py-[40px] px-[30px] shadow-lg shadow-gray-400 top-[45%] left-[22%]'>
            <h1 className='text-3xl font-["Inconsolata"]'>01  Hi! I'm Marina  </h1>
            <h2 className='text-3xl font-["Inconsolata"]'>02 I'm a web developer</h2>
        </div>
    </div>
      
    </div>
  )
}
