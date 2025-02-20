import React from 'react'
import Tasks from './Tasks'

const Header = ({data}) => {
  return (
    <>
      <div className='w-screen h-32'>

        <div className='w-screen h-38 p-8 flex items-end justify-between font-bold text-white'>

            <h1 className='text-3xl'>Hello, <br /> <span className='text-5xl'>{data.firstName}</span></h1>
            <button className='text-xl cursor-pointer bg-red-500 w-24 h-10 rounded-md text-white mb-8'>Log Out</button>
        </div>
      </div>
    </>
  )
}

export default Header
