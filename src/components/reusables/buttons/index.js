import React from 'react';

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-[#4A4AFA] h-[55px] w-full rounded${
        disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-700'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
