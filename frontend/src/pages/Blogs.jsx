import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import BlogCart from '../components/BlogCart'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const getAllBlogs = async () => {
        try {
            const res = await axios.get('http://localhost:9099/api/blog/allblog');
            if (res.data.success) {
                setBlogs(res.data.blog);
                console.dir(res);
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getAllBlogs();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='block h-16'></div>
            <div>
                {blogs.map((b) => (<BlogCart name={b.user.Uname}
                    title={b.title}
                    description={b.description}
                    time={b.user.createdAt}
                />))

                }
            </div>
        </div>
    )
}

export default Blogs;