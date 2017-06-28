// login Routes.js
import { React, Router, Route,Header, Footer } from 'App/libraries';
import Login from 'App/Login/loginView.jsx';
import { requireAuth } from 'App/Common/globals.jsx';

const loginRoutes = (
  <Route>
    <Route path="/"  components={ {component : Login}}  onEnter={requireAuth.bind({"setTitle": 'Login'})}/>
    <Route path="/login"  components={ {component : Login}}  onEnter={requireAuth.bind({"setTitle": 'Login'})}/>
  </Route>
)

export default loginRoutes;
