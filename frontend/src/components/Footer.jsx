import React from 'react'
import { FaStudiovinari, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-blue-300 p-5 space-y-2'>
            <div className='flex justify-between items-center'>
                <div>737 JOSH</div>
                <div><FaStudiovinari /></div>
                <div className='flex space-x-2'><FaFacebookF /><FaInstagram /><FaLinkedinIn /><FaXTwitter /></div>
            </div>
            <div className='flex justify-center'>
                <p>@20-24 localized</p>
            </div>
        </div>
    )
}

export default Footer