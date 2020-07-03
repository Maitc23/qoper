import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/navigation'
import landingPage from './components/ladingPage'

function App() {
  return (
    <Router>
      <Navigation />


      <div className="container p-4">

        <Route path="/" exact component={landingPage} />

      </div>

    </Router>
  );
}

export default App;
