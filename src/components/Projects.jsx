import React from 'react'
import netflix from "../images/netflix.png"
import youtube from '../images/youtube.png'
import dailyburn from '../images/dailyburn.png'
import enotebook from '../images/enotebook.png'
const Projects = () => {
  return (
    <div className='px-10' id='project'>
        <div className='text-center'>
            <h2 style={{'-webkit-text-stroke': '1px #fff'}} className='border-b-4 border-b-white sm:text-[43px] md:text-[48px] lg:text-[55px] pt-10 my-20 text-center font-[650] bg-gradient-to-r from-cyan-500 to-teal-700 inline-block text-transparent bg-clip-text'>Projects</h2>
        </div>

        <h3 className='sm:text-lg md:test-xl lg:text-2xl md:py-6 sm:py-3 font-burtons '>Checkout some of my work . . . . . . . . .</h3>




        <div className='sm:flex sm:flex-col sm:justify-center sm:align-middle sm:items-center md:grid md:grid-cols-2 md:gap-4 md:justify-center '>


            <div className="max-w-xl bg-[#BAD7E9] border-2 shadow-2xl shadow-cyan-500/70 rounded-lg hover:scale-105 ease-in duration-200 border-white dark:bg-gray-800 dark:border-gray-700 md:ml-20 mb-16">
                <a href="https://daily-burn.netlify.app/">
                    <img className="rounded-t-lg object-contain" src={dailyburn} alt="" />
                </a>
                <div className="p-5">
                    <a href="https://daily-burn.netlify.app/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DailyBurn Fitness Web Application</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A MERN stack application for the people to note down the exercises they want to do.</p>
                    <a href="https://github.com/prakhar-1005/DailyBurn_fitness_app_frontend" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-2 border-b-white bg-gradient-to-r from-cyan-500 to-teal-700 rounded-xl mr-10">
                        Code (Frontend)
                        <i className="ml-2 fa-solid fa-code"></i>
                    </a>
                    <a href="https://github.com/prakhar-1005/DailyBurn_fitness_app_backend" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-2 border-b-white bg-gradient-to-r from-cyan-500 to-teal-700 rounded-xl mr-10">
                        Code (backend)
                        <i className="ml-2 fa-solid fa-code"></i>
                    </a>
                </div>
            </div>

            <div className="max-w-xl bg-[#BAD7E9] border-2 shadow-2xl shadow-cyan-500/70  hover:scale-105 ease-in duration-200 border-white rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-16">
                <a href="https://you-tube1.netlify.app/">
                    <img className="rounded-t-lg" src={youtube} alt="" />
                </a>
                <div className="p-5">
                    <a href="https://you-tube1.netlify.app/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">YouTube Web Application</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A fully responsive and working YouTube clone web application made using Reactjs and MUI.</p>
                    <a href="https://github.com/prakhar-1005/youtube_app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-2 border-b-white bg-gradient-to-r from-cyan-500 to-teal-700 rounded-xl">
                        Code
                        <i className="ml-2 fa-solid fa-code"></i>
                    </a>
                </div>
            </div>


            <div className="max-w-xl bg-[#BAD7E9] border-2 shadow-2xl shadow-cyan-500/70  hover:scale-105 ease-in duration-200 border-white rounded-lg dark:bg-gray-800 dark:border-gray-700 md:ml-20 sm:mb-16 md:mb-0">
                <a href="https://github.com/prakhar-1005/E-Notebook">
                    <img className="rounded-t-lg" src={enotebook} alt="" />
                </a>
                <div className="p-5">
                    <a href="https://github.com/prakhar-1005/E-Notebook">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">E-Notebook - Your notes on the cloud</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A MERN stack application used for storing important notes securely on the cloud.</p>
                    <a href="https://github.com/prakhar-1005/E-Notebook" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-2 border-b-white bg-gradient-to-r from-cyan-500 to-teal-700 rounded-xl">
                        Code
                        <i className="ml-2 fa-solid fa-code"></i>
                    </a>
                </div>
            </div>



            <div className="max-w-xl bg-[#BAD7E9] border-2 shadow-2xl shadow-cyan-500/70  hover:scale-105 ease-in duration-200 border-white rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                <a href="https://movieflix.netlify.app/">
                    <img className="rounded-t-lg" src={netflix} alt="" />
                </a>
                <div className="p-5">
                    <a href="https://movieflix.netlify.app/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MovieFlix</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A NetFlix clone site made using react.js for creating the frontend and API for movie posters.</p>
                    <a href="https://github.com/prakhar-1005/MovieFlix" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-2 border-b-white bg-gradient-to-r from-cyan-500 to-teal-700 rounded-xl">
                        Code
                        <i className="ml-2 fa-solid fa-code"></i>
                    </a>
                </div>
            </div>







{/* 
            <a href="https://github.com/prakhar-1005/MovieFlix" className='group'>
            <div className='flex justify-center'>
                <img src={netflix} className="group-hover:opacity-70 shadow-2xl w-[650px] h-[320px] my-5 rounded-xl hover:scale-105 ease-in duration-200 hover:blur-[0px] cursor-pointer"></img> 
            </div>
            </a>     */}

            {/* <a href="https://github.com/prakhar-1005/youtube_app" className='group'>
            <div className='flex justify-center'>
                <img src={youtube} className="group-hover:opacity-70 shadow-2xl w-[650px] h-[320px] my-5 rounded-xl hover:scale-105 ease-in duration-200 hover:blur-[0px] cursor-pointer"></img> 
            </div> 
            </a>      

            <a href="#" className='group'>
            <div className='flex justify-center'>
                <img src={tindog} className="group-hover:opacity-70 shadow-2xl w-[650px] h-[320px] my-5 rounded-xl hover:scale-105 ease-in duration-200 hover:blur-[0px] cursor-pointer"></img> 
            </div>  
            </a>      
            
            <a href="https://github.com/prakhar-1005/Chit-Chat" className='group'>
            <div className='flex justify-center'>
                <img src={chitchat} className="group-hover:opacity-70 shadow-2xl w-[650px] h-[320px] my-5 rounded-xl hover:scale-105 ease-in duration-200 hover:blur-[0px] cursor-pointer"></img> 
            </div>
            </a> */}
        </div>

    </div>
  )
}

export default Projects
