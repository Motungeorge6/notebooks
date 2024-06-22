import React, { useState } from 'react';
import Logo from "../../assets/logo.svg"
import Note from "../../assets/Rectangle 1.svg"
import { FcGoogle } from "react-icons/fc";
import Button from '../reusables/buttons';
import InputField from '../reusables/inputs/inputField';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  return (
    <div className="mx-5">
      <header className="bg-white pl-3 pt-2">
        <img src={Logo} alt="Logo" />
      </header>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className='flex flex-col justify-center items-center px-4 md:px-8 w-full md:w-1/2'>
          <div className='w-full md:w-[257px] h-[167px] text-center'>
            <div className='w-full md:w-[257px] h-[60px] mt-8 md:mt-[15%]'>
              <h2 className="font-semibold text-[17px]">Welcome to Onenote</h2>
              <h5 className="font-normal text-xs text-[#636364]">Best note management system</h5>
            </div>
          </div>
          <form className="items-center w-full max-w-sm mx-auto mt-4 md:mt-8" onSubmit={handleSignUp}>
            <InputField
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
            />

            <InputField
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />

            <InputField
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className='mb-2 md:mb-4 flex justify-end'>
              <a href='/forgot-password' className='text-xs md:text-sm text-blue-500'>
                Forgot Password?
              </a>
            </div>
            <Button type="submit">Sign Up</Button>
            <p className='mt-2 md:mt-4 text-[#636364] font-medium text-sm text-center'>
              Already have an account? <a href='/login' className='text-[#4A4AFA]'>Login here</a>
            </p>
          </form>
        </div>

        <div className="w-full md:w-1/2 relative">
          <img src={Note} alt="Illustration" className="hidden md:block h-[90vh] w-full" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
