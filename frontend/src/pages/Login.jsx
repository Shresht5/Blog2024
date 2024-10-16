import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { authActions } from '../redux/store.jsx';



const Login = () => {
    const emailRef = useRef(null);
    const passRef = useRef(null);


    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            Uemail: emailRef.current.value,
            Upass: passRef.current.value,
        };
        console.log(userData);

        try {
            const res = await axios.post('http://localhost:9099/api/user/login', userData);

            console.log(res);
            console.log(authActions);

            if (res.data.success) {
                // Correct way to dispatch login action
                dispatch(authActions.login());  // This will update the state to logged in
                localStorage.setItem("userId", res.data.user._id)
                alert(res.data.message);
                setTimeout(() => { Navigate('/') }, 1000);
            } else {
                console.log(res.data);
                alert("Error during login");
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div><div>
            <Navbar />
            <div className='h-screen flex items-center justify-center'>
                <div className='max-w-sm  rounded-xl  shadow-2xl p-4 space-y-6'>
                    <h2 className='text-xl'>Login</h2>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <label  >
                            Email:
                            <input type='email' name='email' placeholder='@company.com' ref={emailRef} className='block  p-2 border-2 rounded-xl border-solid border-gray-400 my-2' />
                        </label>
                        <label >
                            Password:
                            <input type='password' name='password' placeholder='******' ref={passRef} className='block  p-2 border-2 rounded-xl border-solid border-gray-400 mt-2' />
                        </label>
                        <p>New user <Link to='/signup' className='underline text-blue-500'>signup</Link> here</p>
                        <button type='submit' className='w-full border-2 border-solid border-gray-400 rounded-xl p-4'>Submit</button>
                    </form>
                </div>
            </div>
        </div></div>
    )
}

export default Login