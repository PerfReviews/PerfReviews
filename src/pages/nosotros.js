import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import JoanLeonImage from "../../content/assets/joan-leon.jpg"
import JosePerezImage from "../../content/assets/jose-perez.jpg"

class Servicios extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Quiénes somos"
        description="Somos expertos consultores en web performance con una amplia experiencia."/>
        <h1>Sobre nosotros</h1>
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(1),
          }}
        >
          <img
            src={JoanLeonImage}
            alt={'Joan Leon'}
            style={{
              height: 100,
              marginRight: rhythm(1),
              marginBottom: 0,
              width: 100,
              borderRadius: `50%`,
            }}
          />
          <h2 style={{marginTop: '2rem'}}>Joan León</h2>
        </div>
        <p>Me apasiona todo lo relacionado con el desarrollo e interacción en la interfaz de usuario en entornos web.</p>
        <p>Trato de estar al día en todo lo relacionado con HTML5, CSS, SVG, web Animation y Javascript. Otra de mis pasiones es la de colaborar en proyectos Open Source.</p><p>Me encanta compartir conocimiento, ya sea en MeetUps, Workshops o como docente en Escuela IT... siempre activo en <a href="https://twitter.com/nucliweb">@nucliweb</a> para compartir todos los recursos y novedades del mundo frontend.</p>
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(1),
            marginTop: rhythm(2),
          }}
        >
          <img
            src={JosePerezImage}
            alt={'Jose M. Perez'}
            style={{
              height: 100,
              marginRight: rhythm(1),
              marginBottom: 0,
              width: 100,
              borderRadius: `50%`,
            }}
          />
          <h2 style={{marginTop: '2rem'}}>José M. Pérez</h2>
        </div>
        <p>Soy tech lead, desarrollador full-stack web, especialista web performance, speaker y contribuidor open-source.</p>
        <p>Google Developer Expert en tecnologías web. Me gusta crear productos útiles y con buena experience de usuario.</p>
        <p>Publico en <a href="https://jmperezperez.com">jmperezperez.com</a> sobre mis proyectos y exploraciones de web performance.</p>
      </Layout>
    )
  }
}

export default Servicios

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
