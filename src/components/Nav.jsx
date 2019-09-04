import React from "react";
import { NavLink } from "react-router-dom";


class Nav extends React.Component {
  link = e => {
    this.props.onClick(e.target.innerText);
  };
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/hairstyles" onClick={this.link}>
              Hairstyles
            </NavLink>
          </li>
          <li>
            <NavLink to="/gymnastics" onClick={this.link}>
              Gymnastics
            </NavLink>
          </li>
          <li>
            <NavLink to="/cruises" onClick={this.link}>
              Cruises
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
