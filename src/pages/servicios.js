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

        <h2>Por qué es importante el rendimiento web</h2>
        <p>La velocidad de carga de una web tiene un gran impacto y es el factor más importante en la experiencia de usuario (fuente: Speed Matters / Designing for Mobile Performance, Awwwards).</p>

        <table style={{'font-size': '0.8em'}}>
          <tr>
            <td style={{width: '50%'}}><strong>Velocidad de carga de la página</strong></td>
            <td style={{width: '50%'}}><div style={{width:"75%", height: '1em', display: 'inline-block', background: '#00AA58', 'margin-right': '1em'}}></div><strong>75%</strong></td>
          </tr>
          <tr>
            <td style={{width: '50%'}}>Facilidad para encontrar lo que busco</td>
            <td style={{width: '50%'}}><div style={{width:"66%", height: '1em', display: 'inline-block', background: '#eee', 'margin-right': '1em'}}></div>66%</td>
          </tr>
          <tr>
            <td style={{width: '50%'}}>Cómo de bien se adapta la web a mi pantalla</td>
            <td style={{width: '50%'}}><div style={{width:"61%", height: '1em', display: 'inline-block', background: '#eee', 'margin-right': '1em'}}></div>61%</td>
          </tr>
          <tr>
            <td style={{width: '50%'}}>Facilidad de uso de la web</td>
            <td style={{width: '50%'}}><div style={{width:"58%", height: '1em', display: 'inline-block', background: '#eee', 'margin-right': '1em'}}></div>58%</td>
          </tr>
          <tr>
            <td style={{width: '50%'}}>Cómo de atractiva es la web</td>
            <td style={{width: '50%'}}><div style={{width:"24%", height: '1em', display: 'inline-block', background: '#eee', 'margin-right': '1em'}}></div>24%</td>
          </tr>
        </table>

        <p>Al incrementar el tiempo de carga también lo hace la tasa de abandono. Cuando el tiempo de carga pasa de 1 segundo a 3 segundos, la probabilidad de que el usuario abandone el sitio aumenta un 32%. Pasando de 1 a 5 segundos aumenta un 90%.</p>

        <p>Las mejoras en rendimiento demuestran estudio tras estudio <strong>mejoras en métricas clave como engagement y facturación</strong>.</p>

        <h1>Nuestros servicios</h1>
        <p>Tenemos una larga experiencia en el desarrollo de proyectos web a escala en empresas como Facebook, Spotify, Infojobs, Coches, Tuenti y Mil Anuncios. Con un especial énfasis en usabilidad y rendimiento. Tenemos el reconocmiento de Google como Google Developer Experts en tecnologías web.</p>
        <h2>Auditorías de rendimiento web</h2>
        <p>Realizamos auditorías de rendimiento de sitios web identificando mejoras para reducir tiempos de carga y tráfico de datos.</p>

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
