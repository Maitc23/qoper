import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LandingPage from './components/LadingPage'
import Navigation from './components/layout/Navigation'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import UserContext from './context/UserContenxt'

export default function App() {

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
    <>
      <Router>
        
        <UserContext.Provider value={{ userData, setUserData }}>

          <Navigation />
          <Switch>

            <div className="container p-4">
              <Route path="/" exact component={LandingPage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </div>

          </ Switch>

        </UserContext.Provider>
      </Router>
    </>
  );
}

