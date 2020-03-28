import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/icon.png'
import "./navbar.css"


const NavBar = () => (
    <div className="nav" id="myTopnav">
        <Link to="/"><img src={Logo} className="logo" alt="logoo"/></Link>
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
    </div>
)

export default NavBar;
