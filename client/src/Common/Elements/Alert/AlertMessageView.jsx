import React, {Component} from "react";
import {connect} from "react-redux";
import alertMessageConnect from 'Alert/alertMessageConnect.js';
import { isEmptyObject } from 'Common/globals';

class AlertMessageView extends Component {
   state = {
            isAlertOpen: false,
            alertMessage: ''
        };
    postMessage = (message) => {
        this.setState({
            alertMessage: message,
            isAlertOpen: true
        });

    };
    componentWillReceiveProps({manageAlertMessage}) {
         const {removeAlertMessage} = this.props;
         let lastCall = -1;
       if (manageAlertMessage) {
                this.postMessage(manageAlertMessage);
                clearTimeout(lastCall);
                lastCall = setTimeout(function() {
                removeAlertMessage();
           }.bind(this), 3000);
        }
    }
    render() {
            let messagesDom = this.state.alertMessage;
             return (
                    <div className={"redux-toastr top-right " + (this.state.isAlertOpen ? 'show' : 'hidden')}>
                             {
                                 !isEmptyObject(messagesDom)?
                                      <div className={"toastr animated "+messagesDom.type}>
                                                <div className="toastr-middle-container">
                                                    <div className="message" >
                                                        {messagesDom.message}
                                                    </div>
                                                </div>
                                            </div>
                                 :""
                             }
                     </div>
             );
           }
}
export default alertMessageConnect(AlertMessageView);
