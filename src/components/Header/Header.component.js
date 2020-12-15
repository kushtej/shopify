import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../logo.svg';
import './Header.css';

export class Header extends Component {

    constructor(props) {
        super(props)
    }

    routes = () => {
        return(
        <>
            <Link to="/">
                    <img className="img-responsive" width="5%" height="5%" src={logo} alt="logo" />
            </Link>
            <Link to="/">Home </Link>
            <Link to="/products">Our Products</Link>
            <Link to="/about">About </Link>
            <Link to="/contact">Contact Us </Link>
            <Link to="/privacy">Our Privacy Policy </Link>
            <Link to="/addcart">
            <span>
                <i id="count" class="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            </Link>
        </>)
    }

    render() {
        return (
            <div className="header-container">
                {this.routes()}
            </div>
        )
    }

}

export default Header;
