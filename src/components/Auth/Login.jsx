import React, { useState } from 'react';

const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e)=> {
        e.preventDefault()
        console.log("username is: ", username);
        console.log("passowrd is: ", password);
        setusername("")
        setpassword("")
    }

  return (
    <>

    <div className='bg-black w-screen h-screen flex items-center justify-center'>

        <div className='bg-transparent text-white border-2 border-red-600 shadow-2xl shadow-red-600 rounded-2xl w-2xl h-72 flex items-center justify-center'>
            <form className='flex flex-col items-center justify-center'
            onSubmit={(e) => {submitHandler(e)}}
            >

            <input
            value={username}
            onChange={(e) => {setusername(e.target.value)}}
            
            required type="email" placeholder='Enter your username'
            className='border-2 border-white rounded-lg text-2xl m-3 p-3'/>

            <input
            value={password}
            onChange={(e) => {setpassword(e.target.value)}}
            required type="password" placeholder='Enter Your Password'
            className='border-2 border-white rounded-lg text-2xl m-3 p-3'/>

            <button className='bg-green-400 w-[335px] h-12 rounded-lg overflow-hidden mt-3 cursor-pointer'>Login</button>
            </form>

        </div>

    </div>

    </>
  )
}

export default Login
