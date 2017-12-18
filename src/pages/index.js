import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <section className={styles.card}>
      <div className={styles.imgSection}>
        <img src="https://www.biography.com/.image/t_share/MTE5NTU2MzE2NjYxNTE1Nzg3/grace-hopper-21406809-1-402.jpg" alt="Grace Hopper"/>
      </div>
      <div className={styles.contentSection}>
        <div className={styles.heading}>
          <h1>
            Grace Hopper
            <small>Una mujer de futuro</small>
          </h1>
        </div>
        <div className={styles.generalInfoSection}>
          <span>A&ntilde;o de Nacimiento: <strong>1906</strong></span>
          <span>Nacionalidad: <i>🇺🇸</i></span>
          <span>Ocupaci&oacute;n: <strong>Programadora</strong></span>
        </div>
        <p>Grace Murray Hopper (Nueva York, 9 de diciembre de 1906 - Condado de Arlington, 1 de enero de 1992) fue una científica de la computación y militar estadounidense con grado de contraalmirante. Es pionera en el mundo de las ciencias de la computación y fue la primera programadora que utilizó el Mark I. Entre las décadas de los 50 y 60 desarrolló el primer compilador para un lenguaje de programación así como también propició métodos de validación.</p>
      </div>
    </section>
  </div>
)

export default IndexPage
