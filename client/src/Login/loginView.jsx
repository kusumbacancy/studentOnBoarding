import React from 'react';
import { Link, browserHistory } from 'react-router';
import loginService from 'App/Login/loginUtill.jsx';
import { IMAGE_URL } from 'App/Common/globals.jsx';
import LoginFormComponent from 'App/Login/LoginFormComponent.js';
import userConnect from 'App/User/userConnect.js';
import alertMessageConnect from 'Alert/alertMessageConnect.js';
class Login extends React.Component {
   constructor(props){
      super(props);
      this.state = {
          disableButton:false
      };
      this._submit = this._submit.bind(this);

   }
   _submit = (values) => {
        const { displayAlertMessage } = this.props;
        if(!values.username || !values.password){
          displayAlertMessage({"message":"Please fill all fields.","type":"error"});
        }
        else{
          let userData = {username:values.username};
          localStorage.setItem('userData', JSON.stringify(userData));
          displayAlertMessage({"message":"Logged in successfully.","type":"success"});
          browserHistory.push('/start');
        }
    }
   render() {
     const {  disableButton } = this.state;
      return (
            <div className="container">
                  <div className="login-box text-center">
                      <div className="logo-login">
                          <a href="#" className="logo-top">
                            <img src={IMAGE_URL + 'logo.svg'} alt="Logo" />
                          </a>
                      </div>
                      <LoginFormComponent
                        onSubmit={this._submit}
                        disableButton={disableButton}
                      />
                  </div>
              </div>
      );
   }
}
export default alertMessageConnect(userConnect(Login));
