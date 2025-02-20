import React, { useContext, useState } from 'react';
import Login from './components/Auth/Login';
import Employee from './components/Dashboard/Employee';
import Admin from './components/Dashboard/Admin';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

function App() {
  setLocalStorage();
  getLocalStorage();

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (authData) {
      const admin = authData.admin.find((e) => email === e.email && e.password === password);
      if (admin) {
        setUser('admin');
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin'}));
        return;
      }

      const employee = authData.employees.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee'}));
        return;
      }
    }

    alert("Invalid Credentials!");
  };

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <Admin /> : user === 'employee' ? <Employee /> : ''}
    </div>
  );
}

export default App;