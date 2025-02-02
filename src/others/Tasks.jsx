import React from 'react'

const Tasks = () => {
  return (
    <div className='flex justify-between gap-4 p-7'>

        <div className='h-40 w-1/2 bg-red-500 rounded-xl text-white p-10 cursor-pointer'>
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>

        <div className='w-1/2 bg-blue-500 rounded-xl text-white p-10 cursor-pointer'>
            <h2 className='text-3xl font-bold'>3</h2>
            <h3 className='text-2xl font-semibold'>Completed</h3>
        </div>

        <div className='h-40 w-1/2 bg-green-500 rounded-xl text-white p-10 cursor-pointer'>
            <h2 className='text-3xl font-bold'>8</h2>
            <h3 className='text-2xl font-semibold'>Accepted</h3>
        </div>

        <div className='h-40 w-1/2 bg-yellow-500 rounded-xl text-white p-10 cursor-pointer'>
            <h2 className='text-3xl font-bold'>1</h2>
            <h3 className='text-2xl font-semibold'>Failed</h3>
        </div>
      
    </div>
  )
}

export default Tasks
