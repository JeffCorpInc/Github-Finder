// Is component me ham GitHub api ke through user ka data fetch kare ge or App.js pr call kare ge

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// we refactored UserData component. We dont need render method or (this.) to call in functional components
// "Destructuring" me hame ksi object ki key values ko save karlete hein.
const UserData = ({user:{ avatar_url, login }}) => {

    return (

      <div className='card1'>

        <img src={avatar_url} alt="Profile"/>
        <h3>{login}</h3>
        <Link to={`/user/${login}`} rel="noreferrer"> Profile </Link>

      </div>
    )
}

// Type checking active, user is required 
UserData.propTypes = {

  user: PropTypes.object.isRequired,
}

export default UserData