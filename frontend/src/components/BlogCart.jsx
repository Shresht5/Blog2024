import React from 'react'
import Pen from '../assets/Pen.jpg'
import Bird from '../assets/Bird.jpg'

const BlogCart = (props) => {
    console.dir(props)
    return (
        <div>

            <div className='flex flex-col items-center '>
                <div className=' border-slate-200 rounded-3xl border-2 w-[500px] m-6 p-5 space-y-6 shadow-2xl'>
                    <div className='flex items-center space-x-4'>
                        <img src={Pen} alt='image' className='h-12 rounded-full' />
                        <div>
                            <h1 className='text-xl'>{props.name}</h1>
                            <p className='text-gray-500'>{props.time}</p>
                        </div>
                    </div>
                    <div>
                        <img src={Bird} alt='image' />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-lg font-bold'>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCart