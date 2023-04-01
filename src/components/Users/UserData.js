// Is component me ham GitHub api ke through user ka data fetch kare ge or App.js pr call kare ge

import React from 'react';
import PropTypes from 'prop-types';


// we refactored UserData component. We dont need render method or (this.) to call in functional components
// "Destructuring" me hame ksi object ki key values ko save karlete hein
const UserData = ({user:{ avatar_url, html_url, login }}) => {

    return (

      <div className='card'>

        <img src={avatar_url} alt="Profile"/>
        <h3>{login}</h3>
        <a href={html_url} target='_blank' rel="noreferrer"> Profile </a>

      </div>
    )

}

// Type checking active, user is required 
UserData.propTypes = {

  user: PropTypes.object.isRequired,
}

export default UserData