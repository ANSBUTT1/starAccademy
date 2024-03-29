import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div>
            <div className=' flex flex-col border-2 p-5 border-lightText rounded-lg md:flex-row justify-between md:px-32 bg-white px-5  '>
                <div className='flex flex-col md:flex-row gap-5 font-medium p-1 text-lg'>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-brightGreen transition-all cursor-pointer'>
                        Home
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-brightGreen transition-all cursor-pointer'>
                        About
                    </Link >
                    <Link
                        to="courses"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-brightGreen transition-all cursor-pointer'>
                        Courses
                    </Link >
                    <Link
                        to="reviews"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='hover:text-brightGreen transition-all cursor-pointer'>
                        Reviews
                    </Link >
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className=' p-[3px] w-fit font-semibold bg-green-300 hover:shadow-xl hover:bg-brightGreen text-white rounded-md transition-all cursor-pointer'>
                        Contact
                    </Link >
                </div>
                <div>
                    <Link to="/" className='font-semibold text-2xl p-1 cursor-pointer'>
                        star<span className='text-brightGreen'>Accademy</span>

                    </Link>
                </div>

            </div>
            <div className='text-center mt-4'>
                <p>
                    @copyright developed by
                    <span className='text-brightGreen px-2 py-5' >Butt G</span>
                    All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer