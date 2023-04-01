import React from 'react'
import Img from "../images/img3.png";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from "react-icons/ai"
import { SiLeetcode } from "react-icons/si";
import './Header.css'
const Header = () => {
  return (

    <div id='home' >

        <img style={{  border: '2px solid #fff'}} src={Img} className='mx-auto my-8 relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 lg:w-72 lg:h-72'></img>

        <div className='text-center p-10'>
            <span className='text-xl lg:text-2xl font-medium '>I AM</span> <br />
            <h2 style={{'-webkit-text-stroke': '0.5px #fff'}}  className='bg-gradient-to-r from-cyan-500 to-teal-700 inline-block text-transparent bg-clip-text sm:text-[35px] md:text-[45px] lg:text-[55px] py-2 font-[700] '>Prakhar Pandey</h2>
            <br />
            <div className='cont'><h3 className='text-[25px] lg:text-3xl py-2 font-[600] typed'>Full Stack Web Developer</h3></div>
            <p className='text-[18px] lg:text-xl py-3 font-[500]  leading-8'> <br /> WELCOME TO MY PORTFOLIO. PLEASE TAKE A LOOK AROUND.</p>
            <p className='sm:text-[18px] md:text-md lg:text-lg py-5 leading-8 max-w-[870px] mx-auto'>I have a passion for creating beautiful, responsive and user-friendly websites and web applications that are optimized for both desktop and mobile devices. I'm always up for challenges and love using my skills to bring ideas to life. </p>
        </div>

        <h2 className='text-lg lg:text-xl pb-8 font-[500] font-burtons leading-8 text-center'>Let's Connect !! 👇</h2>
        <div className='text-4xl lg:text-5xl flex justify-center gap-14 lg:gap-16 py-3 '>
            <a href="https://www.linkedin.com/in/prakhar-pandey10/"><AiFillLinkedin className='hover:text-[#0A66C2] cursor-pointer'/></a>
            <a href="https://github.com/prakhar-1005"><AiFillGithub className='hover:text-[#171515] cursor-pointer'/></a>
            <a href="https://twitter.com/prak_p10"><AiFillTwitterCircle className='hover:text-[#00acee] cursor-pointer'/></a>
            <a href="https://leetcode.com/prakhar_1005/"><SiLeetcode className='hover:text-yellow-400 cursor-pointer text-[34px] lg:text-[2.65rem]'/></a>
        </div>

    </div>
  )
}

export default Header
