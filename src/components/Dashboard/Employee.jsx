import React, { useState, useEffect } from 'react';
import Header from '../../others/Header'
import Tasks from '../../others/Tasks'
import TaskList from '../Tasklist/TaskList'

const Employee = ({data, handleLogout}) => {

  return (
    <div className='h-screen bg-black'>
      <Header data = {data} handleLogout={handleLogout}/>
      <Tasks data = {data}/>
      <TaskList data = {data}/>
    </div>

  )
}

export default Employee
