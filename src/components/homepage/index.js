import React from 'react';
import Add from "../../assets/add.svg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import SideBar from '../layout/sidebar';

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <SideBar />
      <div className="flex-1 p-6 flex flex-col justify-center items-center">
        <img src={Add} alt='add' className="mb-4 md:mb-0 md:mr-4 md:ml-16" />
        <div className="text-center md:text-left">
          <h2 className='font-semibold text-lg pt-3'>You have nothing here</h2>
          <div className='flex rounded-lg bg-[#4a4afa] mt-3'>
            <IoMdAddCircleOutline className='my-3 ml-2' />
            <Link to="/note" className='pl-2 md:pl-4 pr-4 font-normal text-sm mt-2'>Start new note</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
