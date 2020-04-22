import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "./navbar.js"


const Layout = ({ children }) => {

  return (
    <>
      <NavBar/>
        <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
