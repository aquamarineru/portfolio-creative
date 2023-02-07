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
        <div className='w-full h-screen absolute top-0 left-0 bg-[#E8EDDF] bg-[url("src/img/main-light.png")] bg-no-repeat bg-right'>
            <div className='container m-auto px-4 max-w-[700px] h-full w-full flex flex-col justify-center lg:items-start items-center '>
                <button className='absolute right-32 top-10 border border-black rounded-lg py-[15px] px-[30px] cursor-pointer shadow-lg hover:bg-[#F5CB5C] scale-110 easy-in duration-200'>
                    <a href="#" className='font-["Inconsolata"] text-2xl lg:text-xl'>Work with me</a>
                </button>
                <div>
                    <div className='absolute w-[100px] h-[100px] bg-[#CFDBD5] rounded-lg z-10'></div>
                    <div className='absolute min-w-max py-6 px-7 pr-5 bg-white border border-black rounded-lg shadow-lg shadow-gray-400 z-20 my-10 mx-10 lg:my-6 lg:mx-6'>
                    <h1 className='sm:text-3xl text-2xl font-["Inconsolata"] font-bold text-gray-800'>01  Hi! I'm Marina Ilyushina </h1>
                    <h2 className='flex sm:text-3xl text-2xl font-["Inconsolata"] font-bold text-gray-800'>02 I'm a 
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
            <div className='flex justify-between pt-44 max-w-[200px] w-full'>
                    <FaTelegram size={30} className='cursor-pointer text-gray-600' />
                    <FaTwitter size={30} className='cursor-pointer text-gray-600' />
                    <FaInstagram size={30} className='cursor-pointer text-gray-600' />
                    <FaLinkedinIn size={30} className='cursor-pointer text-gray-600' />
            </div>
        <div>
            <FiFigma size={50} className='absolute text-gray-500 top-[15%] left-[30%] hover:animate-wiggle'/>
            <ImHtmlFive2 size={50} className='absolute text-gray-500 top-[25%] left-[20%] hover:animate-wiggle'/>
            <SiCsswizardry size={50} className='absolute text-gray-500 top-[50%] left-[15%] hover:animate-wiggle'/>
            <SiTailwindcss size={50} className='absolute text-gray-500 top-[25%] left-[45%] hover:animate-wiggle'/>
            <IoLogoJavascript size={50} className='absolute text-gray-500 top-[85%] left-[30%] hover:animate-wiggle'/>
            <GrReactjs size={50} className='absolute text-gray-500 top-[75%] left-[20%] hover:animate-spin'/>
            <SiTypescript size={50} className='absolute text-gray-500 top-[75%] left-[45%] hover:animate-wiggle'/>
            </div>
            <button className='absolute left-[50%] top-[80%] rounded-lg py-[15px] px-[30px] cursor-pointer bg-[#F5CB5C] shadow-lg hover:border border-black scale-110 easy-in duration-200 font-["Inconsolata"] text-2xl lg:text-xl lg:left-[45%] lg:top-[90%]'>Read more</button>
            <button className='absolute left-[64%] top-[81%] animate-bounce rounded-full py-[1rem] px-[1rem] cursor-pointer bg-[#F5CB5C] shadow-lg hover:border border-black scale-110 easy-in duration-200 lg:top-[91%] lg:left-[62%]'>
                <AiOutlineArrowDown size={20}/>
            </button>
        </div>
    </div>
</div>
  )
}
