import React, { useState } from 'react';
import Logo from "../../assets/logo.svg"
import Note from "../../assets/Rectangle 1.svg"
import { FcGoogle } from "react-icons/fc";
import Button from '../reusables/buttons';
import InputField from '../reusables/inputs/inputField';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    const handleLogin=(e)=>{
      e.preventDefault();
      navigate('/home')
    }
  return (
    <div className="mx-5">
      <header className="bg-white pl-3 pt-2">
        <img src={Logo}alt="Logo"/>
      </header>
      <div className="flex items-center justify-around">
        <div className='flex flex-col justify-center items-center  px-[150px] w-1/2  sm:px-[150px] w-full sm:w-1/2 '>
         <div className='w-[257px] h-[167px] text-center'>
          <div className='w-[257px] h-[60px] mt-[15%]'>
          <h2 className="font-semibold text-[17px]">Welcome back, Kehinde</h2>
          <h5 className="font-normal text-xs text-[#636364] ">Glad you're back, Please enter your details</h5>
          </div>
         <div className='flex pl-[4rem]'>
              <FcGoogle/>
             <a href="/google-signup" className="block font-medium text-xs ml-1">
                  Log in with Google
             </a>
         </div>
         <div className='pt-7 text-center'>
          <h3 className='font-normal text-xs'>or</h3>
         </div>
        </div>
        <form className="items-center   w-full  justify-center m-5"onSubmit={handleLogin}>
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
          <Button>Login</Button>
          <p className='mt-4 text-[#636364] font-medium text-sm'>
            Don't have an account? <a href='/'className='text-[#4A4AFA]'>Sign up for free</a>

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

export default LoginPage;