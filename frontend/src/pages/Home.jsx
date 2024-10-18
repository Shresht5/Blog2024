import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../assets/Shreshta-IMG9532.jpg'
import Blogin from '../assets/blogins.jpg'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='block h-16'></div>
            <div className='flex justify-center bg-slate-100'>{/* main */}
                <div className='w-full max-w-6xl shadow-2xl p-7 bg-white'>{/* center */}
                    <div className='flex flex-col items-center'>{/* head */}
                        <div>
                            <h6 className='text-9xl font-serif '>Demo</h6>
                        </div>
                        <div>
                            <h1>This Is Sample</h1>
                        </div>
                    </div>
                    <div className='w-full'><hr className="border-1 border-gray-300 my-4"></hr></div>
                    <div className='block xl:flex xl:space-y-2'>
                        <div className='w-full m-2 shadow-xl p-2'>
                            <div className='relative'>
                                <img src={Blogin} className='w-full' ></img>
                                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end ">
                                    <h3 className="text-blue-500  text-3xl font-bold">Welcome to My Blog</h3>
                                </div>
                            </div>
                        </div>
                        <div className='w-96 m-2 shadow-xl p-2'>{/*righ side */}
                            <div className='space-y-3'>
                                <h2>About Me</h2>
                                <div className='flex space-x-1'>
                                    <div>
                                        <img src={Profile} alt="o" className='h-14 w-14 rounded-full' />
                                    </div>
                                    <div>
                                        <h1 className='text-xl font-serif'>Shreshta Balapure</h1>
                                        <p className='text-emerald-500'>Software Devloper</p>
                                    </div>
                                </div>
                                <div>
                                    A software developer designs, builds, and maintains applications or systems to solve problems using programming languages and technology.
                                </div>
                                <h1 className='text-orange-500'>
                                    FOLLOW ME
                                </h1>
                                <div>
                                    Follow me for updates, insights, and growth!
                                </div>
                                <div>
                                    Read More
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home