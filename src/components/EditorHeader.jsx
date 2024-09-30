import React from 'react';
import { SiGoogledocs } from 'react-icons/si';
import { signInWithGoogle } from '../Firebase';
import { TbRefreshDot } from 'react-icons/tb';
import { MdInsertComment } from 'react-icons/md';
import { IoVideocam } from 'react-icons/io5';
import { CiLock } from 'react-icons/ci';
import { MdOutlineDriveFileMove } from 'react-icons/md';
import { IoIosStarOutline } from 'react-icons/io';
import { BsCloudCheck } from 'react-icons/bs';

function EditorHeader() {
    return (
        <header className='fixed top-0 z-50 flex flex-row w-full bg-gray-200 p-2 pb-4'>
            {/* Left Section */}
            <div className='flex flex-row'>
                <SiGoogledocs className='h-10 w-10 text-pink-500 mb-2 m-2' />
                <div className='flex flex-col'>
                    <div className='flex flex-row space-x-4'>
                        <h1 className='text-lg '>Document</h1>
                        <IoIosStarOutline className='mt-2 cursor-pointer ' />
                        <MdOutlineDriveFileMove className='mt-2 cursor-pointer ' />
                        <BsCloudCheck className='mt-2 cursor-pointer' />
                    </div>
                    <div className='space-x-4 p-0'>
                        <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>
                            File
                        </button>
                        <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>
                            Edit
                        </button>
                        <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>
                            View
                        </button>
                        <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>
                            Insert
                        </button>
                        <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>
                            Format
                        </button>
                        <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>
                            Tools
                        </button>
                        <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>
                            Extensions
                        </button>
                        <button className='hover:bg-gray-300 rounded-lg px-1 focus:outline-none'>
                            Help
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='ml-auto flex flex-row space-x-2 items-center'>
                <div className='h-[35px] w-[35px] rounded-full bg-gray-200 hover:bg-gray-300 flex justify-center items-center cursor-pointer'>
                    <TbRefreshDot className='h-[25px] w-[25px]' />
                </div>
                <div className='h-[35px] w-[35px] rounded-full bg-gray-200 hover:bg-gray-300 flex justify-center items-center cursor-pointer'>
                    <MdInsertComment className='h-[25px] w-[25px] text-black font-bold' />
                </div>
                <div className='h-[35px] w-[55px] rounded-full bg-gray-200 hover:bg-gray-300 flex justify-center items-center cursor-pointer'>
                    <IoVideocam className='h-[25px] w-[25px] text-black font-bold' />
                </div>
                <div className='h-[35px] w-[85px] rounded-full bg-green-300 hover:bg-green-400 flex justify-center items-center cursor-pointer p-1 space-x-1'>
                    <CiLock className='h-[25px] w-[25px] text-black font-bold' />
                    <p className='text-sm font-semibold'>Share</p>
                </div>
                <img
                    src={localStorage.getItem('userProfilePicture')}
                    width={30}
                    height={30}
                    className='h-[30px] w-[30px] rounded-full cursor-pointer object-contain'
                    alt='User Profile'
                />
            </div>
        </header>
    );
}

export default EditorHeader;
