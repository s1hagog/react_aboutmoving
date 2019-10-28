import React, { Component } from 'react';
import {Link} from 'react-router';
import 'bootstrap/js/dist/dropdown';


import MenuDropdown from './MenuDropdown';

// export default class MenuItem extends Component {
//     render() {
//         return (
//             <li className={this.props.active ? 'nav-item active' : 'nav-item'}>
//                 <Link className="nav-link" to={this.props.href}>
//                     {this.props.children}
//                 </Link>
//             </li>
//         )
//     }
// }

const MenuItem = (props) => {
    const addClassName = () => {
        let className = 'nav-item';
        if(props.dropdown){
            className += ' dropdown';
        }
        if(props.active){
            className += ' active';
        }
        return className;
    }

    if(props.dropdown){
        return (
            <li className={addClassName()}>
                <Link className="nav-link dropdown-toggle" to={props.href} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.children}
                </Link>
                <MenuDropdown dropdownMenu={props.dropdownMenu}/>
            </li>
        )
    }else{
        return (
            <li className={addClassName()}>
                <Link className="nav-link" to={props.href}>
                    {props.children}
                </Link>
            </li>
        )
    }
}

export default MenuItem;
