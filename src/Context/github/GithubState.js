import React, {useReducer} from "react";
import axios from "axios";
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {SEARCH_USERS,GET_USER,CLEAR_USERS,GET_REPOS,SET_LAODING} from '../types';


let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== "production"){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}



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
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        console.log(res);
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
        try {
            const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
            dispatch({
                type: GET_USER,
                payload: res.data 
            })
        } catch (error) {
            console.log(error.toJSON());
        }

        // main error is in this componenet, Error type: NOT FOUND 404 error
    }

    // Get Repos
    const getUserRepos = async (username) => {
    
        setLaoding();
        
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)

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