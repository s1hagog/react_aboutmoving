import React, {Component} from 'react';

export default class Application extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                <div className="row">
                    <div className="col-12">
                        <h1>Here is the application</h1>
                    </div>
                </div>
            </>
        );
    }
}