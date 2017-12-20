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
    <section className={styles.achievementsSection}>
      <h2 id="logros">Logros</h2>
      <div className={styles.container}>
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
      </div>
    </section>
    <section className={styles.quoteSection}>
      <blockquote>
        <h3>Para mí la programación es más que un importante arte práctico. También es un desafío gigantesco en los fundamentos del conocimiento</h3>
        <footer>&mdash; Grace Hopper</footer>
      </blockquote>
    </section>
    <section className={styles.imageSection}>
      <div className={styles.imageCard}>
        <img className={styles.cardImg} src="http://static2.businessinsider.com/image/5593f5cc6bb3f7ac51d8d3cf-1200-800/bug-6.jpg" alt="Primer caso actual de un 'bug' encontrado"/>
        <div className={styles.cardBody}>
          <p>Primer caso actual de un 'bug' encontrado</p>
        </div>
      </div>
    </section>
    <section className={styles.inventionsSection}>
      <h2 id="inventos">Inventos</h2>
      <p>A lo largo de su carrera, Grace Hopper fue pieza clave para la invención de muchas tecnologías informáticas que han moldeado el panorama moderno.</p>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>Compilador A-0</h3>
          </div>
          <div className={styles.content}>
            <p>Inventó el A-0, el primer compilador de la historia. El A-0 funcionaba más como un cargador o enlazador que como la noción moderna de compilador. Un programa era especificado como una secuencia de subrutinas y argumentos. Las subrutinas eran identificadas por un código numérico y los argumentos de las subrutinas eran escritas directamente después de cada código de subrutinas. El sistema A-0 convertía la especificación en código máquina que podía ser alimentado a una computadora para ejecutar el programa.</p>
          </div>
          <div className={styles.footer}>
            <h4>1952</h4>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>Compilador B-0 FLOW-MATIC</h3>
          </div>
          <div className={styles.content}>
            <p>Es el primer compilador para procesamiento de datos que usaba órdenes en inglés  que se utilizó para el cálculo de nóminas. FLOW-MATIC es el primer lenguaje de alto nivel orientado al ámbito de gestión. Fue creado en 1955 para UNIVAC.</p>
          </div>
          <div className={styles.footer}>
            <h4>1957</h4>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>COBOL</h3>
          </div>
          <div className={styles.content}>
            <p>Desarrolló el lenguaje COBOL, un lenguaje de programación especialmente enfocado a los procesos empresariales. El lenguaje COBOL (acrónimo de <strong>CO</strong>mmon <strong>B</strong>usiness-<strong>O</strong>riented <strong>L</strong>anguage, Lenguaje Común Orientado a Negocios) fue creado en el año 1959 con el objetivo de crear un lenguaje de programación universal que pudiera ser usado en cualquier ordenador (ya que en los años 1960 existían numerosos modelos de ordenadores incompatibles entre sí), y que estuviera orientado principalmente a los negocios, es decir, a la llamada informática de gestión.</p>

            <div className={[styles.card, styles.info].join(' ')}>
              <h4>Dato Curioso</h4>
              <p>En el código que se ve de la programación del cyborg de la película Terminator (1984), algunas de las sentencias están escritas en Cobol.</p>
            </div>
          </div>
          <div className={styles.footer}>
            <h4>1959</h4>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>FORTRAN</h3>
          </div>
          <div className={styles.content}>
            <p>Hopper también participó en el comité de estandarización de otro lenguaje de alto nivel, el FORTRAN (contracción del inglés The IBM Mathematical <strong>For</strong>mula <strong>Tran</strong>slating System). Es un lenguaje de programación de alto nivel de propósito general,​ procedimental e imperativo, que está especialmente adaptado al cálculo numérico y a la computación científica.</p>
            <p>Desarrollado originalmente por IBM en 1957 para el equipo IBM 704, y usado para aplicaciones científicas y de ingeniería, el FORTRAN vino a dominar esta área de la programación desde el principio y ha estado en uso continuo por más de medio siglo en áreas de cómputo intensivo tales como la predicción numérica del tiempo, análisis de elementos finitos, dinámica de fluidos computacional (CFD), física computacional y química computacional. Es uno de los lenguajes más populares en el área de la computación de alto rendimiento y es el lenguaje usado para programas que evalúan el desempeño (benchmark) y el ranking de los supercomputadores más rápidos del mundo.</p>
          </div>
          <div className={styles.footer}>
            <h4>1957</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default IndexPage
