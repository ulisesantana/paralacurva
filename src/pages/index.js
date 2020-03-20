import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/info"
import "./global.css"
import "semantic-ui-css/semantic.min.css"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const iframeWidth = 960
  const iframeHeight = iframeWidth / 1.81

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Inicio" />
      <p>Para el crecimiento exponencial de infectados de coronavirus.</p>
      <p>
        Esta página está hecha para tratar de difundir información útil para
        afrontar la pandemia del coronavirus (COVID-19) en España. De esta
        manera, cuanto más informados estemos más conseguiremos evitar que haya
        más infectados.
      </p>

      <p>
        Consulta la{" "}
        <a href="https://covid19.isciii.es/" target="_blank">
          situación de COVID-19 en España
        </a>
      </p>

      <Info />

      <h2>Comunicado por parte del Presidente del Gobierno Español</h2>

      <div className="iframe-container">
        <iframe
          width={iframeWidth}
          height={iframeHeight}
          title="Comunicado por parte del Presidente del Gobierno Español"
          src="https://www.youtube.com/embed/eakx-GWKoDQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <h2>Consejos sanitarios para el aislamiento domiciliario</h2>

      <div className="iframe-container">
        <iframe
          width={`${iframeWidth}`}
          height={`${iframeHeight}`}
          src="https://www.youtube.com/embed/RHfic_GHc50"
          title="Consejos sanitarios para el aislamiento domiciliario"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
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
