import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const CreateBlog = () => {
    const reftitle = useRef(null)
    const refdescription = useRef(null)
    const refimage = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blogData = {
            title: reftitle.current.value,
            description: refdescription.current.value,
            image: refimage.current.value,
            user: localStorage.getItem('userId')
        }
        try {
            const res = await axios.post(`http://localhost:9099/api/blog/createblog`, blogData)
            console.log(res);
            if (res.data.success) {
                alert(res.data.message)
            }
            else {
                alert(res.data.message)
                console.log(res.data.err)
            }

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <Navbar />
            <div className='block h-16'></div>
            <div className='flex justify-center bg-slate-200  '>
                <div className='bg-white shadow-2xl m-5 p-6 '>
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        <h1 className='text-2xl'>Enter Details</h1>
                        <label className='block '>
                            Title:
                            <input type='text' placeholder='My New Blog' ref={reftitle} className='block mt-1 border rounded-md w-full p-2'></input>
                        </label>
                        <label className='block'>
                            Description:
                            <input type='text' placeholder='description' ref={refdescription} className='block mt-1 border rounded-md w-full p-2 '></input>
                        </label>
                        <label className='block'>
                            Image:
                            <input type='text' placeholder='image' ref={refimage} className='block mt-1 border rounded-md w-full p-2'></input>
                        </label>
                        <button type='submit' className='w-full border-2 border-solid bg-blue-500 text-white rounded-xl p-4'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog