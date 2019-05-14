import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: rhythm(2.5),
            paddingTop: rhythm(1),
          }}>
          <Link
          to="/servicios/"
        >Servicios
      </Link>{' '}
        &bull;{' '}
          <a
          href="https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww"
          target="_blank"
          rel="noopener noreferrer"
        >Youtube
        </a>{' '}
        &bull;{' '}
          <a
          href="https://mobile.twitter.com/PerfReviews_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.facebook.com/PerfReviews-221286588787407/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/PerfReviews/PerfReviews"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{' '}
        &bull;{' '}
        <a
          href="mailto:perfreviews.mail@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>{' '}
      </footer>
      </div>
    )
  }
}

export default Layout
