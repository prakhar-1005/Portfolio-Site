import React from 'react'
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import react from "../images/react.png"
import node from "../images/node.png"
import express from "../images/express.png"
import mongo from "../images/mongo.png"
import firebase from "../images/firebase.png"
import coding from '../images/coding.png'
import git from '../images/git.png'
import github from '../images/github.png'
import bootstrap from '../images/boot.png'
import tailwind from '../images/tailwind.png'

const Skills = () => {
  return (
    <>
        
        <div className='text-center px-10' id='skill'>
            <h2 style={{'-webkit-text-stroke': '1px #fff'}} className='border-b-4 border-b-white sm:text-[43px] md:text-[48px] lg:text-[55px] mt-16 mb-16 pt-16 text-center font-[650] bg-gradient-to-r from-cyan-500 to-teal-700 inline-block text-transparent bg-clip-text'>
            Skills
            </h2>
        </div>
 
        <div>
            <div className='flex items-center justify-around'>
            <div className=' flex bg-[#BAD7E9] justify-center items-center shadow-2xl shadow-cyan-500/70 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={html} alt="" className="w-28 h-28 inline-block  object-contain" /></div>
            <div className=' flex bg-[#BAD7E9] justify-center items-center shadow-2xl shadow-cyan-500/70  sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={css} alt="" className="w-28 h-28 inline-block  object-contain" /></div>
            <div className=' flex bg-[#BAD7E9] justify-center items-center shadow-2xl shadow-cyan-500/70  sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={js} alt="" className="sm:w-12 sm:h-12 lg:h-20 lg:w-20 inline-block  object-contain" /></div>
            <div className=' flex bg-[#cae5f5] justify-center items-center shadow-2xl shadow-cyan-500/70 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-[132px] hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={react} alt="" className="w-28 h-24 inline-block  object-contain" /></div>
            </div>
            
            <div className='flex justify-center items-center'>
              <div>
                <div className=' flex bg-[#BAD7E9] sm:ml-24 lg:ml-16 sm:mb-[40px] lg:mb-[60px] justify-center items-center shadow-2xl md:mr-36 lg:mx-16 shadow-cyan-500/70 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={git} alt="" className="sm:w-28 sm:h-14 lg:w-36 lg:h-28 inline-block object-contain" /></div>
                <div className=' flex bg-[#BAD7E9] sm:ml-24 lg:ml-16 justify-center items-center shadow-2xl md:mr-36 lg:mx-16 shadow-cyan-500/70 sm:w-16 sm:h-16  md:w-24 md:h-24 lg:w-32 lg:h-32 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={github} alt="" className="w-36 h-28 inline-block object-contain" /></div>
              </div>
                
                <img src={coding} className='lg:mx-auto my-20 relative sm:w-[180px] sm:mx-5 sm:h-[150px] lg:w-[380px] lg:h-80'></img>
              
              <div>
                <div className=' flex bg-[#BAD7E9] sm:mr-24 lg:mr-16 sm:mb-[40px] lg:mb-16 justify-center items-center shadow-2xl md:ml-36 lg:mx-16 shadow-cyan-500/70 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={tailwind} alt="" className="w-36 h-28 inline-block object-contain" /></div>
                <div className=' flex bg-[#BAD7E9] sm:mr-24 lg:mr-16 justify-center items-center shadow-2xl md:ml-36 lg:mx-16 shadow-cyan-500/70 sm:w-16 sm:h-16  md:w-24 md:h-24 lg:w-32 lg:h-32 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={bootstrap} alt="" className="sm:w-16 sm:h-12 lg:w-32 lg:h-28 inline-block object-contain" /></div>
              </div>
            </div>

            <div className='flex items-center justify-around'>
            <div className=' flex bg-[#BAD7E9] justify-center items-center shadow-2xl shadow-cyan-500/70 sm:w-24 sm:h-12 md:w-36 md:h-20 lg:w-48 lg:h-28 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={node} alt="" className="w-32 h-24 inline-block  object-contain" /></div>
            <div className=' flex bg-[#BAD7E9] justify-center items-center shadow-2xl shadow-cyan-500/70 sm:w-24 sm:h-12 md:w-36 md:h-20 lg:w-48 lg:h-28 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={express} alt="" className="w-40 h-14 inline-block  object-contain" /></div>
            <div className=' flex bg-[#BAD7E9] justify-center items-center shadow-2xl shadow-cyan-500/70 sm:w-24 sm:h-12 md:w-36 md:h-20 lg:w-52 lg:h-28 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={mongo} alt="" className="sm:w-20 sm:h-10 md:w-28 md:h-14 lg:w-48 lg:h-16 inline-block  object-contain" /></div>
            <div className=' flex bg-[#BAD7E9] justify-center items-center shadow-2xl shadow-cyan-500/70 sm:w-14 sm:h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 hover:scale-110 ease-in duration-200 cursor-pointer rounded-3xl'><img src={firebase} alt="" className="sm:w-8 sm:h-16 md:w-16 md:h-20 lg:w-20 lg:h-28 inline-block  object-contain" /></div>
            </div>        
        </div> 

    </>
  )
}

export default Skills
