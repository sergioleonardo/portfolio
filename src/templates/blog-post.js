import React from 'react'
import Layout from '../components/layout'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from 'gatsby'
import "./blog-post.css"

export default function Template({data}) {
    const post = data.markdownRemark

    return (
        <Layout>
            <div className="blog-post">
            <AniLink swipe to="/blog">Go back</AniLink>
                <hr />
                <h1>{post.frontmatter.title}</h1>
                <h4>Posted By {post.frontmatter.author} on {post.frontmatter.date}</h4>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
            </div>
        </Layout>
    )
}

export const postQuery=graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`