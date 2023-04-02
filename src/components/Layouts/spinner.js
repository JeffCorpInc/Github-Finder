
import React, { Fragment } from 'react';
import spinner from './Spinner.gif';


const Spinner = () =>

    <Fragment>
        
        <img src= {spinner} alt="loading" style= {{width: "50px" , display: 'block' , margin: 'auto' }} />
        
    </Fragment>

export default Spinner