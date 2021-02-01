import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './NavBar.css';
import { Link, animateScroll as scroll } from "react-scroll";
import Hero from '../Pages/Hero';

class Navbar extends Component {
    state = { clicked: false }


    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems" >

                <div className="Image" key="1">
                    <img className="navbar-logo" src="/images/tusia2.png" alt="" />
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul onClick={this.handleClick} className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link onClick={this.handleClick} smooth={true} className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>

                                </li>
                   
                        )
                    })}
                </ul>
                <div className="Icons">
                    
                </div>
            </nav>
        );
    }
}

export default Navbar;