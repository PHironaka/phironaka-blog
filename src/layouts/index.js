import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"
import '../css/typography.css';
import { rhythm } from "../utils/typography"
import ExternalLink from '../components/external-link'
import Footer from '../components/Footer'

const profilePic = require("../images/space-pic.jpg")

const linkStyle = css({ float: `right` });



export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={800}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Link to={`/`}>
    <img        className="pic"
                src={profilePic}

              />
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
      {data.site.siteMetadata.title}
      </g.H3>


    </Link>


    <ExternalLink className={linkStyle} to="https://peterhironaka.com">

      Back to main site ↳
    </ExternalLink>


              <g.P>
              {data.site.siteMetadata.description}
              </g.P>

    {children()}
    <Footer />

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
