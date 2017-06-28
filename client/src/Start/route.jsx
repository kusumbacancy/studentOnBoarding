// login Routes.js
import { React, Router, Route,Header, Footer } from 'App/libraries';
import Start from 'App/Start/startView.jsx';
import SelectAvatar from 'App/Start/SelectAvatarComponent';
import SelectInterest from 'App/Start/SelectInterestComponent';
import Alef from 'App/Start/AlefComponent';
import { requireAuth } from 'App/Common/globals.jsx';

const loginRoutes = (
  <Route>
    <Route path="/start"  components={ {component : Start}}  onEnter={requireAuth.bind({"setTitle": 'Start'})}/>
    <Route path="/select-avatar"  components={ {component : SelectAvatar}}  onEnter={requireAuth.bind({"setTitle": 'Select Avatar'})}/>
    <Route path="/select-interest"  components={ {component : SelectInterest}}  onEnter={requireAuth.bind({"setTitle": 'Select Interests'})}/>
    <Route path="/alef"  components={ {component : Alef}}  onEnter={requireAuth.bind({"setTitle": 'Alef'})}/>
  </Route>
)

export default loginRoutes;
