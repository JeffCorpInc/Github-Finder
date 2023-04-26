import React, {useReducer} from "react";
import axios from "axios";
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {SEARCH_USERS,GET_USER,CLEAR_USERS,GET_REPOS,SET_LAODING} from '../types';

const GithubState = props => {

    // all the object from APP.js
    const initialState={

        users: [],
        user: {},
        repos: [],
        laoding: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search User
    const searchUsers = async (text) => {
        
        setLaoding();

        // "get request" return promise, ".then" to catch promise. Axios fetching data.
        // await keyword is used to not to wait for the api result and run the other code. 
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        
        dispatch({
            type: SEARCH_USERS,
            // data hoga isme jo state me update kare ga
            payload: res.data.items
        })
    }

    // Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    // Get Users
    const getUser = async (username) => {
        
        setLaoding();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        
        dispatch({
            type: GET_USER,
            payload: res.data 
        })
    }

    // Get Repos
    const getUserRepos = async (username) => {
    
        setLaoding();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }




    // Set Loading
    const setLaoding = () => dispatch({ type: SET_LAODING })
    
    // All the actions

    return <GithubContext.Provider value={{ users: state.users, user:state.user, repos: state.repos, laoding: state.laoding, searchUsers, clearUsers, getUser, getUserRepos }}>

        {props.children}

    </GithubContext.Provider>
}

export default GithubState;