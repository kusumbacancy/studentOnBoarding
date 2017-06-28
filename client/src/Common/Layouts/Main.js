import React from 'react';
import userConnect from 'App/Common/reduxCall/userConnect.js';
import clientConnect from 'App/Common/reduxCall/clientConnect.js';

class TopHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount(){
       //console.log('in top header');
    }

    render() {
        return(
            <div>
                <section>
                    <div id="notesslogen">
                        <div className="container">
                            <div className="inner-notes text-center dashboard-title clear">
                                <h2 style={{marginBottom:0}}>Top Header</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        No Record Found.
                    </div>
                </section>
            </div>
        );
    }
}
export default userConnect(clientConnect(TopHeader));
