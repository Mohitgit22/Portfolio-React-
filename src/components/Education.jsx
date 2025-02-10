// import React from 'react'

// function About() {
//   return (
//     <div name='education' className='w-full bg-gradient-to-b from-gray-800 to-black py-8 text-white'>

//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className='pb-8'>
//           <p className='text-6xl font-bold inline border-b-4 border-gray-500'>
//             Education
//           </p>
//         </div>
//         <p className='text-xl mt-12'>

//           A 3rd-year B.Tech student pursuing Computer Science and Engineering at IIIT Ranchi, deeply passionate about web development .
//           <br />
//           With a CGPA  of <span className='font-bold text-3xl text-cyan-500'>9.39 </span> <span className="text-yellow-500 text-sm"> and department rank 1 in 3rd year IIIT RANCHI</span>,
//           <br /> I am dedicated to excelling in my studies while simultaneously honing my skills in web development.
//           <br />
//           <br /> My academic journey reflects my commitment to excellence, with a remarkable
//           <br />
//           10th-grade percentage of <span className='font-bold text-3xl text-cyan-500 '> 95%  </span> <span className="text-yellow-500 text-sm">St.Joseph's High School , Patna</span>
//           <br /> and  12th-grade percentage of <span className='font-bold text-3xl text-cyan-500'>94.8% </span><span className="text-yellow-500 text-sm"> M.B. International High School, Kota</span>.
//         </p>

//         <br />

//         <p className='text-xl '>
//           I am committed to continuous learning and growth in this dynamic field, aspiring to contribute innovative solutions and create impactful projects that leverage the latest technologies. My enthusiasm for web development drives me to explore new frameworks, languages, and techniques, empowering me to create robust and user-friendly web applications.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default About

import React from 'react';

function About() {
  return (
    // <div name='education' className='w-full bg-gradient-to-b from-gray-900 to-black  py-16 text-white'>
    <div name='education' className='w-full  py-16 text-white'>

      <div className="max-w-screen-md p-6 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Title */}
        <div className='pb-10 text-center'>
          <p className='text-5xl font-extrabold inline border-b-4 border-teal-400'>
            Education
          </p>
        </div>

        {/* Main Introduction */}
        <p className='text-lg text-gray-300 text-center leading-relaxed'>
          I am a <span className="text-teal-300 font-semibold">3rd-year B.Tech student</span> pursuing Computer Science and Engineering at  
          <span className="font-bold text-white"> IIIT Ranchi</span>, deeply passionate about web development.
        </p>

        {/* Academic Achievements in Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">

          {/* College Card */}
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-center border border-teal-500">
            <h3 className="text-xl font-semibold text-white">B.Tech in CSE</h3>
            <p className="text-4xl font-bold text-teal-300 mt-2">9.39 CGPA</p>
            <p className="text-gray-400 mt-2">Rank #1, 3rd Year, IIIT Ranchi</p>
          </div>

          {/* 10th Grade Card */}
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-center border border-blue-500">
            <h3 className="text-xl font-semibold text-white">10th Grade</h3>
            <p className="text-4xl font-bold text-blue-300 mt-2">95%</p>
            <p className="text-gray-400 mt-2">St. Joseph's High School, Patna</p>
          </div>

          {/* 12th Grade Card */}
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-center border border-purple-500">
            <h3 className="text-xl font-semibold text-white">12th Grade</h3>
            <p className="text-4xl font-bold text-purple-300 mt-2">94.8%</p>
            <p className="text-gray-400 mt-2">M.B. International High School, Kota</p>
          </div>

        </div>

        {/* Closing Statement */}
        <p className='text-lg text-gray-300 mt-12 text-center leading-relaxed'>
          I am committed to continuous learning and innovation in web development, aiming to build impactful projects that leverage the latest technologies. My enthusiasm for this field pushes me to explore modern frameworks, languages, and techniques to create efficient and user-friendly applications.
        </p>
      </div>
      
    </div>
  );
}

export default About;
