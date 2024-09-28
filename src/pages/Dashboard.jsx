import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { SiGoogledocs } from 'react-icons/si'
import Editor from './Editor';
import { useState } from 'react';


function Dashboard() {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleEditor = () => {
    navigate('/editor');
  };







  return (

    <div>
      <div className='flex flex-row  p-2 mb-2'>

        <SiGoogledocs className='h-10 w-10 text-pink-500 mb-2 m-2' />

        {/* {user && (
          <img
            src={user.photoURL} // Use user's photo URL
            width={50}
            height={50}
            className='fixed h-[50px] w-[50px] rounded-full top-2 right-2 mb-2 cursor-pointer object-contain'
            alt="User Profile"
          />
        )} */}

          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocK3bk0h12rpB0TAwLfWSkwcjM0YT09m3KYSLLt2FMXwm3zz8WT_=s96-c"
            width={50}
            height={50}
            className='fixed h-[50px] w-[50px] rounded-full top-2 right-2 mb-2 cursor-pointer object-contain'
            alt="User Profile"
          />


      </div>

      <div className='bg-gray-200 flex flex-col '>
        <h2 className='ml-[300px] m-2'>Start a document</h2>
        <img onClick={handleEditor} src="/blank.png" className='w-[150px] h-[200px] flex ml-[300px] ' />
        <h2 className='ml-[300px] m-2 mb-4'>Blank</h2>

      </div>





    </div>
  );
}

export default Dashboard;
