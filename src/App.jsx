import React, {useEffect} from 'react'
import Login from './components/Auth/Login'
import Employee from './components/Dashboard/Employee'
import Admin from './components/Dashboard/Admin'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

function App() {

  // useEffect(() => {
  //   getLocalStorage()
  // },)

  const handleLogin = (email, passowrd) => {
    if(email == 'admin@me.com' && passowrd == 123) {
      console.log("welcome admin!");
      
    } else if(email == 'user@me.com' && passowrd == 123) {
      console.log("welcome user!");

    } else {
      alert("Invalid Credentials!")
      
    }
  }
  
  return (
    <div>
      <Login handleLogin = {handleLogin}/>
      {/* <Employee /> */}
      {/* <Admin /> */}
    </div>
  )
}

export default App
