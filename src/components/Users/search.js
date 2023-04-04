
import React, { Component } from 'react'

export default class search extends Component {
  
  render() {

    return (

      <div>
        <form className='form'>
            <input type="text" name='text' placeholder='Search User' className='btn-search'/>
            <input type="submit" value="Search" className='btn-submit' />
        </form>
      </div>
    )
  }
}
