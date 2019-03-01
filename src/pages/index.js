import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Bio from "../components/bio"

import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Reviews extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const reviews = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Reviews" />
        <Bio />
        <h1>Nuestros análisis de web performance</h1>

        <p>En PerfReviews hablaremos sobre web performance analizando diferentes sitios reales. Queremos divulgar sobre la importancia de crear productos que ofrezcan una buena experiencia de usuario en cualquier dispositivo. Y lo haremos desde un punto de vista práctico, con herramientas y técnicas que podéis aplicar en vuestros proyectos.</p>
<p>Dado que los sitios web son proyectos dinámicos, es posible que los análisis mencionen aspectos que no sean reproducibles actualmente. Por ello acompañamos los vídeos con una serie de informes que permiten visualizar un “snapshot” de la web en el momento en que hicimos el estudio.
</p>
        {reviews.map(({ node }) => {
          const title = node.frontmatter.title || node.headings[0].value || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
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
    allMarkdownRemark(filter: {fields: {collection: {eq: "reviews"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
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
  }
`
