import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from 'axios';

import LandingPage from './components/LandingPage'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/pages/UserProfile'
import TrabajosLista from './components/pages/cliente/TrabajosLista'
import NewJob from './components/pages/cliente/NewJob'
import JobList from './components/pages/proveedor/JobList'
import PausedJobs from './components/pages/cliente/PausedJobs'
import CotizationJobs from './components/pages/cliente/CotizationJobs'
import CompletedJobs from './components/pages/cliente/CompletedJobs'
import CancelledJobs from './components/pages/cliente/CancelledJobs' 
import AcceptedCotizations from './components/pages/proveedor/AcceptedCotizations'

import UserContext from './context/UserContext'
import checkout from './components/pages/Checkout'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //En algún momento borraré esto, atte: Rafa


export default function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('x-access-token');

      if (token === null) {
        localStorage.setItem("x-access-token", "");
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
        });

      }
    }
    checkLoggedIn();
  }, []);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
        <Navigation />
        <div className={'root'}>
          <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/newJob" component={NewJob}/>
            <Route path="/trabajosLista" component={TrabajosLista}/>
            <Route path="/jobList" component={JobList}/>
            <Route path="/checkout" component={checkout}/>
            <Route path="/pausedJobs" component={PausedJobs}/>
            <Route path="/cotizationJobs" component={CotizationJobs}/>
            <Route path="/completedJobs" component={CompletedJobs}/>
            <Route path="/cancelledJob" component={CancelledJobs}/>
            <Route path="/acceptedCotizations" component={AcceptedCotizations}/>
            
          </Switch>
        </div>
        <Footer />
        </UserContext.Provider>
    </Router >
    </>
  );
}

