// Abhi ham navbar par kam kar rhe hein jo ke app.js ke andr exists karti he, ham navbar me cheexe add kar rhe hein or app.js me uski variable call karte ja rhe hein 
// navbar ko export kardiya app.js me import kar liya

import React from 'react';
import PropTypes from 'prop-types';



const Navbar = (props) => {

  return (
    
    <nav className='navbar'>

      <h1>
        <i className={props.icon}></i>
        {props.title}
      </h1>

    </nav>
  )
}

// Properties ko define kardiya
// Static means, we can't change it.
Navbar.defaultProps = {
    
  title: 'GitHub Finder',
  icon: 'fab fa-github'
};

// isme ham properties ki types define kare ge
Navbar.propTypes = {
    
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar