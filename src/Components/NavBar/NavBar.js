import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import { Link } from "react-scroll";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <img className="navbar-logo" src="/images/tusia2.png" alt="" />

          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul
            onClick={this.handleClick}
            className={this.state.clicked ? "nav-menu active" : "nav-menu"}
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={this.handleClick}
                    smooth={true}
                    className={item.cName}
                    to={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="Icons"></div>
        </nav>
      </>
    );
  }
}

export default Navbar;
