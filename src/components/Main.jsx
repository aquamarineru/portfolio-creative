import React from 'react'
import { FiFigma } from 'react-icons/fi'
import { ImHtmlFive2 } from 'react-icons/im'
import { SiCsswizardry, SiTailwindcss } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function Main() {
  return (
    <div id='main'>
        <div className='w-full h-screen absolute top-0 left-0 bg-[#E8EDDF] bg-[url("src/img/main-light.png")] bg-no-repeat bg-right'>
            <div className='container mx-auto px-4'>
                <button className='absolute right-32 top-10 border border-black rounded-lg py-[15px] px-[30px] cursor-pointer shadow-lg hover:bg-[#F5CB5C] scale-110 easy-in duration-200'>
                    <a href="#" className='font-["Inconsolata"] text-2xl'>Work with me</a>
                </button>
                <div className='my-[20rem] mx-[5rem]'>
                <div className=''>
                    <div className='absolute w-[100px] h-[100px] bg-[#CFDBD5] rounded-lg z-10'></div>
                    <div className='absolute bg-white border border-black rounded-lg py-[40px] px-[30px] shadow-lg shadow-gray-400 z-20 my-10 mx-10'>
                    <h1 className='text-3xl font-["Inconsolata"]'>01  Hi! I'm Marina  </h1>
                    <h2 className='text-3xl font-["Inconsolata"]'>02 I'm a web developer</h2>
                </div>
            </div>
        </div>
        <div>
            <FiFigma size={50} className='absolute text-gray-500 top-[15%] left-[30%] hover:animate-wiggle'/>
            <ImHtmlFive2 size={50} className='absolute text-gray-500 top-[30%] left-[15%] hover:animate-wiggle'/>
            <SiCsswizardry size={50} className='absolute text-gray-500 top-[50%] left-[45%] hover:animate-wiggle'/>
            <SiTailwindcss size={50} className='absolute text-gray-500 top-[25%] left-[45%] hover:animate-wiggle'/>
            <IoLogoJavascript size={50} className='absolute text-gray-500 top-[75%] left-[40%] hover:animate-wiggle'/>
            <GrReactjs size={50} className='absolute text-gray-500 top-[80%] left-[20%] hover:animate-spin'/>
            </div>
            <button className='absolute left-[50%] top-[80%] rounded-lg py-[15px] px-[30px] cursor-pointer bg-[#F5CB5C] shadow-lg hover:border border-black scale-110 easy-in duration-200 font-["Inconsolata"] text-2xl'>Read more</button>
            <button className='absolute left-[64%] top-[81%] animate-bounce rounded-full py-[1rem] px-[1rem] cursor-pointer bg-[#F5CB5C] shadow-lg hover:border border-black scale-110 easy-in duration-200'>
                <AiOutlineArrowDown size={20}/>
            </button>
        </div>
    </div>
</div>
  )
}
