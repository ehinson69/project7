import React from "react";
import { NavLink } from 'react-router-dom';
 //linking navigation tabs
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
           
                <li> 
                    <NavLink to="/flowers">Flowers</NavLink>
                </li>
                <li>
                    <NavLink to="/rose flowers">Rose</NavLink>
                </li>
                <li>
                    <NavLink to="/tulip flowers">Tulip</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;