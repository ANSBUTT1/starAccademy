import React from 'react'

const CoursesCard = (props) => {
  return (
    <div className='flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all'>
        <div className='w-3/5'>
            <img src={props.img} alt="" />
        </div>
        <div>
            <h3 className='font-semibold text-lg text-center my-5'>{props.title}</h3>
            <p className='text-lightText text-center md:text-start'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quibusdam!
            </p>
        </div>
    </div>
  )
}

export default CoursesCard