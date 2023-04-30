// import React from 'react'
// import PropTypes from 'prop-types'


// const RepoItems = ({repo}) => {
  
//   return (
       
//     <div className='card'>
//         {repo.html_url &&
//             <a href={repo.html_url}>{repo.name}</a>
//         }
//     </div>
//   )
// }

// // Check if error
// RepoItems.propTypes = {
//   repo: PropTypes.object.isRequired
// }

// export default RepoItems;


import React from 'react'

const RepoItems = ({ html_url, name }) => {
    return (
        <div className="card">
            <h3>
                <a href={html_url} target="_blank" rel="noreferrer">{name}</a>
            </h3>
        </div>
    )
}

export default RepoItems;