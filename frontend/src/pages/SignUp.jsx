import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios'

const SignUp = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);


    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            Uname: nameRef.current.value,
            Uemail: emailRef.current.value,
            Upass: passRef.current.value,
        }
        console.log(userData)
        try {
            const res = await axios.post('http://localhost:9099/api/user/register', userData);

            console.log(res)
            if (res.data.success) {
                alert(res.data.message)
                setTimeout(() => { Navigate('/') }, 1000)
            } else {
                console.dir(res.data)
                alert("error")
            }

        } catch (err) {
            console.log(err)
        }

        // setTimeout(() => { Navigate('/') }, 1000)
    }
    return (
        <div><div>
            <Navbar />
            <div className='h-screen flex items-center justify-center'>
                <div className='max-w-sm  rounded-xl   shadow-2xl p-4 space-y-6'>
                    <h2 className='text-xl'>Sign Up</h2>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <label className=' '>
                            Name:
                            <input type='text' name='name' placeholder='Himanshu' ref={nameRef} className=' block p-2 border-2 rounded-xl border-solid border-gray-400 my-2' />
                        </label>
                        <label  >
                            Email:
                            <input type='email' name='email' placeholder='@company.com' ref={emailRef} className='block  p-2 border-2 rounded-xl border-solid border-gray-400 my-2' />
                        </label>
                        <label >
                            Password:
                            <input type='password' name='password' placeholder='******' ref={passRef} className='block  p-2 border-2 rounded-xl border-solid border-gray-400 mt-2' />
                        </label>
                        <p>Already user <Link to='/login' className='underline text-blue-500'>login</Link> here</p>
                        <button type='submit' className='w-full border-2 border-solid border-gray-400 rounded-xl p-4 hover:bg-slate-200'>Submit</button>
                    </form>
                </div>
            </div>
        </div></div>
    )
}

export default SignUp