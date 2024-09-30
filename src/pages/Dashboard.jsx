import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Editor from './Editor';
import { useState } from 'react';
import Header from '../components/Header';


function Dashboard() {

  

  const navigate = useNavigate();

  const handleEditor = () => {
    navigate('/editor');
  };







  return (

    <div>

      <Header />
      
      <div className='bg-gray-200 flex flex-col '>
        <h2 className='ml-[300px] m-2'>Start a document</h2>
        <img onClick={handleEditor} src="/blank.png" className='w-[150px] h-[200px] flex ml-[300px] ' />
        <h2 className='ml-[300px] m-2 mb-4'>Blank</h2>

      </div>





    </div>
  );
}

export default Dashboard;
