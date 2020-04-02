import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from '../images/icon.png'
import "./navbar.css"


const NavBar = () => (
    <div className="nav" id="myTopnav">
        <AniLink cover to="/" bg="#6F9ADE"><img src={Logo} className="logo" alt="SGP"/></AniLink>
        <ul className="menu">
            <li><AniLink cover to="/" bg="#6F9ADE">Home</AniLink></li>
            <li><AniLink cover to="/portfolio" bg="#6F9ADE">Portfolio</AniLink></li>
            <li><AniLink cover to="/blog" bg="#6F9ADE">Blog</AniLink></li>
        </ul>
    </div>
)

export default NavBar;
