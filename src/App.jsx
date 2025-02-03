import React, {useEffect} from 'react'
import Login from './components/Auth/Login'
import Employee from './components/Dashboard/Employee'
import Admin from './components/Dashboard/Admin'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

function App() {

  useEffect(() => {
    getLocalStorage()
  },)
  
  return (
    <div>
      <Login />
      {/* <Employee /> */}
      {/* <Admin /> */}
    </div>
  )
}

export default App
