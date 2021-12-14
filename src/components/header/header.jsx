import React, { Component } from "react";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="nav-container">                   
                    <button className="active">Women</button>
                    <button>Men</button>
                    <button>Kids</button>
                </div>
                <div className="icon-container">
                    <img src='/images/brand-icon.png' alt="brand-icon"/>
                </div>
                <div className="checkout-container">
                    <select id="checkout-dropdown"name="currency">
                        <option value="$">$</option>
                        <option value="EUR">EUR</option>
                        <option value="RON">RON</option>
                    </select>
                    <img className="checkout-img" src="/images/empty-cart.png" alt="empty-cart"/>
                </div>
            </div>
        );
    }
}

export default Header;

