import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import Employee from "./components/Dashboard/Employee";
import Admin from "./components/Dashboard/Admin";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  setLocalStorage();
  getLocalStorage();

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedInUserData(loggedInUser.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage(); 

    const matchedAdmin = admin.find(
      (e) => email === e.email && e.password === password
    );
    if (matchedAdmin) {
      setUser("admin");
      setLoggedInUserData(matchedAdmin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: matchedAdmin })
      );
      return;
    }

    const matchedEmployee = employees.find(
      (e) => email === e.email && e.password === password
    );
    if (matchedEmployee) {
      setUser("employee");
      setLoggedInUserData(matchedEmployee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: matchedEmployee })
      );
      return;
    }

    alert("Invalid Credentials!");
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <Admin data={loggedInUserData} handleLogout={handleLogout} />
      ) : (
        <Employee data={loggedInUserData} handleLogout={handleLogout} />
      )}
    </div>
  );
}
export default App;
