
import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class search extends Component {
  
  state = {
    text: ""
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  // jab bhi koi value change ho to wo state me update hogae
  onChange = e => {
    this.setState({ [ e.target.name ] : e.target.value })
  }

  // this function will submit the Search form and prevent from loading
  onSubmit = e => {

    e.preventDefault();
    if (this.state.text==="") {
      this.props.setAlert("Please Enter Username" , "light")
    }

    else{
      this.props.searchUsers(this.state.text)
      this.setState({ text: "" })
    }
  } 

  onClick = e => {
    this.props.clearUsers();
  }

  render() {

    const { showClear } = this.props;
    const { text } = this.state;

    return (

      <div>
        
        <form className='form' onSubmit={this.onSubmit}>

            <input type="text" name='text' placeholder='Search User' className='btn-search'
              // Hamne search bar ki value ko state me update karwadiya
              value={text}
              onChange={this.onChange}
            />

            <input type="submit" value="Search" className='btn-submit' />

            {/* condition for showing clear button after search... condition true he idhr */}
            {showClear && (

              <button onClick={this.onClick} className="clear-btn">

                <i className="fa-solid fa-trash"></i>

              </button>

            )}
            
        </form>     

      </div>
    )
  }
}