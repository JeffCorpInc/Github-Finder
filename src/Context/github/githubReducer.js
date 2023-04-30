// import { SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS, SET_LAODING } from '../types';

// const initialState = {
//   users: [],
//   laoding: false
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {

//     case SEARCH_USERS:
//         return {
//             ...state,
//             users: action.payload,
//             laoding: false
//         };
//     case CLEAR_USERS:
//         return{
//             ...state,
//             users: [],
//             laoding: false
//         }
//     case GET_USER:
//         return{
//             ...state,
//             user: action.payload,
//             laoding: false
//         }
//     case GET_REPOS:
//         return{
//             ...state,
//             repos: action.payload,
//             laoding: false
//         }
//     case SET_LAODING:
//       return {
//         ...state,
//         laoding: true
//       };
      
//     default:
//       return state;
//   }
// };

// export default reducer;


import { SEARCH_USERS, SET_LAODING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

const githubReducer = (state, action) => {

  switch(action.type) {
    
      case SEARCH_USERS: 
          return {
              ...state,
              users: action.payload,
              laoding: false
          }
      case GET_USER: 
          return {
              ...state,
              user: action.payload,
              laoding: false
          }
      case CLEAR_USERS:
          return {
              ...state,
              users: [],
              laoding: false
          }
      case GET_REPOS: {
          return {
              ...state,
              repos: action.payload,
              laoding: false
          }
      }
      case SET_LAODING:
          return {
              ...state,
              laoding: true
          }
      default:
          return state;
  }
}

export default githubReducer;