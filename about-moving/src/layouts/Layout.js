import React from 'react';
// import {Link} from 'react-router';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Footer from '../components/Footer';


export default class Layout extends React.Component{
    constructor(props){
        super(props);

        this.brand = 'About Moving';

    }

    isActiveMain(href) { 
        return window.location.pathname == href;
    }

    isActive(href) {
        return window.location.pathname.includes(href);
    }

    render(){
        return(
            <>
                <div id="preloader">
                    <div className="mosh-preloader"></div>
                </div>
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActiveMain('/')}>Main</MenuItem>
                    <MenuItem href="/moving" active={this.isActiveMain('moving')} dropdown dropdownMenu="moving">Moving</MenuItem>
                    <MenuItem href="/users" active={this.isActive('users')} dropdown dropdownMenu="packing">Packing</MenuItem>
                    <MenuItem href="/posts" active={this.isActive('posts')}>Cases</MenuItem>
                    <MenuItem href="/comments" active={this.isActive('comments')}>Calculator</MenuItem>
                </Menu>
                <div className="container">
                    {this.props.children}
                </div>
                <Footer></Footer>
            </>
        );
    }
}