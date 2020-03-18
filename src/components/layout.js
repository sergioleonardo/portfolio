
import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "./navbar.js"


const Layout = ({ children }) => {

  return (
    <>
      <NavBar/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with Gatsby
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
