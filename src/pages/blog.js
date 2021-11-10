import Layout from "../components/layout"
import PostExtract from "../components/post-extract"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const blog = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog de PerfReviews"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Blog</h1>
        <p>En nuestro blog escribimos sobre novedades en el mundo de la optimización de rendimiento web.</p>

        {blog
          .filter(p => p.node.fields.slug.indexOf("/en/") === -1)
          .map(({ node }) => (
            <PostExtract post={node} />
          ))}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
              childImageSharp {
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
  }
`
