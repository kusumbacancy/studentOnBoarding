import React from 'react';
import { IMAGE_URL } from 'App/Common/globals.jsx';
import { socketConnect } from 'socket.io-react';
import debbieConnect from 'Debbie/debbieConnect';

class Debbie extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content:""
        };
        this._getServerMessage();
    }

    _getServerMessage(){
      const that = this;
      const { socket, setDebbieMessage, showDebbieMessage } = this.props;
      socket.on('actions-message', function(synchRequestData) {
            /*setTimeout(() => {

            }, 1000);*/
            setDebbieMessage(synchRequestData);
      });
    }

    render(){
       const { footerDabee, showDebbieMessage } = this.props;

        return(
           <div className={footerDabee?"footer-dabee":"clear"}>
              <div className="debbie-main">
                        <a href="#" className="logo-top">
                          <img src={IMAGE_URL + 'debbie.gif'} alt="Debbie" />
                        </a>
                        <div className="debbie-content">
                          {showDebbieMessage}
                        </div>
                </div>
            </div>
        );
    }
}
export default socketConnect(debbieConnect(Debbie));
