// This is the main app in which we are adding different componenets together to make application

import './App.css';
import React,{Component} from 'react';
import Navbar from './components/Layouts/Navbar';
import Users from './components/Users/Users';
import axios from 'axios';



class App extends Component {

  state = {

    users: [],
    laoding: false
  }


  // it's a life cycle event. This event execute at first place when page reload. 
  async componentDidMount() {

    // to update state we use setState
    this.setState({laoding: true});
    
    // "get request" return promise, ".then" to catch promise. Axios fetching data
    // await keyword is used to not to wait for the api result and run the other code. 
    const res = await  axios.get('https://api.github.com/users')
    this.setState({ users: res.data , laoding: false });

  }


  // render is a method used to write HTML code inside it. It's a lCE 
  render(){
    
    return(
      
      <div className='App'>
          <Navbar />
          <div>
            {/* hamne state me se objects lekr "users" me call karliya using "props"  */}
            <Users laoding={this.state.laoding} users={this.state.users} />
          </div>
      </div>

    )  
  } 
}

export default App;
