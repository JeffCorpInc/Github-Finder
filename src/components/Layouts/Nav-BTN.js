import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {

  return (        

    <div>

        <ul className='contact'>
            
            <li>
                <Link to="/" className='one'><i className="fas fa-home"></i> Home</Link>
            </li>

            <li>
                <Link to="/about" className='one' ><i className="fas fa-info"></i> About</Link>
            </li>

        </ul>

    </div>
  )
}
