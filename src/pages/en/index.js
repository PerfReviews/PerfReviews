import React from "react"
import { Link, graphql } from "gatsby"
import PostExtract from "../../components/post-extract"
import Layout from "../../components/layout"

import SEO from "../../components/seo"
import { rhythm } from "../../utils/typography"

class Reviews extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const tools = data.tools.edges
    const blog = data.blog.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="El mejor contenido sobre web performance en español" />
        <h2>Recent Posts</h2>
        {blog.filter(p => p.node.fields.slug.indexOf('/en/') !== -1).map(({ node }) => <PostExtract post={node} />)}
      </Layout>
    )
  }
}

export default Reviews

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    reviews: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/reviews/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          headings {
            value
          }
        }
      }
    }
    tools: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/tools/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          headings {
            value
          }
        }
      }
    }
    blog: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
                childImageSharp{
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
          }
          headings {
            value
          }
        }
      }
    }
  }`