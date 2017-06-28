import React from 'react';
import { browserHistory } from 'react-router';
import reduxStore from 'Redux/store.js';
import { currentUserSet } from 'Redux/actions.js';
import loginService from 'App/Login/loginUtill.jsx';

export const IMAGE_URL = 'src/assets/images/';
export const SOCKET_HOST = '192.168.1.86:3000';

let IMAGE_BASE_URL1 =  IMAGE_URL;
let BASE_URL1 = 'http://192.168.1.86:3000/';

export const IMAGE_BASE_URL = IMAGE_BASE_URL1;//live
export const BASE_URL = BASE_URL1;

export const getUserType = type => ( (type.toLowerCase() === 'caregiver' || (type.toLowerCase() === 'admin' && (getUser().admin_login_for_type).toLowerCase() === "caregiver")) ? 'cg' : 'client' );

export const getUser = () => (JSON.parse(localStorage.getItem('userData')));

export const logout = (redirectToLogin) => {
    reduxStore.dispatch(currentUserSet(""));
    localStorage.removeItem('userData');
    if(redirectToLogin){
        browserHistory.push('/login');
    }
};

export const isEmptyObject = (obj) => {
    if(obj == ""){
        return true;
    }
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

export const requireAuth = (nextState, replace) => {
    let user = getUser();
    let response = false;
    if(user){
      reduxStore.dispatch(currentUserSet(user));
      response = true;
    }
    else{
      logout();
    }
    return response;
  }
