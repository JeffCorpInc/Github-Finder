// This is the main app in which we are adding different componenets together to make application

import './App.css';
import React,{Component} from 'react';
import Alert from './components/Layouts/Alert';
import Navbar from './components/Layouts/Navbar';
import Search from './components/Users/search';
import Users from './components/Users/Users';
import axios from 'axios';


class App extends Component {

  // STATE OBJECT
  state = {

    users: [],
    laoding: false,
    alert: null
  }

  // this function is called from search component by passing props
  searchUsers = async (text) => {
    
    // to update state we use setState
    this.setState({laoding: true});

    // "get request" return promise, ".then" to catch promise. Axios fetching data.
    // await keyword is used to not to wait for the api result and run the other code. 
    const res = await  axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data.items , laoding: false });
  }

  // this function is called to erase all the user after making search
  clearUsers = () => this.setState({ users: [] , laoding: false })

  // this function is called when we search on empty field
  setAlert = (msg,type) => {
    this.setState({ alert: { msg: msg , type: type } })
    // timeout to remove alert 
    setTimeout( () => this.setState({alert: null}) , 2500)
  }

  // render is a method used to write HTML code inside it. It's a lCE 
  render(){

    const { users, laoding, alert } = this.state;

    return(
      
      <div className='App'>
          <Navbar />
          <div>

            <Alert alert={alert} />

            {/* using props hamne "searchUSers" ke method ko call kiya or uper function banadiya */}
            <Search searchUsers= {this.searchUsers} 

                clearUsers={this.clearUsers} 
                // Agr users ki lenght 0 se bari he to true return warna false
                showClear={users.length > 0 ? true : false}      
                setAlert={this.setAlert}
            />
            
            {/* hamne state me se objects lekr "users" me call karliya using "props"  */}
            <Users laoding={laoding} users={users} />
          
          </div>
      </div>

    )  
  } 
}

export default App;
