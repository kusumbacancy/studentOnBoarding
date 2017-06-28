import React from 'react';
import { browserHistory } from 'react-router';
import { IMAGE_URL } from 'App/Common/globals.jsx';
import { socketConnect } from 'socket.io-react';
import Debbie from 'Debbie/Debbie';


class SelectInterest extends React.Component {

    constructor(props) {
        super(props);
        this._submit = this._submit.bind(this);
    }

    componentWillMount(){
          const { socket } = this.props;
          socket.emit('actions-message', "choose-interest");
    }
    _submit = () => {
          browserHistory.push('/alef');
    }

    render() {
        return(
           <div>
             <div className="container">
                  <div className="text-center">
                      <div className="clear">
                            <img src={IMAGE_URL + 'step2.jpg'} alt="Logo" />
                      </div>
                      <button onClick={this._submit} >Next</button>
                      <div className="height-30"></div>
                  </div>
              </div>
              <Debbie footerDabee="true"  />
            </div>
        );
    }
}
export default socketConnect(SelectInterest);
