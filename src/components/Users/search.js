
import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../Context/github/githubContext';




const Search = ({setAlert}) => {

  const githubContext = useContext(GithubContext);

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

      githubContext.searchUsers(text);
      setText('');
    }
  } 

  const onClick = () => {
    githubContext.clearUsers();
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
          {githubContext.users.length > 0 && (

            <button onClick={onClick} className="clear-btn">

              <i className="fa-solid fa-trash"></i>

            </button>

          )}
          
      </form>     

    </div>
  )
  
}

Search.propTypes = {

  setAlert: PropTypes.func.isRequired
}

export default Search;
