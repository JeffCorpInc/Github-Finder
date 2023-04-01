// here we will fetch the github user data and show them

import React, { Component } from 'react'
import UserData from './UserData';



export default class Users extends Component {

    render() {
    
    return (
        
      <div className='userDataStyle'>

        {this.props.users.map( user => (

                // unique key to identify which user should display
                <UserData key={user.id} user={user} />

            )
          )
        }

      </div>
    )
  }
};