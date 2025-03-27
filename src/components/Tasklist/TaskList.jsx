import React from 'react'
import Accept from './Accept'
import New from './New'
import Complete from './Complete'
import Failed from './Failed'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[42%] m-7 pb-4 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>

        <Accept />
        <New />
        <Complete />
        <Failed />
        
        {/* <div className='h-full w-[30%] rounded-xl shrink-0 bg-violet-400'>

        <div className='flex justify-between p-5'>
                <h3 className='font-semibold bg-red-600 p-1 px-5 rounded-md'>High</h3>
                <h3 className='font-semibold'>31 Jan 2025</h3>
            </div>
            
            <div className='px-5'>
            <h1 className='font-bold text-3xl mb-3'>
                Make YouTube Video!
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nam? Numquam ex voluptas delectus architecto.
            </p>
            </div>

        </div> */}
      
    </div>
  )
}

export default TaskList
