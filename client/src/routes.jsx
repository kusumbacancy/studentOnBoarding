import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, DefaultRoute, Redirect, IndexRoute} from 'react-router';
import reduxStore from 'Redux/store.js';
import App from 'App/App.jsx';
import LoginRoutes from 'App/Login/route.jsx';
import StartRoutes from 'App/Start/route.jsx';
import ScheduleRoutes from 'App/Schedule/route';
import Header from 'Common/Layouts/Header.js';
import Footer from 'Common/Layouts/Footer.js';
import NotFound from 'Common/Layouts/NotFound.js';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import { SOCKET_HOST } from 'Common/globals.jsx';

const socket = io.connect(SOCKET_HOST);
const siteTitle = 'Student On Boarding';

class Routers extends React.Component {

    render(){
        return(
          <Provider store={reduxStore}>
            <SocketProvider socket={socket}>
                <Router history={browserHistory} store={reduxStore}>
                    <Route component={App} >
                      {LoginRoutes}
                      {ScheduleRoutes}
                      {StartRoutes}
                    </Route>
                    <Route path="*" component={NotFound} />
                </Router>
              </SocketProvider>
          </Provider>
        );
    };
}
export default Routers;
