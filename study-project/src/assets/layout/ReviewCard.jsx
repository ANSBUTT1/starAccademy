import React from 'react'



const ReviewCard = (props) => {
    return (
        <div className='w-full md:-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer transition-all'>
            <div>
                <p className='text-lightText'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores alias voluptates maiores ducimus,
                    tenetur quidem corporis amet. Ipsum, eos sequi!
                </p>
            </div>
            <div className='flex flex-row justify-center'>
                <img src={props.img} alt="img" className='rounded-full w-1/4' />
            </div>
        </div>
    )
}

export default ReviewCard