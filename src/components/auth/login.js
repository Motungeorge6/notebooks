import React, { useState } from 'react';
import Logo from "../../assets/logo.svg"
import Note from "../../assets/Rectangle 1.svg"
import { FcGoogle } from "react-icons/fc";
import Button from '../reusables/buttons';
import InputField from '../reusables/inputs/inputField';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/home');
    }

    return (
        <div className="mx-5">
            <header className="bg-white pl-3 pt-2">
                <img src={Logo} alt="Logo" />
            </header>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-around mt-5 lg:mt-0">
                <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-4 lg:px-24">
                    <div className="w-full text-center mb-5">
                        <div className="w-full mb-6">
                            <h2 className="font-semibold text-lg lg:text-xl">Welcome back, Kehinde</h2>
                            <h5 className="font-normal text-sm lg:text-base text-[#636364]">Glad you're back, Please enter your details</h5>
                        </div>
                        <div className="flex justify-center items-center mb-6">
                            <FcGoogle className="mr-2" />
                            <a href="/google-signup" className="block font-medium text-sm lg:text-base">
                                Log in with Google
                            </a>
                        </div>
                        <div className="text-center mb-6">
                            <h3 className="font-normal text-sm lg:text-base">or</h3>
                        </div>
                    </div>
                    <form className="w-full" onSubmit={handleLogin}>
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

                        <div className="mb-4 flex justify-end">
                            <a href='/forgot-password' className='text-xs lg:text-sm text-blue-500'>
                                Forgot Password?
                            </a>
                        </div>
                        <Button>Login</Button>
                        <p className="mt-4 text-[#636364] font-medium text-sm lg:text-base">
                            Don't have an account? <a href='/' className='text-[#4A4AFA]'>Sign up for free</a>
                        </p>
                    </form>
                </div>
                <div className="hidden lg:block w-full lg:w-1/2 mb-5 lg:mb-0 flex justify-center lg:justify-end">
                    <img src={Note} alt="Illustration" className="h-auto lg:h-[90vh] w-full lg:w-auto" />
                </div>
            </div>
        </div>
    )
};

export default LoginPage;
