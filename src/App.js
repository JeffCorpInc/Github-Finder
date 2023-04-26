// This is the main app in which we are adding different componenets together to make application

import './App.css';
import React,{useState} from 'react';
import Alert from './components/Layouts/Alert';
import Navbar from './components/Layouts/Navbar';
import NavBTN from './components/Layouts/Nav-BTN';
import Search from './components/Users/search';
import Users from './components/Users/Users';
import User from './components/Users/User';
import GithubState from './Context/github/GithubState';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/Pages/About';


const App = () => {

  // State Update Using useState hook
  const [alert,setAlert] = useState(null);
    
  
  // FUNCTION : when we search on empty field
  const displayAlert = (msg,type) => {

    setAlert({msg,type})
    // timeout to remove alert 
    setTimeout (() => setAlert(null) , 2500);
  }

  return(
    
    <GithubState>
      <Router>
      <div className='App'>

        <Navbar />
        <NavBTN/>
        <div>

          <Alert alert={alert} />
          
          <Routes>
            {/*1 Home Page Route */}
            <Route exact path="/" Component={ props => (
              
              <div>

                {/* using props hamne "searchUSers" ke method ko call kiya or uper function banadiya */}
                <Search  
      
                      setAlert={displayAlert} />
            
                {/* hamne state me se objects lekr "users" me call karliya using "props"  */}
                <Users />

              </div>
            )}/>

            {/*2 About Page Route */}
            <Route exact path='/about' element={<About/>}/>

            {/*3 User Profile Details Page Route */}
            <Route exact path='/user/:login' Component={ User} />

          </Routes>
                  
        </div>

      </div>
      </Router>
    </GithubState>
  )  
}

export default App;
