import Layout from "../../components/layout"
import PostExtract from "../../components/post-extract"
import React from "react"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

class Reviews extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const blog = data.blog.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Web performance audits"
          description="We are experts in web performance. We carry out websites audits and workshops. We identify performance issues and teach about tools and techniques to fix and prevent them."
          lang="en" />
        <h1>We improve the performance of your website.</h1>
        <p>We have broad experience improving web performance and analyzing the impact on business metrics. We know how to balance effort and impact to focus on changes that are affordable and will improve your results.</p>
        <p>We have proven experience building sites at scale in companies like Tuenti, Spotify, Mediaset, Infojobs, Coches, and Mil Anuncios, with a strong focus in usability and performance. We are also recognized as Google Developer Experts in web technologies.</p>
        <h2>Our Services</h2>
        <h3>Web Performance Audits</h3>
        <p>The performance of your website is very important. A web that loads quickly on any device and network conditions improves key business metrics. We will work with you and your team to identify the main problems that affect the performance of your website.</p>

        <p>Once the study is completed, we will provide a detailed document with tips to help the development team improve both the performance and the user experience of your website.</p>

        <h4>Our Process</h4>
        <ol style={{ marginLeft: '2em' }}>
          <li>It all starts with a call. Together we will agree on <strong>the expected improvements and objectives</strong>.</li>
          <li>We will provide a detailed performance report, including <strong>specific solutions</strong>, ready to be delivered to your development team.</li>
          <li>We will schedule <strong>2 one-hour follow-up meetings</strong> to make sure we are making progress.</li>
        </ol>

        <h4>Book your web performance audit</h4>
        <p>
          <span style={{ color: 'var(--textColorLink)', fontWeight: 'bold' }}>795 €</span>
          <span style={{ color: '#656565' }}> (VAT not included)</span>
        </p>

        <p style={{ marginBottom: '4em' }}><strong><a style={{ padding: '0.5em 1em', backgroundColor: 'var(--textColorLink)', color: '#fff' }} href="mailto:mail@perf.reviews">Hire our performance audit services</a></strong></p>

        <hr />

        <h3>Expert Consulting</h3>
        <p>If you have specific questions about your site or need quick feedback about a web performance optimization project you are thinking about, we are here to help you. Contact us to book a videocall so we can help you.</p>
        <h4>Book your consulting service</h4>
        <p>
          <span style={{ color: 'var(--textColorLink)', fontWeight: 'bold' }}>99 € / hour</span>
          <span style={{ color: '#656565' }}> (VAT not included)</span>
        </p>

        <p style={{ marginBottom: '4em' }}><strong><a style={{ padding: '0.5em 1em', backgroundColor: 'var(--textColorLink)', color: '#fff' }} href="mailto:mail@perf.reviews">Hire our hourly consulting services</a></strong></p>

        <hr />

        <h3>Workshops and Training</h3>
        <p>Learn about the main culprits in web performance, how to fix them and keep them under control.</p>

        <p style={{ marginBottom: '4em' }}><strong><a style={{ padding: '0.5em 1em', backgroundColor: 'var(--textColorLink)', color: '#fff' }} href="mailto:mail@perf.reviews">Contact us to know more</a></strong></p>

        <hr />

        <h2>Recent Posts on our Blog</h2>
        {blog
          .filter(p => p.node.fields.slug.indexOf("/en/") !== -1)
          .map(({ node }) => (
            <PostExtract post={node} />
          ))}
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
