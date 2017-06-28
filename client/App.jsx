import React,{Component} from 'react';
import IsLoadingContent from 'App/Common/Elements/Loader/IsLoadingContent';

class App extends Component{
    render(){
        const { header, component, footer } = this.props;
        return(
            <div>
                <IsLoadingContent />
                <div className="header">
                    {header}
                </div>
                <div className="page-content">
                   <div className="row">
                        <div className="col-md-10">
                            {component}
                        </div>
                    </div>
                </div>
                <footer>
                  {footer}
                </footer>
            </div>
        );
    }
}

export default App;
