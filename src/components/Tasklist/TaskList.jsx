import React from 'react'
import Accept from './Accept'
import New from './New'
import Complete from './Complete'
import Failed from './Failed'

const TaskList = ({data}) => {    
  return (
    <div id='tasklist' className='h-[42%] m-7 pb-4 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
        {/* <Accept />
        <New />
        <Complete />
        <Failed /> */}

        {data.tasks.map((e) => {

            if(e.active) {
                return <Accept />
            }
            
            if(e.newTask) {
                return <New />
            }

            if(e.completed) {
                return <Complete />
            }

            if(e.failed) {
                return <Failed />
            }
        })}
      
    </div>
  )
}

export default TaskList
