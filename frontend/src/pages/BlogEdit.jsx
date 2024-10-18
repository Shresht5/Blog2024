import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';

const BlogEdit = () => {

    const Navigate = useNavigate();
    const [blog, setBlog] = useState({})
    const id = useParams().id;

    const getBlogData = async () => {
        try {
            const res = await axios.get(`http://localhost:9099/api/blog/getblog/${id}`)
            console.dir(res);
            if (res.data.success) {
                setBlog(res.data.blog)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog((preB) => ({
            ...preB, [name]: value,
        }))
    }
    const handleSubmit = async () => {
        try {
            const update = {
                title: blog.title,
                description: blog.description,
                image: blog.image,
            }
            const res = await axios.put(`http://localhost:9099/api/blog/updateblog/${id}`, update);
            Navigate('/myblog');
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBlogData();
    }, [])
    useEffect(() => {
        console.dir(blog);
    }, [blog])
    return (
        <div>
            <Navbar />
            <div className='flex justify-center bg-slate-200 h-screen items-center  '>
                <div className='block h-16'></div>
                <div className='bg-white shadow-2xl m-5 p-6 '>
                    <form onSubmit={handleSubmit} className='space-y-3'>
                        <h1 className='text-2xl'>Enter Details</h1>
                        <label className='block '>
                            Title:
                            <input type='text' placeholder='My New Blog' name='title' value={blog.title} onChange={handleChange} className='block mt-1 border rounded-md w-full p-2'></input>
                        </label>
                        <label className='block'>
                            Description:
                            <input type='text' placeholder='description' name='description' value={blog.description} onChange={handleChange} className='block mt-1 border rounded-md w-full p-2 '></input>
                        </label>
                        <label className='block'>
                            Image:
                            <input type='text' placeholder='image' name='image' value={blog.image} onChange={handleChange} className='block mt-1 border rounded-md w-full p-2'></input>
                        </label>
                        <button type='submit' className='w-full border-2 border-solid bg-blue-500 text-white rounded-xl p-4'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BlogEdit