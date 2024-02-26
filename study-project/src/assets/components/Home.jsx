import React from 'react';
import { Link } from "react-scroll";
import Button from '../layout/Button';
import img from "../image/hero.svg";

const Home = () => {
    return (
        <div className='min-h-[70vh]  flex flex-col md:flex-row md:justify-between items-center md:mx-32 mt-24 md:mt-10 '>
            <div className='md:w-2/4 text-center'>
                <h2 className='md:text-5xl text-3xl font-semibold leading-tight'>Knowledge with</h2>
                <span className='md:text-5xl text-3xl  font-semibold text-brightGreen'>starAccademy</span>
                <p className='text-lightText mt-5  text-center md:text-start px-5 md:px-0'>
                    Joining Star Academy ensures access to top faculty,
                    diverse perspectives, and cutting-edge resources for
                    holistic learning, fostering innovation and preparing
                    individuals for success in a rapidly evolving world.
                </p>
                <Link to="contact" spy={true} smooth={true} duration={500}>
                    <Button title="Contact Us" />
                </Link>
            </div>
            <div className='w-full md:w-2/4'>
                <img src={img} alt="img" />
            </div>
        </div>
    );
}

export default Home;
