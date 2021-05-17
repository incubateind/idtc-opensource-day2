import React from 'react';
import "./NavBar.css"
import profileimg from './profile.svg';
import {NavLink} from "react-router-dom";


function NavBar(){
    return(
        <div className="NavBar">

            <nav className="nav">
                <div className="profile">
                    <img src={profileimg} width={200} alt=""/>

                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2021, Parth's Cypher
                    </p>
                </footer>
            </nav>

        </div>
    );
}

export default NavBar;