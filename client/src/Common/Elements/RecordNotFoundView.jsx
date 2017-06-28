import React from 'react';

class RecordNotFound extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <section>
                <div id="careplan">
                    <div className="container">
                        <div className=" inner-notes text-center clear">
                            <h2 className="record-not-found-heading">Record Not Found</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default RecordNotFound;
    
    
    