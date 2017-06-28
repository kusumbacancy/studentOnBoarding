import React from 'react';
import { Link, browserHistory } from 'react-router';
import { IMAGE_URL } from 'App/Common/globals.jsx';
import { socketConnect } from 'socket.io-react';
import userConnect from 'App/User/userConnect';
import Debbie from 'Debbie/Debbie';

class Start extends React.Component {
   constructor(props){
      super(props);
      this._submit = this._submit.bind(this);
   }
    componentWillMount(){
      const { socket } = this.props;
      socket.emit('actions-message', "welcome");
    }

    _submit = () => {
          browserHistory.push('/select-avatar');
    }
   render() {
      const { user } = this.props;
      return (
            <div className="container">
                  <div className="login-box text-center">
                      <div className="logo-login">
                          <a href="#" className="logo-top">
                            <img src={IMAGE_URL + 'logo.svg'} alt="Logo" />
                          </a>
                      </div>
                      <div className="debbie-content-start">
                        <h2><b>Hello {user.username}!</b></h2>
                        <Debbie  />
                        <button onClick={this._submit} >Let's Go!!!</button>
                      </div>

                  </div>
              </div>
      );
   }
}
export default socketConnect(userConnect(Start));
