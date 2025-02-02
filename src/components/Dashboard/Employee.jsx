import React from 'react'
import Header from '../../others/Header'
import Tasks from '../../others/Tasks'
import TaskList from '../Tasklist/TaskList'

const Employee = () => {
  return (
    <div className='h-screen bg-black'>
      <Header />
      <Tasks />
      <TaskList />
    </div>

  )
}

export default Employee
