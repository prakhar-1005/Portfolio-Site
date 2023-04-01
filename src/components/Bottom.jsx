import React from 'react'
import connect11 from '../images/connect 11.gif'
const Bottom = () => {
  return (
    <div className='px-10' id='connect'>
      <div className='text-center'>
        <h2 style={{'-webkit-text-stroke': '1px #fff'}} className='border-b-4 border-b-white sm:text-[43px] md:text-[48px] lg:text-[55px] mt-32 mb-10 pt-16 font-[650] bg-gradient-to-r from-cyan-500 to-teal-700 inline-block text-transparent bg-clip-text'>Contact</h2>
        <p className='font-bold sm:text-lg md:text-xl leading-8 '>Submit the form below or shoot me an email - <a href="mailto:prakhar10may@gmail.com" className='border-b-4 border-b-white text-white inline-block text-transparent bg-clip-text pt-3 text-xl md:text-2xl font-[700]'>Prakhar10may@gmail.com</a></p>
      </div>

      <div className='sm:mt-60 sm:flex sm:flex-col sm:gap-32 sm:justify-center sm:align-middle sm:items-center md:mt-0 md:flex md:flex-row md:justify-evenly md:items-center w-full h-screen '>
          <img src={connect11} className='sm:w-[300px] sm:h-72 md:w-[500px] md:h-96 mt-[-200px] '/>
          <form method='POST' action="https://getform.io/f/bc8c8b88-cd9e-4695-895f-82d190905e8f" className='flex flex-col md:max-w-[600px] mt-[-100px] max-w-[300px] '>
              <input className='border-2 border-b-white p-2 rounded-xl bg-slate-700 text-white' type="text" placeholder='Name' name='name' />
              <input className='border-2 border-b-white my-4 p-2 rounded-xl bg-slate-700 text-white' type="email" name="email" placeholder='Email' />
              <textarea className='border-2 border-b-white p-2 rounded-xl bg-slate-700 text-white' name="message" rows="12" cols="180" placeholder='Message'></textarea>
              <button className='border-2 border-b-white bg-gradient-to-r from-cyan-500 to-teal-700 text-white px-4 py-3 rounded-xl my-4 w-40 text-center' >Let's Collaborate!</button>
          </form>
      </div>
    </div>
  )
}

export default Bottom
