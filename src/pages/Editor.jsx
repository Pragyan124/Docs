import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { SiGoogledocs } from "react-icons/si";
import { signInWithGoogle } from '../Firebase';

function Editor() {

  const [value, setValue] = useState('');
  const [user, setUser] = useState(null);

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions
  }
  return (
    <section>

      <div className='flex flex-row bg-gray-200 p-2  mb-2'>

        <SiGoogledocs className='h-10 w-10 text-pink-500 mb-2 m-2' />

        <div className='flex flex-col'>
          <h1 className='text-lg '>Document</h1>
          <div className='space-x-4 p-0 '>


            <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>File</button>
            <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>Edit</button>
            <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>View</button>
            <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>Insert</button>
            <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>Format</button>
            <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>Tools</button>
            <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>Extensions</button>
            <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>Help</button>
          </div>

        </div>




        
       

            <img
            src={localStorage.getItem("userProfilePicture")}
            width={50}
            height={50}
            className='fixed h-[50px] w-[50px] rounded-full top-2 right-2 mb-2 cursor-pointer object-contain'
            alt="User Profile"
          />

      </div>




      <ReactQuill className='container flex flex-col justify-center items-center '
        modules={module}
        theme="snow" value={value} onChange={setValue} />
    </section>



  )
}

export default Editor