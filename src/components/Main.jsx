import React, { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FiFigma, FiSun, FiMoon } from 'react-icons/fi'
import { ImHtmlFive2 } from 'react-icons/im'
import { SiCsswizardry, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaTwitter, FaInstagram, FaLinkedinIn, FaTelegram, } from 'react-icons/fa'



export default function Main() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    const element = document.documentElement
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const options = [
        {
            icon: <FiSun size={25} />,
            text: "light",
        },
        {
            icon: <FiMoon size={25} />,
            text: "dark",
        },
    ]
    function onWindowMatch(){
        if(localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)){
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }
    onWindowMatch()
    useEffect(() => {
        switch(theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break;
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                break;
            default:
                localStorage.removeItem('theme')
                onWindowMatch()
                break;
        }
    }, [theme])
darkQuery.addEventListener('change', (e) =>{
    if(!('theme' in localStorage)){
        if(e.matches){
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }

    }
})

  return (
    <div id='main'>
        <div className='w-full h-screen flex flex-col justify-center items-center absolute top-0 left-0 bg-[#E8EDDF] lg:items-end dark:bg-[#0D060F]'>
            <div className="fixed top-3 left-3 dark:text-white/80 rounded lg:mt-8 lg:left-10"> 
                {
                    options?.map(opt =>(
                        <button 
                            key={opt.text} 
                            onClick={() => setTheme(opt.text)}
                            className={`w-8 h-8 text-xl mr-2 rounded-full lg:mr-8 ${
                                theme === opt.text && "text-[#FCA311]"}`}>
                            {opt.icon}
                        </button>
                    ))
                }
                <button className='w-8 h-8 leading-9 text-xl rounded-full'>
                </button>
            </div>
            <button className='mt-10 border border-black rounded-lg py-[10px] px-[20px] cursor-pointer shadow-lg hover:bg-[#F5CB5C] scale-110 easy-in duration-200 lg:mr-10 dark:border-white/80 hover:dark:bg-[#FCA311]'>
                <a href="#" className='font-["Inconsolata"] text-lg lg:text-2xl dark:text-white/80'>Work with me</a>
            </button>
            <div className='container m-auto px-4 max-w-[320px] h-full w-full flex flex-col justify-end items-center bg-[url("src/img/main-light.png")] bg-no-repeat bg-top bg-contain bg-[length:320px] md:max-w-[500px] lg:max-w-[900px] lg:bg-[length:420px] lg:bg-right xl:max-w-[1200px] xl:bg-[length:530px] dark:bg-[url("src/img/main-dark.png")]'>
                <div className='m-0 absolute top-[60%] left-[15%] md:left-[30%] lg:left-[15%] lg:top-[40%]'>
                    <div className='absolute top-[-20px] left-[-20px] w-[70px] h-[70px] bg-[#CFDBD5] shadow-lg shadow-gray-600 rounded-lg absolute z-0 lg:w-[100px] lg:h-[100px] dark:bg-[#3D405B]'></div>
                    <div className='absolute min-w-max py-4 px-4 pr-4 bg-white border border-black rounded-lg shadow-lg shadow-gray-500 z-10 lg:px-6 lg:py-6 dark:bg-[#E5E5E5] dark:border-[#E5E5E5]'>
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
                    <FaTelegram size={30} className='cursor-pointer text-gray-600 dark:text-white/80' />
                    <FaTwitter size={30} className='cursor-pointer text-gray-600 dark:text-white/80' />
                    <FaInstagram size={30} className='cursor-pointer text-gray-600 dark:text-white/80' />
                    <FaLinkedinIn size={30} className='cursor-pointer text-gray-600 dark:text-white/80' />
            </div>
        <div className='invisible md:visible'>
            <FiFigma size={50} className='absolute text-gray-500 top-[15%] left-[65%] hover:animate-wiggle lg:left-[45%] lg:top-[25%] dark:text-white/80'/>
            <ImHtmlFive2 size={50} className='absolute text-gray-500 top-[15%] left-[25%] hover:animate-wiggle lg:left-[30%] dark:text-white/80'/>
            <SiCsswizardry size={50} className='absolute text-gray-500 top-[30%] left-[15%] hover:animate-wiggle lg:top-[25%] dark:text-white/80'/>
            <SiTailwindcss size={50} className='absolute text-gray-500 top-[30%] left-[75%] hover:animate-wiggle lg:left-[45%] lg:top-[70%] dark:text-white/80'/>
            <IoLogoJavascript size={50} className='absolute text-gray-500 top-[50%] left-[15%] hover:animate-wiggle lg:left-[30%] lg:top-[30%] xl:left-[50%] xl:top-[45%] dark:text-white/80'/>
            <GrReactjs size={50} className='dark:text-white/80 absolute text-gray-500 top-[60%] left-[75%] hover:animate-spin lg:left-[30%] lg:top-[80%]'/>
            <SiTypescript size={50} className='absolute text-gray-500 top-[45%] left-[80%] hover:animate-wiggle lg:left-[15%] lg:top-[70%] dark:text-white/80'/>
            </div>
            <div className='max-w-[200px] w-full flex justify-between items-center mt-8 lg:max-w-[250px]'>
                <button className='rounded-lg py-[10px] px-[20px] cursor-pointer bg-[#F5CB5C] shadow-lg hover:border border-black scale-110 easy-in duration-200 font-["Inconsolata"] text-lg lg:text-2xl dark:bg-[#FCA311] dark:text-white/80 hover:dark:border-white/80'>Read more</button>
                <button className='animate-bounce rounded-full py-[1rem] px-[1rem] cursor-pointer bg-[#F5CB5C] shadow-lg hover:border border-black scale-110 easy-in duration-200 dark:bg-[#FCA311] hover:dark:border-white/80 '>
                    <AiOutlineArrowDown size={20} className='dark:text-white/80'/>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}
