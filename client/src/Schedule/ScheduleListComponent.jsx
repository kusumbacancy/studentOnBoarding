import React from 'react';
import { browserHistory } from 'react-router';
import { Modal, Button, Panel } from 'react-bootstrap';
import { IMAGE_URL } from 'App/Common/globals.jsx';
import scheduleService from 'App/Schedule/scheduleUtill';
import moment from 'moment';

class ScheduleListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: []
        };
        this._submit = this._submit.bind(this);
    }

    componentWillMount(){
      let data = scheduleService.getScheduleList();
      this.setState({
          content: data
      });
    }
    _submit = () => {
          browserHistory.push('/select-interest');
    }

    render() {
        const { content } = this.state;
        return(
           <div>
           <section className="top-slogan clear">
             <div className="container">
                 <p>{moment().format("dddd, D MMMM YYYY")}</p>
               </div>
           </section>

         <section className="video-top">
           <div className="inner-video clear">
                   <div className="container">
                     <div className="row">
                       <div className="col-sm-10">
                           <div className="science-line">Science</div>
                             <div className="time-linemain"><div className="time-linetop">9.30 - 10.15 AM</div></div>
                             <h1>the particle model of matter 2.0</h1>
                             <p>There are solids, liquids, and gases. Solids are the densest because<br /> the molecules are held closely together in a set shape and pattern</p>
                         </div>
                         <div className="col-sm-2 right-video text-center">
                           <p>session starts in</p>
                             <div className="session-time">9:23</div>
                             <span>minutes</span>
                         </div>
                     </div>
                     </div>
                 </div>
                 <a className="play-btn" href="">
                    <img src={IMAGE_URL + 'play.svg'} alt="play" />
                 </a>
         </section>

       <section className="break-wrap">
         <div className="container">
             <div className="row clear">
                 <div className="col-sm-10 col-xs-9">
                     <div className="break-slogan">break</div>
                       <p>10.15 - 10.45 AM</p>
                   </div>
                   <div className="col-sm-2 col-xs-3 text-right start-img">
                     <img src={IMAGE_URL + 'stars.svg'} alt="Stars" />
                   </div>
               </div>
           </div>
       </section>
       <section className="accordian-wrap">
         <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            {
              (Object.keys(content).length > 0) ?
                  Object.keys(content).map((key, index) => (
                      <div key={key}  className="clear">
                            {
                              (content[key].status && content[key].status==="break")?
                                  <section className="break-wrap">
                                    <div className="container">
                                        <div className="row clear">
                                            <div className="col-sm-10 col-xs-9">
                                                  <div className="break-slogan">{content[key].title}</div>
                                                  <p>{content[key].timeRange}</p>
                                              </div>
                                              <div className="col-sm-2 col-xs-3 text-right start-img">
                                                <img src={IMAGE_URL + 'stars.svg'} alt="Stars" />
                                              </div>
                                          </div>
                                      </div>
                                  </section>
                                  :
                                  <div className="panel panel-default">
                                        <div className={"panel-heading "+content[key].className} role="tab" id="headingOne">
                                            <div className="container">
                                              <h3 className="panel-title">
                                                  <span>{content[key].title}</span>
                                                  <p>{content[key].shortDesc}</p>
                                                  <p><strong>{content[key].timeRange}</strong></p>
                                                  <a role="button"
                                                    onClick={ ()=> {content[key].collapsible = !content[key].collapsible; this.setState({content:content});} }
                                                     aria-expanded="false" aria-controls={"collapse"+content[key].id}
                                                     className="accr-btn collapsed">
                                                    {
                                                      content[key].collapsible?
                                                      <i className="more-less glyphicon-minus-sign"></i>
                                                      :
                                                      <i className="more-less glyphicon-plus-sign"></i>
                                                    }
                                                   </a>
                                              </h3>
                                            </div>
                                        </div>
                                        <div id={"collapse"+content[key].id}
                                        className={content[key].collapsible?"panel-collapse collapse in":"panel-collapse collapse "} role="tabpanel" aria-labelledby="headingOne" aria-expanded="false" >
                                          <div className="container">
                                            <div className="row">
                                              <div className="panel-body">
                                                <p>{content[key].desc}</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                  </div>
                                }
                          </div>
                          )
                        )
                        :
                        <div>
                            <h2>No Schedule Available.</h2>
                        </div>
                    }
                  </div>
              </section>

            </div>
        );
    }
}
export default ScheduleListComponent;
