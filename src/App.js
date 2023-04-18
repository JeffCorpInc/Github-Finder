// This is the main app in which we are adding different componenets together to make application

import './App.css';
import React,{useState} from 'react';
import Alert from './components/Layouts/Alert';
import Navbar from './components/Layouts/Navbar';
import NavBTN from './components/Layouts/Nav-BTN';
import Search from './components/Users/search';
import Users from './components/Users/Users';
import User from './components/Users/User';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/Pages/About';


const App = () => {

  // State Update Using useState hook
  const [users,setUsers] = useState([]);
  const [user,setUser] = useState({});
  const [repos,setRepos] = useState([]);
  const [laoding,setLaoding] = useState(false);
  const [alert,setAlert] = useState(null);

  // FUNCTION : wil get users from the api
  const searchUsers = async (text) => {
    
    setLaoding(true);

    // "get request" return promise, ".then" to catch promise. Axios fetching data.
    // await keyword is used to not to wait for the api result and run the other code. 
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
    setUsers(res.data.items);
    setLaoding(false);
  }

  // FUNCTION : will get the Users data from the api
  const getUser = async (username) => {
    
    setLaoding(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
    // user me hamne result.data ko store karadiya or state update kadiya
    setUser(res.data);
    setLaoding(false); 
  }

  // FUNCTION : will get the Users latest repos from the github
  const getUserRepos = async (username) => {
  
    setLaoding(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    // user me hamne result.data ko store karadiya or state update kadiya 
    setRepos(res.data);
    setLaoding(false);
  }

  // FUNCTION : to erase all the user after making search
  const clearUsers = () => {

    setUsers([])
    setLaoding(false)
  }
  
  // FUNCTION : when we search on empty field
  const displayAlert = (msg,type) => {

    setAlert({ msg,type })
    // timeout to remove alert 
    setTimeout (() => setAlert(null) , 2500);
  }

  return(
    
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
              <Search searchUsers= {searchUsers} 

                    clearUsers={clearUsers} 
                    // Agr users ki lenght 0 se bari he to true return warna false
                    showClear={users.length > 0 ? true : false}      
                    setAlert={displayAlert} />
          
              {/* hamne state me se objects lekr "users" me call karliya using "props"  */}
              <Users laoding={laoding} users={users} />

            </div>
          )}/>

          {/*2 About Page Route */}
          <Route exact path='/about' element={<About/>}/>

          {/*3 User Profile Details Page Route */}
          <Route exact path='/user/:login' Component={ props => (
          
            // Root props and user ko link krdiya 
            <User {...props} getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} laoding={laoding} />
          
          )}/>

        </Routes>
                
      </div>

    </div>
    </Router>
  )  
}

export default App;
