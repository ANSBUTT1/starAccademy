import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai"


const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }


    return (
        <div className='top-0 left-0 fixed w-full' >
            <div className=' flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div>
                    <Link to="/" className='font-semibold text-2xl p-1 cursor-pointer'>
                        star<span className='text-brightGreen'>Accademy</span>
                    </Link>
                </div>
                <nav className='hidden md:flex  gap-5 font-medium p-1 cursor-default'>
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
                        className=' p-[3px] font-semibold bg-green-300 hover:shadow-xl hover:bg-brightGreen text-white rounded-md transition-all cursor-pointer'>
                        Contact
                    </Link >
                </nav>
                <div className='flex md:hidden' onClick={handleChange} >
                    <div>
                        <AiOutlineMenu size={22} />
                    </div>
                </div>
            </div>
            <div className={`${menu ? "translate-x-0" : "-translate-x-full"
                } md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>

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
                <div className='flex justify-center'>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className=' p-[3px] font-semibold bg-green-300 hover:shadow-xl hover:bg-brightGreen text-white rounded-md transition-all cursor-pointer'>
                        Contact Us
                    </Link >
                </div>
            </div>
        </div>
    )
}

export default Navbar