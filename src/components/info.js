import React, { useState } from "react"
import { Accordion } from "semantic-ui-react"

const InfoPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index

    setActiveIndex(newIndex)
  }

  return (
    <>
      <h1 style={{ marginTop: "20px" }}>Información sobre el coronavirus</h1>
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          ¿QUÉ ES EL NUEVO CORONAVIRUS?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 0}
        >
          <p>
            Los coronavirus son una amplia familia de virus que normalmente
            afectan sólo a animales. Algunos tienen la capacidad de transmitirse
            de los animales a las personas.
          </p>
          <p>
            El nuevo coronavirus SARS-CoV-2 es un nuevo tipo de coronavirus que
            puede afectar a las personas y se ha detectado por primera vez en
            diciembre de 2019 en la ciudad de Wuhan, provincia de Hubei, en
            China. Todavía hay muchas cuestiones que se desconocen en relación a
            la enfermedad que produce: COVID-19.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          ¿CUÁLES SON LOS SÍNTOMAS DE COVID-19?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 1}
        >
          <p>
            Los síntomas más comunes incluyen{" "}
            <b> fiebre, tos, y sensación de falta de aire </b>. En algunos casos
            también puede haber síntomas digestivos como diarrea y dolor
            abdominal. La mayoría de los casos presentan síntomas leves.
          </p>
          <p>
            <b>
              En casos más graves, la infección puede causar neumonía,
              dificultad importante para respirar, fallo renal e incluso la
              muerte.
            </b>{" "}
            Los casos más graves generalmente ocurren en personas de edad
            avanzada o que padecen alguna enfermedad crónica, como enfermedades
            del corazón, del pulmón o inmunodeficiencias.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          ¿CUÁLES SON LOS GRUPOS VULNERABLES?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 2}
        >
          <p>
            Los principales grupos vulnerables son los mayores de 60 años, y
            aquellas personas diagnosticadas de hipertensión arterial, diabetes,
            enfermedades cardiovasculares, enfermedades pulmonares crónicas,
            cáncer, inmunodeficiencias, y el embarazo por el principio de
            precaución.
          </p>
          <p>
            Sin embargo, debido a la facilidad del virus para contagiarse se
            recomienda extremar precauciones aunque no se pertenezca a los
            grupos de riesgo.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={handleClick}
        >
          ¿CÓMO SE TRANSMITE EL NUEVO CORONAVIRUS?
        </Accordion.Title>

        <Accordion.Content
          className="transition-height"
          active={activeIndex === 3}
        >
          <p>
            Parece que la{" "}
            <b>
              transmisión es por contacto estrecho con las secreciones
              respiratorias que se generan con la tos o el estornudo de una
              persona enferma.
            </b>{" "}
            Estas secreciones infectarían a otra persona si entran en contacto
            con su nariz, sus ojos o su boca. Parece poco probable la
            transmisión por el aire a distancias mayores de 1-2 metros.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={handleClick}
        >
          ¿CUÁL ES LA SITUACIÓN EN ESPAÑA?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 4}
        >
          <p>
            Actualmente existe transmisión comunitaria sostenida generalizada en
            España. Se puede consultar la situación actualizada en el{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/situacionActual.htm"
            >
              este enlace.
            </a>
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={handleClick}
        >
          ¿EXISTE UN TRATAMIENTO PARA EL COVID-19?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 5}
        >
          <p>
            No existe un tratamiento específico, pero se están empleando algunos
            antivirales que han demostrado cierta eficacia en estudios
            recientes. Sí existen muchos tratamientos para el control de sus
            síntomas por lo que la asistencia sanitaria mejora el pronóstico
          </p>
          <p>
            Al ser una infección producida por virus, los antibióticos no deben
            ser usados como un medio de prevención o tratamiento.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={handleClick}
        >
          ¿QUÉ PUEDO HACER PARA PROTEGERME?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 6}
        >
          <p>
            Las medidas genéricas de protección individual frente a enfermedades
            respiratorias incluyen:
            <ul style={{ marginLeft: "40px" }}>
              <li>
                Higiene de manos frecuente (lavado con agua y jabón o soluciones
                alcohólicas), especialmente después de contacto directo con
                personas enfermas o su entorno.
              </li>
              <li>
                Al toser o estornudar, cubrirse la boca y la nariz con el codo
                flexionado.
              </li>
              <li>Usar pañuelos desechables, y tirarlos tras su uso.</li>
              <li>
                Si se presentan síntomas respiratorios, evitar el contacto
                cercano (manteniendo una distancia de 1-2 metros
                aproximadamente) con otras personas.
              </li>
              <li>
                Evitar tocarse los ojos, la nariz y la boca, ya que las manos
                facilitan la transmisión.
              </li>
              <li>No salir de casa a menos que sea .</li>
            </ul>
          </p>
          <p>
            No hay que tomar precauciones especiales con los animales en España,
            ni con los alimentos, para evitar esta infección.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={handleClick}
        >
          ¿DEBO UTILIZAR MASCARILLAS PARA PROTEGERME?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 7}
        >
          <p>
            La población general sana no necesita utilizar mascarillas. Las
            mascarillas ayudan a prevenir la transmisión del virus si las llevan
            las personas que están enfermas.
          </p>
          <p>
            Los profesionales sanitarios indicarán el uso de mascarillas en
            aquellas situaciones en las que se considere necesario en cada caso.
          </p>
          <p>
            Un uso inadecuado de mascarillas puede contribuir a un
            desabastecimiento de las mismas en aquellas situaciones para las que
            están indicadas.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 8}
          index={8}
          onClick={handleClick}
        >
          ¿QUÉ MEDIDAS DE CONTROL SE ESTÁN TOMANDO?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 8}
        >
          <p>
            Desde el 14 de marzo se ha declarado el estado de alarma en todo el
            territorio español, por lo que se están tomando medidas para hacer
            frente a esta situación grave y excepcional, con el objetivo de
            proteger la salud de la ciudadanía, contener la progresión de la
            enfermedad y reforzar el sistema de salud pública. Consulta fuentes
            oficiales para mantenerte al día de la situación.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 9}
          index={9}
          onClick={handleClick}
        >
          ¿QUÉ TENGO QUE HACER SI TENGO SÍNTOMAS?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 9}
        >
          <p>
            Las personas que presenten fiebre o tos, deberán quedarse en su
            domicilio y contactar con los servicios de salud telefónicamente
            llamando al teléfono habilitado de su Comunidad Autónoma, que se
            pueden consultar{" "}
            <a
              rel="noopener noreferrer"
              href="http://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCovChina/telefonos.htm"
            >
              aquí.
            </a>
          </p>
          <p>
            Si se tiene sensación de falta de aire, empeoramiento o sensación
            real de gravedad por cualquier otro síntoma, llamar al 112
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 9}
          index={9}
          onClick={handleClick}
        >
          ¿SE ESTÁN HACIENDO PRUEBAS PARA DIAGNOSTICAR LA INFECCIÓN?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 9}
        >
          <p>
            En el escenario actual de transmisión comunitaria sostenida se ha
            priorizado la realización de pruebas a los pacientes hospitalizados
            o con criterios de ingreso hospitalario y a los profesionales
            sanitarios y sociosanitarios o de otros servicios esenciales que
            presenten síntomas, para evitar la transmisión del virus en estos
            contextos.
          </p>
          <p>
            Se podrá considerar la realización de test diagnóstico a personas
            especialmente vulnerables, según valoración clínica individualizada.
          </p>
        </Accordion.Content>
      </Accordion>
    </>
  )
}

export default InfoPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
