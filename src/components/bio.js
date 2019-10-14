/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from "./logo.svg"
import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
            }}
          >
            <img
              src={logo}
              alt={'PerfReviews'}
              style={{
                height: 56,
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: 56,
                borderRadius: `50%`,
              }}
            />
            <p>
              PerfReviews es un proyecto de <Link
              to="/nosotros/"
            ><strong>{author}</strong></Link>.<br/>
              Hablamos sobre web performance en <a href={`https://twitter.com/${social.twitter}`}>Twitter</a> y{' '}
              <a href={'https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww'}>Youtube</a>.
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioEnQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
