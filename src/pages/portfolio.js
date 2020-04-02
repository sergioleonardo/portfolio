import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"
import "./portfolio.css"

//Project Imports
// { name, image, type, description, gitLink, demo }
import placeholder from "../images/BlankProjects.jpg"


const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio"/>
    <section className="Portfolio">
      <h1>Portfolio</h1>
      <br/>
      <div className="projects-container">
        <Project name="Tabulate" image="https://sergioportfolio.blob.core.windows.net/portfolioimages/POPUP.png" type="Extension" description="Tab manager built with JS that allows users to save sessions for further use." gitLink="https://github.com/JeremyTsaii/Tabulate" demo="https://chrome.google.com/webstore/detail/tabulate/hbabjcmngkoppjaibgbpdbbcfhhmakmo?hl=en-US"/>
      </div>
    </section>
  </Layout>
)

export default Portfolio
