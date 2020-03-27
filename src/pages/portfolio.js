import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"
import "./portfolio.css"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio"/>
    <section className="Portfolio">
      <h1>Portfolio</h1>
      <br/>
      <div className="projects-container">
        <Project/>
        <Project/>
        <Project/>

      </div>
    </section>
  </Layout>
)

export default Portfolio
