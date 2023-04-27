// This is the main app in which we are adding different componenets together to make application

import './App.css';
import React from 'react';
import Alert from './components/Layouts/Alert'; 
import Navbar from './components/Layouts/Navbar';
import NavBTN from './components/Layouts/Nav-BTN';
import Home from './components/Pages/Home';
import User from './components/Users/User';
import GithubState from './Context/github/GithubState';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import AlertState from './Context/alert/AlertState';


const App = () => {

  return(
    
    <GithubState>
    <AlertState>
      <Router>
      <div className='App'>

        <Navbar />
        <NavBTN/>
        <div>

          <Alert alert={alert} />
          
          <Routes>

            {/*1 Home Page Route */}
            <Route exact path="/" Component={Home}/>

            {/*2 About Page Route */}
            <Route exact path='/about' Component={About}/>

            {/*3 User Profile Details Page Route */}
            <Route exact path='/user/:login' Component={User}/>

            {/* If page wont found */}
            <Route element={NotFound}/>
 
          </Routes>
                  
        </div>

      </div>
      </Router>
    </AlertState>
    </GithubState>
  )  
}

export default App;
