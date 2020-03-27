import React from "react"
import PropTypes from "prop-types"
import "./project.css"
import placeholder from "../images/BlankProjects.jpg"

// const Project = ({ name, image, description, gitLink, demo }) => {
//   return (
//     <>
//       <div className="project">
//           <img src={image} class="project-img"></img>
//           <div>
//               <h3>{name}</h3>
//                  <h5>{Type}</h5>
//               <p>{description}</p>
//               <a href={gitLink}>Repository</a>
//               <a href={demo}>Live Demo</a>
//           </div>
//       </div>
//     </>
//   )
// }

const Project = () => {
  return (
    <>
      <div className="project">
          <img src={placeholder} className="project-img" alt="Project"></img>
          <div>
              <h3>Tabulate</h3>
              <h5>Chrome Extension</h5>
              <p>Google chrome Extension to manage tabs</p>
              <a href='https://www.google.com/'>Repository</a>
              <a href='https://www.google.com/'>Live Demo</a>
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