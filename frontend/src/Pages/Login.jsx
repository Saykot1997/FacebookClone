import axios from 'axios';
import React, { useState } from 'react'
import { CgDanger } from 'react-icons/cg';
import { NavLink, useNavigate } from 'react-router-dom'
import Register from '../Components/Register';
import { FacebookIcon } from "../Data"
import { Host } from "../Data";
import { useSelector, useDispatch } from 'react-redux';
import { loading, loadingSuccess, loadingFailure } from '../Redux/UserSlice';

function Login() {

    const navigate = useNavigate();
    const [createAccount, setCreateAccount] = useState(false);
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [showError, setShowError] = useState("");
    const dispatch = useDispatch();
    const serverErr = useSelector((state) => state.User.error);
    const isLoading = useSelector((state) => state.User.isLoading);


    const ShowCreateAccountPage = () => {
        setCreateAccount(true);
    }

    const CloseErrorMessage = () => {
        setEmailErr('');
        setPasswordErr('');
        setShowError('');
    }

    const ShowErrorMessage = (error) => {
        setShowError(error)
    }

    const isEmail = (email) => {
        if (email.includes('@')) {
            setEmail(email);
        } else {
            setMobileNumber(email);
        }
    }

    const Login = async () => {

        if (email === '' && mobileNumber === '') {

            setEmailErr('Email or mobile number is required');

        } else if (email && email.length < 10) {

            setEmailErr('Email or mobile number must be at least 10 characters long');

        } else if (mobileNumber && mobileNumber.length < 10) {

            setEmailErr('Email or mobile number must be at least 10 characters long');

        } else if (password === '') {

            setPasswordErr('Password is required');

        } else if (password.length < 6) {

            setPasswordErr('Password must be at least 6 characters long');

        } else {

            setEmailErr('');
            setPasswordErr('');
            setShowError('');
            dispatch(loading());

            const userData = {
                password: password,
            }

            email ? userData.email = email : userData.mobileNumber = mobileNumber;

            try {

                const res = await axios.post(`${Host}/api/auth/login`, userData)
                dispatch(loadingSuccess(res.data));
                res && setEmail('');
                res && setMobileNumber('');
                res && setPassword('');
                navigate('/');

            } catch (error) {

                dispatch(loadingFailure(error.response.data));

            }

        }
    }

    return (
        <div className=' h-screen w-full relative'>
            <div className=' h-[82%] w-full flex justify-center items-center bg-gray-100'>
                <div className=' w-[29%] h-full'>
                    <div className=' flex flex-col justify-center items-center mt-10'>
                        <div className=' flex justify-center items-center'>
                            <img src={FacebookIcon} alt="" className=' w-[230px]' />
                        </div>
                        <div className=' w-[395px] bg-white shadow-md shadow-gray-400 rounded-md p-4'>
                            <p className=' text-center text-lg mb-4'>Log in to Facebook</p>
                            <div className={`${emailErr && " ring-2 ring-red-500 animate-shake"} relative w-full`}>
                                <input onFocus={CloseErrorMessage} onChange={(e) => { isEmail(e.target.value) }} value={email ? email : mobileNumber} type="text" placeholder='Email address or phone number' className={`p-3 w-full border border-gray-300 placeholder:text-gray-400 focus:ring-1 ring-blue-600 focus:outline-0 placeholder:font-semibold rounded`} />
                                {
                                    showError === "emailErr" &&
                                    <div className=' absolute w-full rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                        <p>{emailErr}</p>
                                    </div>
                                }
                                {
                                    emailErr &&
                                    <CgDanger onClick={() => { ShowErrorMessage("emailErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                }
                            </div>
                            <div className={` relative w-full my-2 ${passwordErr && " ring-2 ring-red-500 animate-shake"} `}>
                                <input onFocus={CloseErrorMessage} onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" placeholder='Password' className={`p-3 w-full border border-gray-300 placeholder:text-gray-400 focus:ring-1 ring-blue-600 focus:outline-0 placeholder:font-semibold rounded`} />

                                {
                                    showError === "passwordErr" &&
                                    <div className=' absolute w-full rounded-md left-full top-0 p-2 bg-red-400 text-white font-semibold'>
                                        <p>{passwordErr}</p>
                                    </div>
                                }
                                {
                                    passwordErr &&
                                    <CgDanger onClick={() => { ShowErrorMessage("passwordErr") }} className=' text-red-500 absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer' />
                                }

                            </div>
                            <button onClick={Login} disabled={isLoading} className=' w-full py-3 bg-blue-500 text-white font-bold text-lg rounded-md my-2 hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-900'>Log In</button>
                            <NavLink to="/forgetPassword" className=' text-center block text-blue-500 cursor-pointer hover:underline'>Forgotten password?</NavLink>
                            <hr className=' h-[1px] bg-gray-500 w-full my-4' />
                            <div className=' w-full flex justify-center items-center'>
                                <button onClick={ShowCreateAccountPage} className=' w-[55%] py-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-bold'>Create New Account</button>
                            </div>

                            <p className=' text-red-500 text-sm text-center mt-2 font-semibold'>{serverErr}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Register createAccount={createAccount} setCreateAccount={setCreateAccount} />
        </div>

    )
}

export default Login
