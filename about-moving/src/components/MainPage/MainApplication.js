import React, {Component}  from 'react';
import {Link} from 'react-router';


const MainApplication = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <h2>Lets start the journey into the app</h2>
                <Link className="btn mosh-btn" to="/application/residence-type">Start</Link>
            </div>
        </div>
    )
}


export default MainApplication;