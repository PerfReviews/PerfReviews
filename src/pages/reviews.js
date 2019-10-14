import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Nuestros análisis de web performance"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Análisis de rendimiento web de sitios reales.</h1>
        <p>En PerfReviews analizamos el rendimiento de sitios web. Es una forma ideal de enseñar cómo utilizar herramientas para detectar, corregir y prevenir problemas de performance.</p>
        <p>Somos reconocidos Google Developer Experts en tecnologías web y tenemos una larga experiencia desarrollando sitios web con un especial foco en usabilidad, accessibilidad y rendimiento.</p>
        <p>Dado que los sitios web son proyectos dinámicos, es posible que los análisis mencionen aspectos que no sean reproducibles actualmente. Por ello acompañamos los vídeos con una serie de informes que permiten visualizar un “snapshot” de la web en el momento en que hicimos el estudio.</p>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/reviews/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
        }
      }
    }
  }
`
