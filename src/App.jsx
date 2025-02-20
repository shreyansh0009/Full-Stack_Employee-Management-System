import React, {useContext, useState} from 'react'
import Login from './components/Auth/Login'
import Employee from './components/Dashboard/Employee'
import Admin from './components/Dashboard/Admin'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  setLocalStorage();
  getLocalStorage();

  const [user, setuser] = useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if(authData && authData.admin.find((e) => email == e.email && e.password == password)) {
      setuser('admin')      
    } else if(authData && authData.employees.find((e) => email == e.email && e.password == password)) {
      setuser('employee')
    } else {
      alert("Invalid Credentials!") 
    }
  }
  
  
  return (

    <div>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <Admin /> : <Employee />}
    </div>
  )
}

export default App
