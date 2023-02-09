import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai'
import { FaUniversity } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'

export default function SideNav() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        console.log('navbar here')
    }


  return (
    <div>
      <AiOutlineMenu 
        className='absolute top-4 right-4 z-[99] md:hidden dark:text-white'
        onClick={handleNav}
        />
        {
          nav ? (
            <>
            <div 
              className='fixed w-full h-screen bg-[#E8EDDF] flex flex-col justify-center items-center z-20 dark:bg-[#0D060F]'>
              <a href='#main' 
                className='w-[75%] flex justify-center rounded-full shadow-lg bg-[#CFDBD5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 dark:bg-[#3D405B] dark:text-white/80'>
                <AiOutlineHome size={20}/>
                <span className='pl-4 dark:text-white/80'>Home</span>
              </a>
              <a href='#main' 
                className='w-[75%] flex justify-center rounded-full shadow-lg bg-[#CFDBD5]
                 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 dark:bg-[#3D405B] dark:text-white/80'>
                <FaUniversity size={20}/>
                <span className='pl-4 dark:text-white/80'>Education</span>
              </a>
              <a href='#main' 
                className='w-[75%] flex justify-center rounded-full shadow-lg bg-[#CFDBD5]
                 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 dark:bg-[#3D405B] dark:text-white/80'>
                <AiOutlineProject size={20} />
                <span className='pl-4 dark:text-white/80'>Projects</span>
              </a>
              <a href='#main' 
                className='w-[75%] flex justify-center rounded-full shadow-lg bg-[#CFDBD5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 dark:bg-[#3D405B] dark:text-white/80'>
                <BsPerson size={20}/>
                <span className='pl-4 dark:text-white/80'>Resume</span>
              </a>
              <a href='#main' 
                className='w-[75%] flex justify-center rounded-full shadow-lg bg-[#CFDBD5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 dark:bg-[#3D405B] dark:text-white/80'>
                <AiOutlineMail size={20}/>
                <span className='pl-4 dark:text-white/80'>Contact</span>
              </a>
            </div>
            </>
          )
          : (
            ''
            )}
            <div className='md:block hidden fixed top-[25%] z-10 ml-5'>
              <div className='flex flex-col'>
                <a href="#main" 
                  className='rounded-full shadow-lg bg-[#CFDBD5]
                   shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 dark:bg-[#3D405B] dark:text-white/80'>
                  <AiOutlineHome size={25}/>
                </a>
                <a href="#main" 
                  className='rounded-full shadow-lg bg-[#CFDBD5]
                   shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 dark:bg-[#3D405B] dark:text-white/80'>
                  <FaUniversity size={25}/>
                </a>
                <a href="#main" 
                  className='rounded-full shadow-lg bg-[#CFDBD5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 dark:bg-[#3D405B] dark:text-white/80'>
                  <AiOutlineProject size={25}/>
                </a>
                <a href="#main" 
                  className='rounded-full shadow-lg bg-[#CFDBD5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 dark:bg-[#3D405B] dark:text-white/80'>
                  <BsPerson size={25}/>
                </a>
                <a href="#main" 
                  className='rounded-full shadow-lg bg-[#CFDBD5] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-200 dark:bg-[#3D405B] dark:text-white/80'>
                  <AiOutlineMail size={25} className='color-white'/>
                </a>
              </div>
            </div>
    </div>
  )
}
