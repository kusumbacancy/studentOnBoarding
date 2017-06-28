import React from 'react';
import { IMAGE_URL, isEmptyObject } from 'App/Common/globals.jsx';
import loaderConnect from 'Common/Elements/Loader/loaderConnect.js';

class IsLoadingContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
       const { showPageLoading } = this.props;
         return(
                <div>
                    {
                      showPageLoading ?
                      <section>
                          <div className="record-not-added-yet">
                              <div className="container">
                                  <div className=" text-center clear">
                                       <img className="is-loading-icon" src={IMAGE_URL + 'ajax-loader.gif'} alt="Loading" />
                                    </div>
                              </div>
                          </div>
                      </section>
                    :
                    ""
                  }

                </div>
                            );
                }
    }
export default loaderConnect(IsLoadingContent);
