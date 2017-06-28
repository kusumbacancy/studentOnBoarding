import React from 'react';
import { browserHistory, Link } from 'react-router';
import { IMAGE_URL, getUserType, logout } from 'Common/globals.jsx';
//import userConnect from 'App/User/userConnect.js';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuArray:[]
        }
    }

    componentWillMount(){
      this.state.menuArray = [
            {
                menu:'Home',
                linkTo: "/dashboard",
              //  imgSrc : IMAGE_URL + 'dashboard-icon.png'
            },
            {
                menu:'Care Plan',
                linkTo: "/logout",
                //imgSrc : IMAGE_URL + 'menu-plan-icon.png'
            }
        ];

    }


    componentDidUpdate() {
    }
    _menuTask(redirectTo){
    //  this._closeNav();
      browserHistory.push(redirectTo);
    }
    render() {
        const { user } = this.props;
        const { menuArray } = this.state;

        return(
            <header>
                {
                    menuArray && menuArray.length>0
                    ?
                    <div id="header-main">
                      <div className="container">
                          <div className="inner-header clear">
                           <nav className="navbar navbar-default">
                              <div className="container-fluid">
                                  <div className="navbar-header">
                                    <a className="navbar-brand" href="#">
                                      <img src={IMAGE_URL + 'logo.svg'} alt="Logo" />
                                    </a>
                                  </div>
                                  {
                                    menuArray.map((item, index) =>
                                    (    <div key={index} className="nav navbar-nav">
                                            <ul>
                                              <li>
                                                <a href="javascript:void(0)" onClick={this._menuTask.bind(this, item.linkTo)}>
                                                  <span>{item.menu}</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                    ))
                                    }
                              </div>
                            </nav>
                           </div>
                        </div>
                    </div>
                    :
                    <div></div>
                }

            </header>
        );
    }
}
export default Header;
//export default userConnect(Header);
