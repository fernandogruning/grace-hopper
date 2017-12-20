import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './typography.scss'
import './index.scss'
import styles from './styles.module.scss'

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
      <ul>
        <li>
          <AnchorLink href="#logros">Logros</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#inventos">Inventos</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#distinciones">Distinciones</AnchorLink>
        </li>
      </ul>
    </div>
  </nav>
)

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contentContainer}>
      <p>Hecho con <span>❤️</span> por <a href="https://fernandogruning.com">Fernando Gruning</a></p>
      <p>&copy; 2017</p>
    </div>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Grace Hopper"
      meta={[
        { name: 'description', content: 'Grace Hopper' },
        { name: 'keywords', content: 'grace hopper' },
        { name: 'charset', content: 'utf-8' },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]}
    />
    <Header />
    <div className={styles.contentContainer}>
      {children()}
    </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
