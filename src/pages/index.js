import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home" style={{
          height: '100vh',
          zIndex: '1'
        }}>

    </section>
    {/* <Hero className="hero" /> */}
    <Link to="/about/">Go to about</Link>
  </Layout>
)

export default IndexPage
