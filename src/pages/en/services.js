import React from "react"
import { graphql } from "gatsby"

import { rhythm } from "../../utils/typography"
import Bio from "../../components/en/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

class Services extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Web performance audits"
        description="We are experts in web performance. We carry out websites audits and workshops. We identify performance issues and teach about tools and techniques to fix and prevent them."/>
        <h1>Our Services</h1>
        <h2>Web Performance Audits</h2>
        <p>We do web performance audits identifying improvements to decrease load time and data traffic, improving user's engagemente and main business metrics.</p>
        <p>We have proven experience building sites at scale in companies like Tuenti, Spotify, Infojobs, Coches, and Mil Anuncios, with a strong focus in usability and performance.</p>
        <h2>Workshops</h2>
        <p>Learn about the main culprits in web performance, how to fix them and keep them under control.</p>
        <p><strong><a href="mailto:perfreviews.mail@gmail.com">Contact us by email</a> to know more.</strong></p>
        <hr style={{
          marginTop: rhythm(2.5),
          marginBottom: rhythm(2.5),
        }} />
        <Bio />
      </Layout>
    )
  }
}

export default Services

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
