import React from 'react';
import { browserHistory } from 'react-router';
import { IMAGE_URL } from 'App/Common/globals.jsx';
import { Modal, Button } from 'react-bootstrap';

class TimeNotMatchModal extends React.Component{
    constructor(props){
        super(props);
        this._submit = this._submit.bind(this);
    }
    _submit = () => {
          browserHistory.push('/login');
    }
    render(){
        return(
          <div className="container">
                <div className="login-box text-center">
                    <div className="logo-login">
                        <a href="#" className="logo-top">
                          <img src={IMAGE_URL + 'logo.svg'} alt="Logo" />
                        </a>
                    </div>
                    <div className="modal-backdrop fade in"></div>
                    <div className="static-modal">
                      <Modal.Dialog>
                        <Modal.Header>
                          <Modal.Title>Please Sync Time</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                          Your system time is not synced with the server.
                        </Modal.Body>

                        <Modal.Footer>
                          <Button onClick={this._submit}>Logout</Button>
                        </Modal.Footer>

                      </Modal.Dialog>
                    </div>
                </div>
          </div>
        );
    }
}
export default TimeNotMatchModal;
