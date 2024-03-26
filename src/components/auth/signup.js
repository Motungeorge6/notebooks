import React, { useState } from 'react';
import Logo from "../../assets/logo.svg"
import Note from "../../assets/Rectangle 1.svg"
import { FcGoogle } from "react-icons/fc";
import Button from '../reusables/buttons';
import InputField from '../reusables/inputs/inputField';


const SignUpPage = () => {

  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleFullNameChange = (e)=>{
    setFullName(e.target.value);
  }

  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  };

  const handlePasswordChange =(e)=>{
    setPassword(e.target.value)
  }
  return (
    <div className="mx-5">
      <header className="bg-white pl-3 pt-2">
        <img src={Logo}alt="Logo"/>
      </header>
      <div className="flex items-center justify-around">
       
        <div className='flex flex-col justify-center items-center  px-[150px] w-1/2 '>
         <div className='w-[257px] h-[167px] text-center'>
          <div className='w-[257px] h-[60px] mt-[15%]'>
          <h2 className="font-semibold text-[17px]">Welcome to Onenote</h2>
          <h5 className="font-normal text-xs text-[#636364] ">Best note management system</h5>
          </div>
         <div className='flex pl-[4rem]'>
              <FcGoogle/>
             <a href="/google-signup" className="block font-medium text-xs ml-1">
                  Sign up with Google
             </a>
         </div>
         <div className='pt-7 text-center'>
          <h3 className='font-normal text-xs'>or</h3>
         </div>
        </div>
        <form className="items-center   w-full  justify-center m-5">
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
          <div className='mb-4 flex justify-end'>
            <a href='/forgot-password' className='text-xs text-blue-500'>
              Forgot Password?
            </a>
          </div>
          <Button>Sign Up</Button>
          <p className='mt-4 text-[#636364] font-medium text-sm'>
            Already have an account? <a href='/login'className='text-[#4A4AFA]'>Login here</a>

          </p>
        </form>
        </div>
             
        <div className="w-1/2 relative ">
          <img src={Note} alt="Illustration" className="h-[90vh] w-full" />
         
          </div>
      </div>
    </div>
  )
};

export default SignUpPage;