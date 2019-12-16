import React, {Component} from 'react';
import MainHeadline from '../components/MainPage/MainHeadline';
import MainApplication from '../components/MainPage/MainApplication';

export default class Main extends Component{
    render(){
        return(
            <>
                <MainHeadline/>
                <MainApplication/>
            </>
        )
    }
}

//Not anymore dumb component

// const Main = (props) => {
//     return (
//         <div>
//             <h1>Welcome to About Moving</h1>
//             <p>That's going to be an awesome blog about proper preparations for moving</p>
//         </div>
//     )
// }

// export default Main;