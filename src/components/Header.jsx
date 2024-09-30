import React from 'react'
import { SiGoogledocs } from 'react-icons/si'


function Header() {
  return (
    <div className='bg-gray-200  top-0 flex flex-row  p-2 mb-2'>

    <SiGoogledocs className='h-10 w-10 text-pink-500 mb-2 m-2' />

  

      <img
        src={localStorage.getItem("userProfilePicture")}
        width={50}
        height={50}
        className='fixed h-[50px] w-[50px] rounded-full top-2 right-2 mb-2 cursor-pointer object-contain'
        alt="User Profile"
      />


  </div>

  )
}

export default Header