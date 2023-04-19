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
    
    // All the actions

    return <GithubContext.Provider value={{ users: state.users, user:state.user, repos: state.repos, laoding: state.laoding }}>

        {props.children}

    </GithubContext.Provider>
}

export default GithubState;