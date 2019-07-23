import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Servicios extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Auditorías de rendimiento web"
        description="Somos expertos consultores en web performance. Hacemos auditorías de sitios web, workshops y talleres. Identificamos problemas de rendimiento y explicamos herramientas y técnicas para corregirlos y prevenirlos."/>
        <h1>Mejoramos el rendimiento de tu web.</h1>
        <blockquote><p>A tu negocio no le importa tener un sitio web rápido. <strong>Le preocupa ganar dinero</strong>.</p></blockquote>

        <p>Tenemos una larga experiencia llevando a cambio mejoras en el rendimiento de webs y estudiando el impacto en las métricas de negocio que te preocupan. Sabemos cuál es el balance entre esfuerzo técnico y retorno de la inversión.</p>

        <h1>Nuestros servicios</h1>
        <p>Tenemos una larga experiencia en el desarrollo de proyectos web a escala en empresas como Facebook, Spotify, Infojobs, Coches, Tuenti y Mil Anuncios. Con un especial énfasis en usabilidad y rendimiento. Tenemos el reconocmiento de Google como Google Developer Experts en tecnologías web.</p>

        <h2>Auditorías de rendimiento web</h2>
        <p>El rendimiento de tu sitio web es muy importante. Una web que carga rápido en cualquier dispositivo y condiciones de red mejora las métricas clave de negocio. Trabajaremos contigo y tu equipo para identificar los principales problemas que afectan a la performance de tu web.</p>

        <p>Una vez realizado el estudio proporcionaremos un documento detallado con consejos para ayudar al equipo de desarrollo a mejorar tanto el rendimiento como la experiencia de usuario de tu web.</p>

        <h4>Nuestro proceso</h4>
        <ul style={{marginLeft: '2em'}}>
          <li>Todo empieza con una llamada. Juntos estableceremos las mejoras y objetivos deseados.</li>
          <li>Proporcionaremos un informe detallado del rendimiento, incluyendo soluciones concretas, listo para pasárselo a tu equipo de desarrollo.</li>
        <li>Dos reuniones de follow-up de una hora de duración para asegurarnos de que estamos haciendo progresos.</li>
        </ul>

        <h4>Precio</h4>
        <p>
          <span style={{color: 'var(--textColorLink)', fontWeight: 'bold'}}>795 €</span>
          <i style={{color: '#656565'}}> (IVA no incluido)</i>
        </p>

        <p>¿Has visto <a href="https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww">nuestros vídeos</a> y te gustaría una auditoría de tu web?</p>
        <p><strong><a href="mailto:perfreviews.mail@gmail.com">Contáctanos para condiciones</a>.</strong></p>
        <h2>Formación: Workshops y talleres</h2>
        <p>Aprende cuáles son los principales problemas de rendimiento en sitios web, cómo corregirlos y monitorizarlos.</p>
        <p><strong><a href="mailto:perfreviews.mail@gmail.com">Contáctanos para condiciones</a>.</strong></p>

        <h2>In English</h2>
        <p><Link to="/en/services/">Read about our services</Link></p>

        <hr style={{
          marginTop: rhythm(2.5),
          marginBottom: rhythm(2.5),
        }} />
        <Bio />
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
