import React from 'react'

function About() {
  return (
    <div name='education' className='w-full h-screen  bg-gradient-to-b from-gray-800 to to-black text-white'> 
     
     <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
            <p className='text-6xl font-bold inline border-b-4 border-gray-500'>
                Education
            </p>
        </div>
        <p className='text-xl mt-20'>
      
A 2nd-year B.Tech student pursuing Computer Science and Engineering at IIIT Ranchi, deeply passionate about web development . 
<br />
 With a commendable CGPA  of <span className='font-bold text-3xl text-cyan-500'>9.25 </span> <span  className="text-yellow-500 text-sm">2nd year IIIT RANCHI</span>,
 <br/> I am dedicated to excelling in my studies while simultaneously honing my skills in web development.
 <br/>
 <br/> My academic journey reflects my commitment to excellence, with a remarkable 
 <br/>
 10th-grade percentage of <span className='font-bold text-3xl text-cyan-500 '> 95%  </span> <span  className="text-yellow-500 text-sm">St.Joseph's High School , Patna</span>
 <br/> and  12th-grade percentage of <span className='font-bold text-3xl text-cyan-500'>94.8% </span><span  className="text-yellow-500 text-sm"> M.B. International High School, Kota</span>. 
        </p>

        <br />

        <p className='text-xl '>
        I am committed to continuous learning and growth in this dynamic field, aspiring to contribute innovative solutions and create impactful projects that leverage the latest technologies. My enthusiasm for web development drives me to explore new frameworks, languages, and techniques, empowering me to create robust and user-friendly web applications.
        </p>
     </div>
    </div>
  )
}

export default About