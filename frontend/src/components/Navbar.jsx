import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='sticky bg-blue-500 p-4 shadow-xl text-white'>
            <div className='max-w-6xl mx-auto flex justify-between items-center '>
                <div>
                    <p className='text-2xl'>My Blog App</p>
                </div>
                <div>

                </div>
                <div className='space-x-4 '>
                    <Link to="/myblog"><button >My Blogs</button></Link>
                    <Link to="/blogs"><button >Blogs</button></Link>
                    <Link to="/login"><button >Login</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                    <Link to="/login"><button>Log Out</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar