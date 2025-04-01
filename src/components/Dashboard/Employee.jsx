import React, { useState, useEffect } from 'react';
import Header from '../../others/Header'
import Tasks from '../../others/Tasks'
import TaskList from '../Tasklist/TaskList'

const Employee = ({data, handleLogout}) => {

  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  });

  useEffect(() => {
    // Function to refresh data when localStorage updates
    const fetchData = () => {
      setData(JSON.parse(localStorage.getItem("employees")) || []);
    };

    // Listen for changes
    window.addEventListener("taskUpdated", fetchData);

    return () => {
      window.removeEventListener("taskUpdated", fetchData);
    };
  }, []);
  
  return (
    <div className='h-screen bg-black'>
      <Header data = {data} handleLogout={handleLogout}/>
      <Tasks data = {data}/>
      <TaskList data = {data}/>
    </div>

  )
}

export default Employee
