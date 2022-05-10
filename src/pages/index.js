import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PostExtract from "../components/post-extract"
import React from "react"
import SEO from "../components/seo"
import adevintaLogo from "../../static/img/logo-adevinta.png"
import domestikaLogo from "../../static/img/logo-domestika.png"
import kaveHomeLogo from "../../static/img/logo-kave-home.png"
import mediasetLogo from "../../static/img/logo-mediaset.png"
import metaLogo from "../../static/img/logo-meta.png"
import { rhythm } from "../utils/typography"
import spotifyLogo from "../../static/img/logo-spotify.png"

class Reviews extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const tools = data.tools.edges
    const blog = data.blog.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Auditorías de rendimiento web"
          description="Somos expertos consultores en web performance. Hacemos auditorías de sitios web, workshops y talleres. Identificamos problemas de rendimiento y explicamos herramientas y técnicas para corregirlos y prevenirlos." />

        <h1>Mejoramos el rendimiento de tu web.</h1>
        <p>Tenemos una larga experiencia llevando a cambio mejoras en el rendimiento de webs y estudiando el impacto en las métricas de negocio que te preocupan. Sabemos cuál es el balance entre esfuerzo técnico y retorno de la inversión.</p>
        <p>Hemos desarrollado proyectos web a escala en empresas como Facebook, Spotify, Mediaset, Infojobs, Coches.net, Tuenti y Mil Anuncios. Con un especial énfasis en usabilidad y rendimiento.</p>
        <p>Tenemos el reconocimiento de Google como <a href="https://developers.google.com/community/experts">Google Developer Experts</a> en tecnologías web y Media Developer Expert por Cloudinary.</p>
        <p style={{ textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', fontSize: '80%', marginBottom: 0, paddingTop: '2em', color: '#9CA3AF' }}>Algunas empresas con las que hemos trabajado</p>
        <div style={{ display: 'flex', alignItems: "center", flexWrap: 'wrap', paddingBottom: '1.75rem' }}>
          <div style={{ width: '33%' }}>
            <img alt="Spotify logo" src={spotifyLogo} style={{ marginBottom: 0, padding: '1em', display: 'block' }} />
          </div>
          <div style={{ width: '33%' }}>
            <img alt="Adevinta logo" src={adevintaLogo} style={{ marginBottom: 0, padding: '1em', display: 'block' }} />
          </div>
          <div style={{ width: '33%' }}>
            <img alt="Meta (Facebook) logo" src={metaLogo} style={{ marginBottom: 0, padding: '1em', display: 'block' }} />
          </div>
          <div style={{ width: '33%' }}>
            <img alt="Kave Home logo" src={kaveHomeLogo} style={{ marginBottom: 0, padding: '1em', display: 'block' }} />
          </div>
          <div style={{ width: '33%' }}>
            <img alt="Domestika logo" src={domestikaLogo} style={{ marginBottom: 0, padding: '1em', display: 'block' }} />
          </div>
          <div style={{ width: '33%' }}>
            <img alt="Mediaset logo" src={mediasetLogo} style={{ marginBottom: 0, padding: '1em', display: 'block' }} />
          </div>
        </div>

        <h2>Nuestros servicios</h2>

        <h3>Auditorías de rendimiento web</h3>
        <p>El rendimiento de tu sitio web es muy importante. Una web que carga rápido en cualquier dispositivo y condiciones de red mejora las métricas clave de negocio. Trabajaremos contigo y tu equipo para identificar los principales problemas que afectan a la performance de tu web.</p>

        <p>Una vez realizado el estudio proporcionaremos un documento detallado con consejos para ayudar al equipo de desarrollo a mejorar tanto el rendimiento como la experiencia de usuario de tu web.</p>

        <h4>Nuestro proceso</h4>
        <ol style={{ marginLeft: '2em' }}>
          <li>Todo empieza con una llamada. Juntos estableceremos <strong>las mejoras y objetivos deseados</strong>.</li>
          <li>Proporcionaremos un informe detallado del rendimiento, incluyendo <strong>soluciones concretas</strong>, listo para pasárselo a tu equipo de desarrollo.</li>
          <li>Planificaremos <strong>2 reuniones de seguimiento</strong> de una hora de duración para asegurarnos de que estamos haciendo progresos.</li>
        </ol>

        <h4>Reserva tu análisis de rendimiento</h4>
        <p>
          <span style={{ color: 'var(--textColorLink)', fontWeight: 'bold' }}>795 €</span>
          <span style={{ color: '#656565' }}> (IVA no incluido)</span>
        </p>

        <p style={{ marginBottom: '4em' }}><strong><a style={{ padding: '0.5em 1em', backgroundColor: 'var(--textColorLink)', color: '#fff' }} href="mailto:mail@perf.reviews?subject=Perf Review">Contrata nuestro servicio de análisis</a></strong></p>

        <hr />

        <h3>Consultoría experta</h3>
        <p>Si tienes dudas sobre concretas sobre tu web o estás planteando mejoras en el rendimiento de la misma, estamos aquí para ayudarte. Contáctanos para reservar una videollamada para que te podamos asesorar.</p>
        <h4>Reserva tu servicio de consultoría</h4>
        <p>
          <span style={{ color: 'var(--textColorLink)', fontWeight: 'bold' }}>99 € / hora</span>
          <span style={{ color: '#656565' }}> (IVA no incluido)</span>
        </p>

        <p style={{ marginBottom: '4em' }}><strong><a style={{ padding: '0.5em 1em', backgroundColor: 'var(--textColorLink)', color: '#fff' }} href="mailto:mail@perf.reviews?subject=Consultoría Web Performance">Contrata nuestro servicio de consultoría</a></strong></p>

        <hr />

        <h3>Formación: Workshops y talleres</h3>
        <p>Aprende cuáles son los principales problemas de rendimiento en sitios web, cómo corregirlos y monitorizarlos.</p>
        <p style={{ marginBottom: '4em' }}><strong><a style={{ padding: '0.5em 1em', backgroundColor: 'var(--textColorLink)', color: '#fff' }} href="mailto:mail@perf.reviews?subject=Información Worlshops">Contáctanos para condiciones</a></strong></p>

        <hr />

        <h3>In English</h3>
        <p><Link to="/en/services/">Read about our services</Link></p>

        <hr style={{
          marginTop: rhythm(2.5),
          marginBottom: rhythm(2.5),
        }} />
        <h2>Posts recientes en nuestro blog</h2>
        {blog
          .filter(p => p.node.fields.slug.indexOf("/en/") === -1)
          .map(({ node }) => (
            <PostExtract post={node} />
          ))}
        <h2>Tips</h2>
        <h3>
          <a
            style={{ boxShadow: `none` }}
            href={"https://www.youtube.com/watch?v=50DiJphbXiU"}
          >
            3rd party badges en Google Chrome
          </a>
        </h3>
        <p>
          Un vídeo corto sobre cómo identificar peticiones de 3rd party scripts
          y medir su performance.
        </p>
        <h2>Tools</h2>
        {tools.map(({ node }) => {
          const title =
            node.frontmatter.title || node.headings[0].value || node.fields.slug
          return (
            <div
              key={node.fields.slug}
              style={{
                marginTop: rhythm(2),
              }}
            >
              <div>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                    marginTop: 0,
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small className="date">{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            </div>
          )
        })}
        <h2>Colaboraciones</h2>
        <h3>
          <a
            style={{ boxShadow: `none` }}
            href={"https://www.youtube.com/watch?v=bhSEp44mrKQ"}
          >
            Análisis del performance de sitios web con Escuela IT
          </a>
        </h3>
        <p>
          En esta colaboración con la plataforma de aprendizaje online Escuela
          IT analizamos el rendimiento de 3 sitios web sugeridos por los
          asistentes a la sesión.
        </p>
        <hr
          style={{
            marginTop: rhythm(2.5),
            marginBottom: rhythm(2.5),
          }}
        />
        <p>
          En PerfReviews hablamos sobre web performance analizando diferentes
          sitios reales.Queremos divulgar sobre la importancia de crear
          productos que ofrezcan una buena experiencia de usuario en cualquier
          dispositivo.Y lo haremos desde un punto de vista práctico, con
          herramientas y técnicas que podéis aplicar en vuestros proyectos.
        </p>
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
    reviews: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/reviews/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
    tools: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/tools/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
