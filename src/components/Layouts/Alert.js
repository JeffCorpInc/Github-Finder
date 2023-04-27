import React, { useContext } from 'react'
import AlertContext from '../../Context/alert/alertContext';

const Alert = () => {

    // Initialize
    const alertContext = useContext(AlertContext);
    const {alert} = alertContext;
  
    return (

        alert !== null && (
        
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-cirlce"></i> {alert.msg}
            </div>
        )
    )
}
 export default Alert;