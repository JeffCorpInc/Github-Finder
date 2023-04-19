
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({searchUsers, setAlert, clearUsers, showClear}) => {

  // first value object 2nd method to update object
  const [text, setText] = useState('');

  // jab bhi koi value change ho to wo state me update hogae
  const onChange = e => setText(e.target.value)

  // this function will submit the Search form and prevent from loading
  const onSubmit = e => {

    e.preventDefault();
    if (text==="") {

      setAlert("Please Enter Username" , "light");
    }

    else{

      searchUsers(text)
      setText('');
    }
  } 

  const onClick = () => {
    clearUsers();
  }

  return (

    <div>
      
      <form className='form' onSubmit={onSubmit}>

          <input type="text" name='text' placeholder='Search User' className='btn-search'
            // Hamne search bar ki value ko state me update karwadiya
            value={text}
            onChange={onChange}
          />

          <input type="submit" value="Search" className='btn-submit' />

          {/* condition for showing clear button after search... condition true he idhr */}
          {showClear && (

            <button onClick={onClick} className="clear-btn">

              <i className="fa-solid fa-trash"></i>

            </button>

          )}
          
      </form>     

    </div>
  )
  
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}

export default Search;
