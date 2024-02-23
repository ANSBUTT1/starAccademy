import React from 'react'

const Button = (props) => {
  return (
    <div>
       <button className=' font-semibold text-white py-2  px-5 rounded-full mt-4 bg-green-300 hover:bg-brightGreen hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'>
        {props.title}     
       </button>
    </div>
  )
}

export default Button