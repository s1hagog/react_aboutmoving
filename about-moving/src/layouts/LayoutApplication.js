import React from 'react';


export default class Layout extends React.Component{
    constructor (props){
        super(props);
    }
    
    render(){
        return(
            <>
                <div id="preloader">
                    <div className="mosh-preloader"></div>
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </>
        );
    }
}