import React,{useState} from 'react';
import Add from "../../assets/add.svg"
import { IoMdAddCircleOutline } from "react-icons/io";
import {Link} from "react-router-dom"
import SideBar from '../layout/sidebar';



const HomePage = () => {


  return (
    <div className="flex h-screen">
      <SideBar/>
      <div className="flex-1 p-6 flex justify-center items-center flex-col">
        <img src={Add} alt='add'/>
        <div>
        <h2 className='font-semibold text-lg pt-3'>You have nothing here</h2>
        <div className='flex rounded-lg bg-[#4a4afa] mt-3 '>
        <Link to= "/note" className='pl-10 font-normal text-sm mt-2 '>Start new note</Link>
        <IoMdAddCircleOutline className='my-3 ml-2' />

        {/* <img src={Plus} alt='plus' className=''/> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
