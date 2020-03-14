import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const iframeWidth =
    window.innerWidth > 720 ? window.innerWidth * 0.6 : window.innerWidth * 0.8
  const iframeHeight = iframeWidth / 1.81

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Inicio" />
      <p>
        Para el crecimiento exponencial de la curva de infectados de
        coronavirus.
      </p>
      <p>
        Esta página está hecha para tratar de difundir información útil para
        afrontar la pandemia del coronavirus (COVID-19) en España. De esta
        manera cuanto más informados estemos más conseguiremos evitar que hayan
        más infectados.
      </p>

      <h2>Último comunicado por parte del Presidente del Gobierno Español</h2>
      <iframe
        width={`${iframeWidth}px`}
        height={`${iframeHeight}px`}
        title="Último comunicado por parte del Presidente del Gobierno Español"
        src="https://www.youtube.com/embed/eakx-GWKoDQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <h2>Consejos sanitarios para el aislamiento domiciliario</h2>
      <iframe
        width={`${iframeWidth}px`}
        height={`${iframeHeight}px`}
        src="https://www.youtube.com/embed/RHfic_GHc50"
        title="Consejos sanitarios para el aislamiento domiciliario"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <a
        href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/telefonos.htm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Teléfonos de información por comunidad autónoma</h2>
      </a>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
