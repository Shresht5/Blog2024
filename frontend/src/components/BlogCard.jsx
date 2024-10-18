import React from 'react'
import Pen from '../assets/Pen.jpg'
import Bird from '../assets/Bird.jpg'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogCart = (props) => {
    const Navigate = useNavigate()
    const handleEdit = () => {
        console.log(props.id)
        Navigate(`/blogedit/${props.id}`)
    }
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:9099/api/blog/deleteblog/${props.id}`)
            if (res.data.success) {
                console.dir(res)
                alert("blog deleted")
            }
        } catch (err) {
            console.log(err)
        }
    }

    console.dir(props)
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className=' border-slate-200 rounded-3xl border-2 w-[500px] m-6 p-5 space-y-6 shadow-2xl'>
                    <div className='flex items-center space-x-4'>
                        <img src={Pen} alt='image' className='h-12 rounded-full' />
                        <div className='w-full'>
                            <h1 className='text-xl'>{props.name}</h1>
                            <p className='text-gray-500'>{props.time}</p>
                        </div>
                        {props.isUser ? (<div className='flex space-x-2 '>
                            <button onClick={handleEdit}><CiEdit className='h-8 w-8' /></button>
                            <button onClick={handleDelete}><MdDelete className='h-8 w-8' /></button>
                        </div>) : ('')}
                    </div>
                    <div>
                        <img src={Bird} alt='image' />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-xl font-bold'>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCart