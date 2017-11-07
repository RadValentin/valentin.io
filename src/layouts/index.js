import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import logo from '../assets/valentin-radulescu.jpg'
import favicon from '../assets/favicon.ico'
import './index.less'

const TemplateWrapper = ({ children, data }) => {
  const { author, title, description, url } = data.site.siteMetadata

  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
          rel="stylesheet"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css"
          rel="stylesheet"
        />
        <link rel="canonical" href={url} />
        <link rel="shortcut icon" href={favicon} />
        <meta name="description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />
        <meta property="fb:admins" content="100000168623106" />
        <meta property="og:image" content={logo} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@RadValentin" />
        <meta name="twitter:image" content={logo} />
        <meta name="twitter:creator" content="@RadValentin" />
      </Helmet>

      {children()}
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query SiteMetadataLookup {
    site {
      siteMetadata {
        author
        title
        description
        url
      }
    }
  }
`
