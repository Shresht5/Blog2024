import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import BlogCart from '../components/BlogCart';

const MyBlog = () => {
    const [blog, setBlog] = useState([]);
    const [userName, setUserName] = useState('')

    const getUserBlogs = async () => {
        try {
            const id = localStorage.getItem('userId');
            const res = await axios.get(`http://localhost:9099/api/blog/usergetblog/${id}`)
            if (res.data.success) {
                setUserName(res.data.user.Uname);
                setBlog(res.data.user.blogs)

            }

        } catch {

        }
    }
    useEffect(() => {
        getUserBlogs();
    }, [])
    return (
        <div>
            <Navbar />
            <div className='block h-16'></div>
            <div>
                {blog.map((b) => (<BlogCart name={userName}
                    title={b.title}
                    discription={b.description}
                    time={b.createdAt}
                />))

                }
            </div>
        </div>
    )
}

export default MyBlog