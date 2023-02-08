import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FiFigma } from 'react-icons/fi'
import { ImHtmlFive2 } from 'react-icons/im'
import { SiCsswizardry, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaTwitter, FaInstagram, FaLinkedinIn, FaTelegram } from 'react-icons/fa'



export default function Main() {
  return (
    <div id='main'>
        <div className='w-full h-screen flex flex-col justify-center items-center absolute top-0 left-0 bg-[#E8EDDF]'>
            <button className='mt-10 border border-black rounded-lg py-[10px] px-[20px] cursor-pointer shadow-lg hover:bg-[#F5CB5C] scale-110 easy-in duration-200'>
                <a href="#" className='font-["Inconsolata"] text-lg'>Work with me</a>
            </button>
            <div className='container m-auto px-4 max-w-[700px] h-full w-full flex flex-col justify-end items-center mb-6 bg-[url("src/img/main-light.png")] bg-no-repeat bg-top bg-contain bg-[length:320px_300px]'>
                <div className='m-0 absolute top-[60%] left-[15%]'>
                    <div className='absolute top-[-20px] left-[-20px] w-[70px] h-[70px] bg-[#CFDBD5] rounded-lg absolute z-0'></div>
                    <div className='absolute min-w-max py-6 px-7 pr-5 bg-white border border-black rounded-lg shadow-lg shadow-gray-400 z-10'>
                    <h1 className='text-lg font-["Inconsolata"] font-bold text-gray-800'>01  Hi! I'm Marina Ilyushina </h1>
                    <h2 className='flex text-lg font-["Inconsolata"] font-bold text-gray-800'>02 I'm a 
                    <TypeAnimation
                            sequence={[
                                'Developer', 
                                2000, 
                                'Coder', 
                                2000,
                                'Designer',
                                2000, 
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ paddingLeft: '10px'}}
                            
                        />
                    </h2>
                </div>
            </div>
            <div className='flex justify-between max-w-[200px] w-full'>
                    <FaTelegram size={30} className='cursor-pointer text-gray-600' />
                    <FaTwitter size={30} className='cursor-pointer text-gray-600' />
                    <FaInstagram size={30} className='cursor-pointer text-gray-600' />
                    <FaLinkedinIn size={30} className='cursor-pointer text-gray-600' />
            </div>
        <div className='hidden'>
            <FiFigma size={50} className='absolute text-gray-500 top-[20%] left-[45%] hover:animate-wiggle'/>
            <ImHtmlFive2 size={50} className='absolute text-gray-500 top-[30%] left-[15%] hover:animate-wiggle'/>
            <SiCsswizardry size={50} className='absolute text-gray-500 top-[50%] left-[15%] hover:animate-wiggle'/>
            <SiTailwindcss size={50} className='absolute text-gray-500 top-[30%] left-[75%] hover:animate-wiggle '/>
            <IoLogoJavascript size={50} className='absolute text-gray-500 top-[85%] left-[30%] hover:animate-wiggle'/>
            <GrReactjs size={50} className='absolute text-gray-500 top-[75%] left-[20%] hover:animate-spin'/>
            <SiTypescript size={50} className='absolute text-gray-500 top-[75%] left-[45%] hover:animate-wiggle'/>
            </div>
            <div className='max-w-[200px] w-full flex justify-between items-center mt-8'>
                <button className='rounded-lg py-[10px] px-[20px] cursor-pointer bg-[#F5CB5C] shadow-lg hover:border border-black scale-110 easy-in duration-200 font-["Inconsolata"] text-lg'>Read more</button>
                <button className='animate-bounce rounded-full py-[1rem] px-[1rem] cursor-pointer bg-[#F5CB5C] shadow-lg hover:border border-black scale-110 easy-in duration-200'>
                    <AiOutlineArrowDown size={20}/>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}
