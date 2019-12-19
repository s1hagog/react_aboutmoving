import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Q1ResidenceTypeMain extends Component {
    render() {
        return (
            <div>
                <div className="radio">
                    <label><input type="radio" name="optradio"/>House</label>
                </div>
                <div className="radio">
                    <label><input type="radio" name="optradio"/>Apartment</label>
                </div>
                <div className="radio">
                    <label><input type="radio" name="optradio"/>Townhouse</label>
                </div>
                <div className="radio">
                    <label><input type="radio" name="optradio"/>Basement</label>
                </div>
                <div className="radio">
                    <label><input type="radio" name="optradio"/>Storage</label>
                </div>
                <div>
                    <Link className="btn mosh-btn" to="/application/amount-of-bedrooms">Next</Link>
                </div> 
            </div>
        )
    }
}
