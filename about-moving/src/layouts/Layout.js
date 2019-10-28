import React from 'react';
// import {Link} from 'react-router';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';


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
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActiveMain('/')}>Main</MenuItem>
                    <MenuItem href="/moving" active={this.isActiveMain('moving')} dropdown dropdownMenu="moving">Moving</MenuItem>
                    <MenuItem href="/users" active={this.isActive('users')} dropdown dropdownMenu="packing">Packing</MenuItem>
                    <MenuItem href="/posts" active={this.isActive('posts')}>Cases</MenuItem>
                    <MenuItem href="/comments" active={this.isActive('comments')}>Calculator</MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    &copy; About Moving 2019
                    <pre>Developed by Alexander Moshak</pre>
                </div>
            </>
        );
    }
}