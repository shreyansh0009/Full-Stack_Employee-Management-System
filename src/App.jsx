import React, {useContext, useState} from 'react'
import Login from './components/Auth/Login'
import Employee from './components/Dashboard/Employee'
import Admin from './components/Dashboard/Admin'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  setLocalStorage();

  const [user, setuser] = useState(null)

  const handleLogin = (email, passowrd) => {
    if(email == 'admin@me.com' && passowrd == 123) {
      setuser('admin')      
    } else if(email == 'user@me.com' && passowrd == 123) {
      setuser('employee')
    } else {
      alert("Invalid Credentials!")
      
    }
  }

  const data = useContext(AuthContext)
  console.log(data);
  
  
  return (

    <div>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <Admin /> : <Employee />}
    </div>
  )
}

export default App
