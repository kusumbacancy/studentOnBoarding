import React,{Component} from 'react';
import IsLoadingContent from 'App/Common/Elements/Loader/IsLoadingContent';
import AlertMessageView from 'Alert/AlertMessageView';

class App extends Component{
    render(){
        const { header, component, footer } = this.props;
        return(
            <div>
                <AlertMessageView />
                <IsLoadingContent />
                <div className="header">
                      {header}
                </div>
                <div className="page-content">
                      {component}
                </div>
                <footer>
                     {footer}
                </footer>
            </div>
        );
    }
}

export default App;
