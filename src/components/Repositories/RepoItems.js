import React from 'react'
import PropTypes from 'prop-types'


const RepoItems = ({repo}) => {
  
  return (
       
    <div className='card'>
        <a href={repo.html_url}>{repo.name}</a>
    </div>
  )
}

// Check if error
RepoItems.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItems;