import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.scss'

const IndexPage = () => (
  <div>
    <section className={styles.heroCard}>
      <div className={styles.imgSection}>
        <img src="https://biztechmagazine.com/sites/default/files/tiny-uploads/2012/grace-hopper-300.jpg" alt="Grace Hopper"/>
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
    <h2 id="logros">Logros</h2>
    <section className={styles.achievementsSection}>
      <div className={styles.item}>
        <h3><i>👩‍🎓</i> Ph.D. en Matem&aacute;ticas (Yale)</h3>
        <p>Este logro fue un hito para cualquiera en esa &eacute;poca. S&oacute;lo 1,279 PhDs de Matem&aacute;ticas📚&nbsp; fueron otorgados desde 1862 hasta 1934, a&ntilde;o en que Hopper recibi&oacute; el suyo.
        </p>
      </div>
      <div className={styles.item}>
        <h3><i>👮‍♀️</i> Contraalmirante</h3>
        <p>Hopper intentó enlistarse en la marina estadounidense durante la Segunda Guerra Mundial, pero debió unirse a las reservas de la armada porque era adulta para sus 34 años. No obstante, obtuvo el rango de Contralmirante (Almirante de 1 🌟&nbsp;) en 1985.</p>
      </div>
      <div className={styles.item}>
        <h3><i>🐞</i> "Bug"</h3>
        <p>
          El t&eacute;rmino "bug" es utilizado en la inform&aacute;tica para referirse a un error o fallo en un programa.
          Aunque se le atribuye erróneamente la invención del término🤦‍♀️&nbsp;, su equipo de  ingenieros encontraron una mariposilla enganchada a uno de los relés del ordenador y que impedía el funcionamiento del mismo.
        </p>
      </div>
    </section>
    <section className={styles.quoteSection}>
      <blockquote>
        <h3>Para mí la programación es más que un importante arte práctico. También es un desafío gigantesco en los fundamentos del conocimiento</h3>
        <footer>&mdash; Grace Hopper</footer>
      </blockquote>
    </section>
  </div>
)

export default IndexPage
