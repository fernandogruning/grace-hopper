import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <img src="https://www.thefamouspeople.com/profiles/images/grace-hopper-3.jpg" alt="Grace Hopper"/>
    <h1>
      Grace Hopper
      <small>A woman of the future</small>
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
