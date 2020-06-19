import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"
import Hero from "../images/hero.jpg"
import github from "../icons/Github.svg"
import linkedin from "../icons/Linkedin.svg"
import mail from "../icons/Mail.svg"
import resume from "../icons/resume.svg"

import ReactGA from "react-ga"
ReactGA.initialize("UA-170070968-1")
ReactGA.pageview(window.location.pathname + window.location.search)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="section">
      <div className="section-left">
        <img
          src={Hero}
          className="hero ll-image"
          alt="hero"
          data-image-full={Hero}
        />
      </div>
      <div className="section-right">
        <div className="home-info">
          <h1>
            Sergio <br /> Garcia Perez
          </h1>
          <p>
            Software Developer //
            <br />
            Technical PM{" "}
          </p>
          <ul className="contact">
            <li>
              <a
                href="https://github.com/sergioleonardo"
                className="contact-icon"
                rel="opener"
              >
                <img className="icon" src={github} alt="Github Icon"></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sergio-garcia-perez-02b85b103/"
                className="contact-icon"
                rel="opener"
              >
                <img className="icon" src={linkedin} alt="LinkedIn Icon"></img>
              </a>
            </li>
            <li>
              <a
                href="../resume/Sergio_Garcia_Resume.docx"
                className="contact-icon"
                download
              >
                <img className="icon" src={resume} alt="Resume Icon"></img>
              </a>
            </li>
            <li>
              <a
                href="mailto:sergiogarciajr@icloud.com"
                className="contact-icon"
                rel="opener"
              >
                <img className="icon" src={mail} alt="Mail Icon"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* <section>
      <div className="about">
        <h1>About</h1>
      </div>
      <div className="Experience">
      <h1>Experience</h1>
      </div>
    </section> */}
  </Layout>
)

export default IndexPage
