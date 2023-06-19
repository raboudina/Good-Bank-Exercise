import React from 'react';

//const loggedInContext = React.createContext(loggedIn);
//export const loggedInContext = React.createContext({status:false});
export const userContext = React.createContext({loggedIn:false,name:"",email:"",balance:""});

