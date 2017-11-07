import React from 'react'
import Link from 'gatsby-link'
import './404.less';

const NotFoundPage = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
    <Link to="/">Go back home</Link>
  </div>
)

export default NotFoundPage
 