import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { SiGoogledocs } from "react-icons/si";
import { signInWithGoogle } from '../Firebase';
import { TbRefreshDot } from "react-icons/tb";
import { MdInsertComment } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import EditorHeader from '../components/EditorHeader';
import { GoPencil } from "react-icons/go";



function Editor() {

  const [value, setValue] = useState('');


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
    <section >

     

    <EditorHeader />

      


    <div className='flex flex-row space-x-2 '>
    <ReactQuill className='absolute container flex flex-col justify-center items-center  '
        modules={module}
        theme="snow" value={value} onChange={setValue} /> 
      


    <button 
    className= ' bg-blue-200 p-2 font-semibold text-sm rounded-full px-4 flex flex-row fixed top-[75px] right-10 m-2 '>Editng <GoPencil className='mt-1 ml-2'/></button>
    </div>
      

      
    </section>

    



  )
}

export default Editor