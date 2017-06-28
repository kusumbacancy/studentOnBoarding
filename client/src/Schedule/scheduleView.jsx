import React from 'react';
import { browserHistory } from 'react-router';
import { IMAGE_URL } from 'App/Common/globals.jsx';
import { socketConnect } from 'socket.io-react';
import ScheduleListComponent from 'App/Schedule/ScheduleListComponent';
import TimeNotMatchModal from 'App/Schedule/TimeNotMatchModal';
import loaderConnect from 'Common/Elements/Loader/loaderConnect';
import scheduleConnect from 'App/Schedule/scheduleConnect';
import moment from 'moment';

class Schedule extends React.Component {
   constructor(props){
      super(props);
      this._submit = this._submit.bind(this);
   }

    componentWillMount(){
      this.checkTime();
    }
    checkTime(){
      const { socket, setPageLoading, setScheduleState, showScheduleState } = this.props;

      setPageLoading(true);
      setScheduleState(false);
      let time = "2017-06-27 18:24:50";
      time = moment().format("YYYY-MM-DD HH:mm:ss");
      socket.emit('synch-time', time);
      socket.on('synch-time', function(synchRequestData) {
        setPageLoading(false);
        setScheduleState(synchRequestData);
      });

    }

    _submit = () => {
          browserHistory.push('/select-avatar');
    }
   render() {
     const { showScheduleState, showPageLoading } = this.props;
      return (
            <div className="clear">
                  {
                    showScheduleState && !showPageLoading?
                    <ScheduleListComponent />
                    :
                    !showPageLoading?
                    <TimeNotMatchModal />
                    :""
                  }
              </div>
      );
   }
}
export default scheduleConnect(socketConnect(loaderConnect(Schedule)));
