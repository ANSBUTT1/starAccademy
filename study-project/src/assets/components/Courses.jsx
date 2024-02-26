import React from 'react'
import Heading from '../layout/Heading'
import CoursesCard from '../layout/CoursesCard'
import webImg from "../image/web-dev.svg"
import appImg from "../image/App-dev.svg"
import graphicImg from "../image/graphic.svg"
import digitalImg from "../image/digital.svg"

const Courses = () => {
    return (
        <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
            <Heading title1="Our" title2="Courses" />
            <div className='flex flex-wrap justify-center gap-6 mt-6'>
                <CoursesCard img={webImg} title="Web Development" />
                <CoursesCard img={appImg} title="App Development" />
                <CoursesCard img={graphicImg} title="Graphic Designer" />
                <CoursesCard img={digitalImg} title="Digital Marketing" />
            </div>
        </div>
    )
}

export default Courses