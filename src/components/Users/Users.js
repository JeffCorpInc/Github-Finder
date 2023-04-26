// here we will fetch the github user data and show them

import React, { useContext } from 'react'
import UserData from './UserData';
import Spinner from '../Layouts/spinner';
import GithubContext from '../../Context/github/githubContext';



const Users = () => {

  // Initializing GithubContext using useContext
  const githubContext = useContext(GithubContext);
  const {laoding, users} = githubContext;

  // check if "loading or not" and return "spinner or userItems"
  if (laoding) {

    return <Spinner />
  }
  
  else {

    return (
   
      <div className='userDataStyle'>
  
        {users.map( user => (
  
                // unique key to identify which user should display
                <UserData key={user.id} user={user} />
  
            )
          )
        }
  
      </div>
    )
  }
}

export default Users