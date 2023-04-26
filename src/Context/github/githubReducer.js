import { SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS, SET_LAODING } from '../types';

const initialState = {
  users: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case CLEAR_USERS:
        return{
            ...state,
            users: [],
            loading: false
        }
    case GET_USER:
        return{
            ...state,
            user: action.payload,
            loading: false
        }
    case GET_REPOS:
        return{
            ...state,
            repos: action.payload,
            loading: false
        }
    case SET_LAODING:
      return {
        ...state,
        loading: true
      };
      
    default:
      return state;
  }
};

export default reducer;
