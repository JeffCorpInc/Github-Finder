import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../Layouts/spinner';
import { Link } from 'react-router-dom';
import RepoItems from '../Repositories/RepoItems';
import GithubContext from '../../Context/github/githubContext';


const User = ({match}) => {

  // initialize GithubContext
  const githubContext = useContext(GithubContext);
  const {getUser,laoding,user,getUserRepos,repos} = githubContext;


  useEffect(()=>{

    getUser(match?.params?.login);
    getUserRepos(match?.params?.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const { avatar_url, location, name, hireable, bio, html_url, company , login, followers, following, public_repos, public_gists, website } = user;
  if (laoding) return <Spinner/>;

  return (
  
    <Fragment>

      <Link to="/" className='btn-back'>Back</Link>

      Hireable: { hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i> }

      <div className="card2 grid-2">

          <div className="all-centre">

            <img src={avatar_url} alt="Profile" className='round-img' style={{width:"150px"}} />
            <h2>{name}</h2>
            {location && ( <Fragment><h2>Location<p>{location}</p></h2></Fragment> )}
          </div>

          <div>

            {bio && ( <Fragment><h3>Bio<p>{bio}</p></h3></Fragment> )}
            <a href={html_url} className='btn btn-dark my-1' target='_blank' rel="noreferrer" >GitHub</a>

            <li>
              {login && ( <Fragment><h3>Username<p>{login}</p></h3></Fragment> )}
            </li>
            <li>
              {company && ( <Fragment><h3>Company<p>{company}</p></h3></Fragment> )}
            </li>
            <li>
              {website && ( <Fragment><h3>Website<p>{website}</p></h3></Fragment> )}
            </li>

          </div>

          <div className='card text-center'>
            
            <div className="badge badge-primary">Followes: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>

          </div>

      </div>

      <RepoItems repos={repos} />

    </Fragment>
  ) 
}

export default User;