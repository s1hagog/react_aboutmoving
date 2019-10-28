import React, { Component } from 'react';
import {Link} from 'react-router';
import 'bootstrap/js/dist/dropdown';


const MenuDropdown = (props) => {
    switch(props.dropdownMenu){
        case 'moving':
            return(
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to="/moving/average-times">Average Times</Link>
                    <Link className="dropdown-item" to="/moving/how-many-people">How many people</Link>
                </div>
            );
        case 'packing':
            return(
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to="/packing/how-to-pack">How to pack</Link>
                    <Link className="dropdown-item" to="/packing/buy-boxes-or-no">Buy boxes or no</Link>
                </div>
            );
    }
}

export default MenuDropdown;