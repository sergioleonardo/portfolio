import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import "./blog.css"

const BlogPage = ({data}) => (
  <Layout>
    <div className="blog-page">
            <h1>Blog</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <small> posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                    <br/>
                    <br/>
                    <Link to={post.node.frontmatter.path}>Read More</Link>
                    <br />
                    <br/>
                    <hr/>
                </div>
            ))}
        </div>
  </Layout>
)
        

export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark {
              edges {
                node {
                    id
                  frontmatter {
                    path
                    title
                    date
                    author
                  }
                }
              }
            }    
    }
` 

export default BlogPage
