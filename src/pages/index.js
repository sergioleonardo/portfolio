import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"
import Hero from "../images/hero.jpg"
import github from "../icons/Github.svg"
import linkedin from "../icons/Linkedin.svg"
import mail from "../icons/Mail.svg"
import resume from "../icons/resume.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <section>
      <div className="section-left">
        <img src={Hero} className="hero" alt="hero"/>
      </div>
      <div className="section-right">
        <div className="home-info">
          <h1>Sergio <br/> Garcia Perez</h1>
          <p>Software Developer</p>
            <ul className="contact">
              <li>
                <a href="https://github.com/sergioleonardo" className="contact-icon" rel="opener">
                  <img className="icon" src={github}></img>
                  <p>Github</p>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sergio-garcia-perez-02b85b103/" className="contact-icon" rel="opener">
                  <img className="icon" src={linkedin}></img>
                  <p>Linkedin</p>
                </a>
              </li>
              <li>
                <a href="../resume/Sergio_Garcia_Resume.docx" className="contact-icon" download>
                  <img className="icon" src={resume}></img>
                  <p>Resume</p>
                </a>
              </li>
              <li>
                <a href="mailto:sergiogarciajr@icloud.com" className="contact-icon" rel="opener">
                  <img className="icon" src={mail}></img>
                  <p>Mail</p>
                </a>
              </li>
            </ul>
        </div>
      </div>
    </section>
    <section>
      <div className="about">

      </div>
      <div className="Experience">

      </div>
    </section>
  </Layout>
)

export default IndexPage
