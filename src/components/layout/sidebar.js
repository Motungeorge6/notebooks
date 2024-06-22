import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { GiNotebook } from "react-icons/gi";
import { PiBellRingingFill } from "react-icons/pi";
import { MdTaskAlt } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import LogoutModal from "../auth/logoutmodal";
import Profile from "../../assets/profile.svg";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowModal(true);
    setShowSidebar(false); // Close sidebar when logout modal opens
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    setShowModal(false);
    // Perform logout logic here (e.g., clear session)
    navigate("/login"); // Redirect to login page after logout
  };

  const handleItemClick = (path) => {
    navigate(path); // Navigate to the specified path
    setShowSidebar(false); // Close sidebar after navigation
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="md:flex md:flex-col md:w-1/6 bg-gray-300 text-[#000000] p-4 relative">
      <div className="text-2xl font-bold mb-4">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`${showSidebar ? 'block' : 'hidden'} md:block p-5`}>
        <ul>
          <li className="py-2 flex cursor-pointer" onClick={() => handleItemClick("/notes")}>
            <GiNotebook />
            <p className="ml-2 font-medium text-sm">All note</p>
          </li>
          <li className="py-2 flex cursor-pointer" onClick={() => handleItemClick("/tasks")}>
            <MdTaskAlt />
            <p className="ml-2 font-medium text-sm">Tasks</p>
          </li>
          <li className="py-2 flex cursor-pointer" onClick={() => handleItemClick("/reminders")}>
            <PiBellRingingFill />
            <p className="ml-2 font-medium text-sm">Reminder</p>
          </li>
          <li className="py-2 flex cursor-pointer" onClick={() => handleItemClick("/favorites")}>
            <MdFavorite />
            <p className="ml-2 font-medium text-sm">Favourite</p>
          </li>
          <li className="py-2 flex cursor-pointer" onClick={handleLogout}>
            <img src={Profile} alt="Profile" className="h-6 w-6 rounded-full" />
            <p className="ml-2 font-medium text-sm">Logout</p>
          </li>
        </ul>
      </div>
      <div className="absolute md:hidden top-4 right-4 cursor-pointer">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={toggleSidebar}
        >
          {showSidebar ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </div>
      {showModal && <LogoutModal onCancel={handleCancelLogout} onConfirm={handleConfirmLogout} />}
    </div>
  );
};

export default SideBar;
