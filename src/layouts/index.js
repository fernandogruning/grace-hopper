import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './typography.scss'
import './index.scss'
import styles from './header.module.scss'

const Header = () => (
  <nav className={styles.header}>
    <div className={styles.stripe}></div>
    <div className={styles.container}>
      <h3>
        <Link to="/">
          Grace Hopper
          <small>Una mujer de futuro</small>
        </Link>
      </h3>
    </div>
  </nav>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Grace Hopper "
      meta={[
        { name: 'description', content: 'Grace Hopper' },
        { name: 'keywords', content: 'grace hopper' },
        { name: 'charset', content: 'utf-8' },
      ]}
    />
    <Header />
    <div className={styles.contentContainer}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
