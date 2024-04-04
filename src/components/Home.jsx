import React from 'react'
import HeroImage from '../assets/hero.png'
// import { FaCircleArrowRight } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from 'react-scroll'


function Home() {
  return (
    <div name ='home' className=' h-screen  w-full bg-gradient-to-b from-black via-black to-gray-800 '>

       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row   '>
              <div className='flex flex-col justify-center h-full mt-8'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Hey there! I'm Mohit Verma, a passionate software developer with a keen interest in crafting exceptional web experiences. With expertise in the MERN stack (MongoDB, Express.js, React, and Node.js), I thrive on bringing ideas to life through clean, efficient, and scalable code.

My journey in software development began with a curiosity to understand how technology shapes our world. Since then, I've immersed myself in the world of web development, honing my skills in both front-end and back-end technologies.
    
                </p>

                <div>
                    <Link to="projects" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black via-black to to-blue-700 cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                        <FaArrowRightToBracket size={19}
                            className="ml-1"
                        />
                        </span>
                    </Link>
                </div>
              </div>

              <div>
                <img src = {HeroImage} alt = "my profile" className='rounded-3xl mx-auto w-2/3 md:w-3/5'/>
              </div>

       </div>
    </div>
  )
}

export default Home 