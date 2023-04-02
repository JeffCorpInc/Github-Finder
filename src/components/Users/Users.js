// here we will fetch the github user data and show them

import React from 'react'
import UserData from './UserData';
import Spinner from '../Layouts/spinner';
import PropTypes  from 'prop-types';



const Users = ({users , laoding}) => {

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

Users.propTypes = {
  
  users: PropTypes.array.isRequired,
  laoding: PropTypes.bool.isRequired,
}

export default Users