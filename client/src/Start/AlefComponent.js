import React from 'react';
import { browserHistory } from 'react-router';
import { IMAGE_URL } from 'App/Common/globals.jsx';
import { socketConnect } from 'socket.io-react';

class Alef extends React.Component {

    constructor(props) {
        super(props);
        this._submit = this._submit.bind(this);
    }

    _submit = () => {
          browserHistory.push('/schedule');
    }

    render() {
        return(
           <div>
             <div className="container">
                  <div className="text-center">
                      <div className="clear">
                            <img src={IMAGE_URL + 'step3.png'} alt="Logo" />
                      </div>
                      <button onClick={this._submit} >Skip this step</button>
                      <div className="height-30"></div>
                  </div>
              </div>
            </div>
        );
    }
}
export default socketConnect(Alef);
