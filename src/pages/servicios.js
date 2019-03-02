import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Servicios extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Auditorías de rendimiento web" />
        <h1>Nuestros servicios</h1>
        <h2>Auditorías de rendimiento web</h2>
        <p>Tenemos una larga experiencia en el desarrollo de proyectos web a escala en empresas como Tuenti, Spotify y Schibsted. Con un especial énfasis en usabilidad y performance.</p>
        <p>¿Has visto <a href="https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww">nuestros vídeos</a> y te gustaría una auditoría de tu web?</p>
        <p>Realizamos auditorías de rendimiento de sitios web identificando mejoras para reducir tiempos de carga y tráfico de datos, que mejoran el <i>engagement</i> de los usuarios y con ello las principales métricas de negocio.</p>
        <h2>Workshops y talleres</h2>
        <p>Aprende cuáles son los principales problemas de rendimiento en sitios web, cómo corregirlos y monitorizarlos.</p>

        <p><strong>Contáctanos en Twitter para condiciones.</strong></p>

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
