import React from "react"
import PropTypes from "prop-types"
import "./layout.css"


const Project = ({ name, image, gitLink, demo }) => {
  return (
    <>
        <div>
            <img src={image} class="project-img"></img>
            <div>
                <h3>{name}</h3>
                <a href={gitLink}>Repository</a>
                <a href={demo}>Live Demo</a>
                
            </div>
        </div>
    </>
  )
}

Project.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Project