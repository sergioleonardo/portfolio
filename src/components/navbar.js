import React from 'react'
import { Link } from 'gatsby'
import "./navbar.css"

const NavBar = () => (
        <div className="nav">
            <Link to="/">logo</Link>
            <ul className="menu">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    )

export default NavBar;
