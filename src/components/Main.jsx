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
        <div className='w-full h-screen flex flex-col justify-center items-center absolute top-0 left-0 bg-[#E8EDDF] lg:items-end'>
            <button className='mt-10 border border-black rounded-lg py-[10px] px-[20px] cursor-pointer shadow-lg hover:bg-[#F5CB5C] scale-110 easy-in duration-200 lg:mr-10'>
                <a href="#" className='font-["Inconsolata"] text-lg lg:text-2xl'>Work with me</a>
            </button>
            <div className='container m-auto px-4 max-w-[300px] h-full w-full flex flex-col justify-end items-center mb-8 bg-[url("src/img/main-light.png")] bg-no-repeat bg-top bg-contain bg-[length:320px_300px] md:max-w-[500px] lg:max-w-[900px] lg:bg-[length:420px_400px] lg:bg-right xl:max-w-[1000px]'>
                <div className='m-0 absolute top-[60%] left-[15%] md:left-[30%] lg:left-[15%] lg:top-[40%]'>
                    <div className='absolute top-[-20px] left-[-20px] w-[70px] h-[70px] bg-[#CFDBD5] rounded-lg absolute z-0 lg:w-[100px] lg:h-[100px]'></div>
                    <div className='absolute min-w-max py-4 px-4 pr-4 bg-white border border-black rounded-lg shadow-lg shadow-gray-400 z-10 lg:px-6 lg:py-6'>
                    <h1 className='text-lg font-["Inconsolata"] font-bold text-gray-800 lg:text-2xl'>01  Hi! I'm Marina Ilyushina </h1>
                    <h2 className='flex text-lg font-["Inconsolata"] font-bold text-gray-800 lg:text-2xl'>02 I'm a 
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
                            style={{ paddingLeft: '8px'}}
                            
                        />
                    </h2>
                </div>
            </div>
            <div className='flex justify-between max-w-[200px] w-full lg:absolute lg:left-[20%] lg:top-[60%]'>
                    <FaTelegram size={30} className='cursor-pointer text-gray-600' />
                    <FaTwitter size={30} className='cursor-pointer text-gray-600' />
                    <FaInstagram size={30} className='cursor-pointer text-gray-600' />
                    <FaLinkedinIn size={30} className='cursor-pointer text-gray-600' />
            </div>
        <div className='invisible md:visible'>
            <FiFigma size={50} className='absolute text-gray-500 top-[15%] left-[65%] hover:animate-wiggle lg:left-[45%] lg:top-[25%]'/>
            <ImHtmlFive2 size={50} className='absolute text-gray-500 top-[15%] left-[25%] hover:animate-wiggle lg:left-[30%]'/>
            <SiCsswizardry size={50} className='absolute text-gray-500 top-[30%] left-[15%] hover:animate-wiggle lg:top-[25%]'/>
            <SiTailwindcss size={50} className='absolute text-gray-500 top-[30%] left-[75%] hover:animate-wiggle lg:left-[45%] lg:top-[70%]'/>
            <IoLogoJavascript size={50} className='absolute text-gray-500 top-[50%] left-[15%] hover:animate-wiggle'/>
            <GrReactjs size={50} className='absolute text-gray-500 top-[60%] left-[75%] hover:animate-spin lg:left-[30%] lg:top-[80%]'/>
            <SiTypescript size={50} className='absolute text-gray-500 top-[45%] left-[80%] hover:animate-wiggle lg:left-[15%] lg:top-[70%]'/>
            </div>
            <div className='max-w-[200px] w-full flex justify-between items-center mt-8 lg:max-w-[250px]'>
                <button className='rounded-lg py-[10px] px-[20px] cursor-pointer bg-[#F5CB5C] shadow-lg hover:border border-black scale-110 easy-in duration-200 font-["Inconsolata"] text-lg lg:text-2xl'>Read more</button>
                <button className='animate-bounce rounded-full py-[1rem] px-[1rem] cursor-pointer bg-[#F5CB5C] shadow-lg hover:border border-black scale-110 easy-in duration-200'>
                    <AiOutlineArrowDown size={20}/>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}
