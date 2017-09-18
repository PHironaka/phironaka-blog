import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"
import '../css/typography.css';
import { rhythm } from "../utils/typography"
import ExternalLink from '../components/external-link'
const profilePic = require("../images/space-pic.jpg")

const linkStyle = css({ float: `right` });



export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={1024}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
      {data.site.siteMetadata.title}
      </g.H3>


    </Link>

    <ExternalLink className={linkStyle} to="https://peterhironaka.com">

      Back to site  ↳
    </ExternalLink>
    <img
                src={profilePic}
                style={{
                  borderRadius: `100%`,
                  float: "left",
                  marginRight: rhythm(1 / 4),
                  marginBottom: 0,
                  width: rhythm(2),
                  height: rhythm(2),
                }}
              />

              <g.P>
              {data.site.siteMetadata.description}
              </g.P>

    {children()}
  </g.Div>

  export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
