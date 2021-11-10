import { rhythm, scale } from "../utils/typography"

import Bio from "../components/bio"
import BioEn from "../components/en/bio"
import { Link } from "gatsby"
import React from "react"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    const language = location.pathname.indexOf('/en/') === -1 ? 'es' : 'en'

    const activeStyle = { boxShadow: "none", fontWeight: 'bold', color: "hsla(0,0%,0%,0.7)" };
    const submenu = <div>
      <Link
        to={language === 'en' ? '/en/' : '/'}
        activeStyle={activeStyle}
      >Home
      </Link>{' '}
      &bull;{' '}
      <Link
        to={language === 'en' ? '/en/blog/' : '/blog/'}
        activeStyle={activeStyle}>
        Blog
      </Link>{' '}
      &bull;{' '}
      <Link
        to="/reviews/"
        activeStyle={activeStyle}
      >{language === 'en' ? 'Web Performance Audits' : 'Análisis de Performance'}
      </Link>{' '}
      &bull;{' '}

      <Link
        to={language === 'en' ? '/' : '/en/'}
        activeStyle={activeStyle}>
        {language === 'en' ? 'En Español' : 'In English'}
      </Link>
    </div>;

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
        {language === 'en' ? <BioEn /> : <Bio />}
        {submenu}
        <main>{children}</main>
        {submenu}
      </div>
    )
  }
}

export default Layout
