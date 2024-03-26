import React,{useState} from "react";
import Logo from "../../assets/logo.svg"
import { GiNotebook } from "react-icons/gi";
import { PiBellRingingFill } from "react-icons/pi";
import { MdTaskAlt } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import LogoutModal from "../auth/logoutmodal";
import Profile from "../../assets/profile.svg"


const SideBar=()=>{
    const [showModal, setShowModal] = useState(false);
    const handleLogout = () => {
      setShowModal(true);
    };
  
    const handleCancelLogout = () => {
      setShowModal(false);
    };
  
    const handleConfirmLogout = () => {
      setShowModal(false);
    };
    return(
        <div className="w-1/6 bg-gray-300 text-[#000000] p-4">
        <div className="text-2xl font-bold mb-4">
            <img src={Logo} alt='logo'/>
        </div>
<div className='p-5'>
        <ul>
          <li className="py-2 flex ">
            <GiNotebook/>
           <p className='ml-2 font-medium text-sm'>All note</p> 
            </li>
          <li className="py-2 flex">
            <MdTaskAlt/>
            <p className='ml-2 font-medium text-sm'>Tasks</p>
            </li>
          <li className="py-2 flex">
            <PiBellRingingFill/>
            <p className='ml-2 font-medium text-sm'>Reminder</p>

            </li>
          <li className="py-2 flex">
          <MdFavorite/>
          <p className='ml-2 font-medium text-sm'>Favourite</p>
          </li>


        </ul>
        </div>
{showModal && (
    <LogoutModal onCancel={handleCancelLogout} onConfirm={handleConfirmLogout}/>
    )}
        <div className="absolute bottom-4 left-0 right-0 p-5">
          <div className="text-xl font-bold flex text-center">
            <img src={Profile} alt='profile'/>
            <h2 className='ml-2 font-medium text-sm'>Kehinde Adepoju</h2>
          </div>
          <button onClick={handleLogout} className="text-[#DE0202] font-semibold text-sm mb-[2%] ml-10 px-4 ">
            Logout
          </button>
        </div>
      </div>
    )
}
export default SideBar;