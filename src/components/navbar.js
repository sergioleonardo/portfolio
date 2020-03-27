import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/icon.png'
import "./navbar.css"

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


const NavBar = () => (
    <div className="nav" id="myTopnav">
        <Link to="/"><img src={Logo} className="logo" alt="logoo"/></Link>
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="javascript:void(0);" class="nav-icon" onclick="myFunction()">
                <img></img>
            </a></li>
        </ul>
    </div>
)

export default NavBar;
