// login Routes.js
import { React, Router, Route,Header, Footer } from 'App/libraries';
import Schedule from 'App/Schedule/scheduleView.jsx';
import { requireAuth } from 'App/Common/globals.jsx';

const ScheduleRoutes = (
  <Route>
    <Route path="/schedule"  components={ {component : Schedule}}  onEnter={requireAuth.bind({"setTitle": 'Schedule'})}/>
  </Route>
)

export default ScheduleRoutes;
