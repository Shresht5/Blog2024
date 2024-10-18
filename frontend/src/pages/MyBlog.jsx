import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';

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
                {console.dir(blog)}
                {blog && blog.length > 0 ? (blog.map((b) => (
                    <BlogCard
                        id={b._id}
                        isUser={localStorage.getItem('userId') === b.user}
                        name={userName}
                        title={b.title}
                        description={b.description}
                        time={b.createdAt}
                    />
                ))) : (<h1>You haven't created blog</h1>)
                }
            </div>
        </div>
    )
}

export default MyBlog