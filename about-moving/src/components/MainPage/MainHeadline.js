import React, {Component} from 'react';

import bgImg from '../../img/bg-img/welcome-bg.png';

const MainHeadline = (props) => {
    return (
        <div className="row" style={{backgroundImage: 'url("' + bgImg + '")'}}>
            <div className="col-12">
                <h1>Welcome to About Moving</h1>
                <p>That's going to be an awesome blog about proper preparations for moving</p>
            </div>
        </div>
    )
}

export default MainHeadline;