import React from 'react';
import { browserHistory,Link } from 'react-router';

class NotFound extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
           <div className="login-main">
        	      <div className="loginform clear">
                    <form ref="loginForm">
                        <div className="logininput">
                            <h1>Page Not Found</h1>
                        </div>

                        <div className="forgotpass">
                            <a href="/" className="pull-left">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default NotFound;
