import React from 'react';                                              //firstly we import react library to index.js
import ReactDOM from 'react-dom/client';                                //Then we import react-dom, so we can do rendering in the browser  
import App from './App';                                                //we are rendering this app.js

const root = ReactDOM.createRoot(document.getElementById('root'));      //kaha render karna he "div(id=root)"
root.render(                                                            //hame render app ko karna he 
  <React.StrictMode>                                 
    <App />
  </React.StrictMode>
);


