import React from 'react'
import Header from '../../others/Header'
import Tasks from '../../others/Tasks'
import TaskList from '../Tasklist/TaskList'

const Employee = ({data}) => {
  return (
    <div className='h-screen bg-black'>
      <Header data = {data}/>
      <Tasks data = {data}/>
      <TaskList data = {data}/>
    </div>

  )
}

export default Employee
