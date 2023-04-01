import React from 'react'
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div >
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl lg:text-2xl cursor-pointer font-[600] px-10'><a href="/">PRAKHAR</a></h1>

          <ul className='flex items-center justify-end'>
            <li className='px-6'><Link activeClass="active" to="home" spy={true} smooth={true} offset={-10} duration={500} className='cursor-pointer text-lg lg:text-xl '>Home</Link></li>
            <li className='px-6'> <Link to="skill" spy={true} smooth={true} offset={270} duration={500} className='cursor-pointer text-lg lg:text-xl '>Skills</Link> </li>
            <li className='px-6'><Link to="project" spy={true} smooth={true} offset={100} duration={1000} className='cursor-pointer text-lg lg:text-xl '>Projects</Link></li>
            <li className='px-6'><Link to="connect" spy={true} smooth={true} offset={200} duration={1000} className='cursor-pointer text-lg lg:text-xl '>Contact</Link></li>
            <li>
              <a className='border-2 border-b-white bg-gradient-to-r from-cyan-500 to-teal-700 text-white mx-5 px-4 py-2 rounded-xl ml-8 mr-10 text-lg' href="https://drive.google.com/file/d/1szvgC5uXbuJZ5UmzXgADdB0q1S8hMGO4/view">Resume</a>
            </li>
          </ul>
        </nav> 







    </div>
  )
}

export default Navbar
