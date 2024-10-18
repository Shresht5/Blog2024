import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../redux/store';

const Navbar = () => {
    const isLogin = useSelector(state => state.isLogin);
    const dispatch = useDispatch();

    const Logout = () => {
        dispatch(authActions.logout())
    }

    console.log(isLogin)

    return (
        <div className='fixed top-0 w-full bg-blue-500 p-4 shadow-xl text-white z-40'>
            <div className='max-w-6xl mx-auto flex justify-between items-center '>
                <div>
                    <Link to="/"><p className='text-2xl'>My Blog App</p></Link>
                </div>
                <div>

                </div>
                <div className='space-x-4 '>
                    {isLogin && (<>
                        <Link to="/myblog"><button >My Blogs</button></Link>
                        <Link to="/blogs"><button >Blogs</button></Link>
                        <Link to="/createblog"><button >Create</button></Link>
                    </>)}
                    {!isLogin && (<>
                        <Link to="/login"><button >Login</button></Link>
                        <Link to="/signup"><button>Sign Up</button></Link>
                    </>)}
                    {isLogin && (<>
                        <Link to="/"><button onClick={Logout}>Log Out</button></Link>
                    </>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar