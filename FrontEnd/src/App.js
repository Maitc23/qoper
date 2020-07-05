import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LandingPage from './components/ladingPage'
import Navigation from './components/layout/navigation'
import Login from './components/auth/login'
import Register from './components/auth/register'
import UserContext from './context/userContenxt'

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        "http://localhost:4000/api/tokenIsValid",
        null,
        { headers: { "x-access-token": token } }
      );

      if (tokenRes.data) {
        const userRes = await Axios.get(
          "http://localhost:4000/api/me",
          {
            headers: { "x-access-token": token }
          });
        setUserData({
          token,
          user: userRes.data
        })
      }
    }
    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Navigation />


        <div className="container p-4">
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>

      </UserContext.Provider>


    </Router>
  );
}

export default App;
