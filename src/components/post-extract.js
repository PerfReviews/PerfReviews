import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

export default (props) => {
    const title = props.post.frontmatter.title || props.post.headings[0].value || props.post.fields.slug
    return (
        <div key={props.post.fields.slug} style={{
            marginTop: rhythm(2),
        }}>
            <div>
                <h3
                    style={{
                        marginBottom: rhythm(1 / 4),
                        marginTop: 0,
                    }}
                >
                    <Link style={{ boxShadow: `none` }} to={props.post.fields.slug}>
                        {title}
                    </Link>
                </h3>
                <small className="date" style={{ marginBottom: rhythm(1), display: 'block' }}>{props.post.frontmatter.date}</small>
                {props.post.frontmatter.featuredImage ? <Img style={{ marginBottom: rhythm(1) }} fluid={props.post.frontmatter.featuredImage.childImageSharp.fluid} /> : null}
                <p
                    dangerouslySetInnerHTML={{
                        __html: props.post.frontmatter.description || props.post.excerpt,
                    }}
                />
            </div>
        </div>
    )
};