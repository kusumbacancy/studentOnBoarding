import axios from 'axios';
import { browserHistory } from 'react-router';
import { BASE_URL,getUser} from 'App/Common/globals.jsx';

const loginService= {
    loginUser: function(data){
        return axios({
            method: 'POST',
            url: BASE_URL + 'auth/login',
            data: data,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin':'*'
               },
        });
    }
}
module.exports = loginService;
