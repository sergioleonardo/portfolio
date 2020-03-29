import React from "react"
import PropTypes from "prop-types"
import "./project.css"

const Project = ({ name, image, type, description, gitLink, demo }) => {

let projectPath = "/"+ name.toLowerCase()

return (
    <>
      <div className="project">
        <img src={image} class="project-img" alt="Logo or Demo of current project"></img>
        <div>
          <h3>{name}</h3>
          <h5>{type}</h5>
          <p>{description}
          <br/>
          <a href={projectPath} className="read-more">Read More</a>
          <br/>
          <br/>
          </p>
          <a href={gitLink}>Repository</a>
          <a href={demo}>Live Demo</a>
        </div>
      </div>
    </>
  )
}


Project.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  gitLink: PropTypes.string,
  demo: PropTypes.string
}


export default Project