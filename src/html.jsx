import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import { rhythm } from "./utils/typography";
import Helmet from 'react-helmet';
import { siteMetadata as config } from '../gatsby-config';
const isProduction = process.env.NODE_ENV === 'production';
const openGraphUrl = isProduction ? `${config.url}/space-pic.jpg` : '/space-pic.jpg';



const Html = ({ body, headComponents, postBodyComponents }) => {
  const helmet = Helmet.rewind();

  return (
    <html lang="en">
      <head>
        {headComponents}

        {/* Document */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta */}
        <title data-react-helmet="true">{config.title} - Blog - Freelance Web Developer</title>
        {helmet.meta.toComponent()}
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={openGraphUrl} />
        <meta name="twitter:site" content="@peterhironaka" />
        <meta name="twitter:creator" content="@peterhironaka" />
        <meta property="twitter:image" content={openGraphUrl} />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

        <meta name="theme-color" content="#000000" />

        {/* Styles */}
        {css}      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};


export default Html;
