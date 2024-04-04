import React from 'react'

function Footer() {
  return (
    <div  className='w-full h-24  bg-gradient-to-b from-gray-800 to to-black text-white '> 
       <div className="flex justify-center items-center ">
        <span className="text-gray-500 font-bold text-2rem">Email me : </span> <span className="font-bold text-xl ml-2"> mohitverma15256@gmail.com</span>
        </div>
        <div className="flex justify-center items-center ">
          <span className="text-gray-500 font-bold text-2rem">Contact me : </span><span className="font-bold text-xl ml-2"> +91 7737731742</span>
        </div>
     
    </div>
  )
}

export default Footer