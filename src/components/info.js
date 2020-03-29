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
            <ul>
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
              <li>No salir de casa a menos que sea estrictamente necesario.</li>
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
          active={activeIndex === 10}
          index={10}
          onClick={handleClick}
        >
          ¿SE ESTÁN HACIENDO PRUEBAS PARA DIAGNOSTICAR LA INFECCIÓN?
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 10}
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

        <Accordion.Title
          active={activeIndex === 11}
          index={11}
          onClick={handleClick}
        >
          MITOS DEL CORONAVIRUS
        </Accordion.Title>
        <Accordion.Content
          className="transition-height"
          active={activeIndex === 11}
        >
          <p>
            <ol>
              <li>
                <b>El coronavirus desparecerá en los meses de verano:</b> 
                <br/><br/>
                Falso. Anteriores pandemias no siguieron patrones climatológicos,
                además que cuando llegue el verano, será invierno en el
                hemisferio sur. El virus es global.
              </li>
              <li>
                <b>
                  En verano el coronavirus se contagiará más rápido debido a las
                  picaduras de los mosquitos:
                </b>{" "}
                <br/><br/>
                Falso. Esta infección se contagia por gotas minúsculas que se
                salen de nuestras vías respiratorias y fluyen en el aire, no por
                sangre. Los mosquitos no tienen nada que ver con el contagio del
                coronavirus.
              </li>
              <li>
                <b>
                  Si puedes mantener la respiración más de 10 segundos puedes
                  estar seguro que no estás infectado de coronavirus:
                </b>{" "}
                <br/><br/>
                Falso. La mayoría de los pacientes jóvenes infectados con
                coronavirus pueden aguantar la respiración más de 10 segundos
                sin problemas. Por otro lado, la mayoría de los ancianos,
                infectados o no,no pueden.
              </li>
              <li>
                <b>
                  Si donas sangre el banco de sangre se encargará de hacerte la
                  prueba para saber si estás infectado de coronavirus:
                </b>{" "}
                <br/><br/>
                Falso. No hay ningún banco de sangre que esté haciendo estas
                pruebas. Si donas sangre que sea para ayudar a los demás.
              </li>
              <li>
                <b>
                  El coronavirus vive en la garganta por lo que si bebemos
                  grandes cantidades de agua el virus será empujado hacia el
                  estómago donde los ácidos gástricos lo matarán:
                </b>{" "}
                <br/><br/>
                Falso. El virus puede entrar por la garganta, pero penetra en
                las células del huésped. No puedes arrastrarlo hasta el
                estómago. Beber mucha agua sólo dará ganas de ir al baño.
              </li>
              <li>
                <b>
                  Todo esto de la cuarentena y el distanciamento social es una
                  exageración. Ya verás que el coronavirus no causa mucho daño:
                </b>{" "}
                <br/><br/>
                Falso. Si te da la impresión que no hay muchas infecciones es
                porque el distanciamiento social funciona, no porque el virus no
                sea tan contagioso.
              </li>
              <li>
                <b>
                  Los accidentes de coche causan 30.000 muertes al año. ¿A qué
                  viene tanto jaleo con el coronavirus?:
                </b>{" "}
                Los accidentes de coche no son contagiosos, sus muertes no se
                duplican cada 3 días, no causa pánico en masa o colapsa
                supermercados.
              </li>
              <li>
                <b>
                  Los desinfectantes para manos son mejores que el agua y el
                  jabón:
                </b>{" "}
                <br/><br/>
                Falso. El agua y el jabón en realidad matan y eliminan el virus
                de la piel (no puede penetrar en las células de la piel), además
                de limpiar la suciedad visible de las manos.
              </li>
              <li>
                <b>
                  Una de las mejores estrategias para prevenir COVID-19 es
                  limpiar cada pomo de puerta de su hogar con desinfectantes:
                </b>{" "}
                <br/><br/>
                Falso. Lavarse las manos / mantener una distancia de 2 metros es
                la mejor práctica. A menos que esté atendiendo a un paciente con
                COVID en su hogar, las superficies de su hogar no deberían ser
                un gran riesgo.
              </li>
              <li>
                <b>
                  COVID-19 fue difundido deliberadamente por (según la ideología
                  política de quien lo dice) el ejército estadounidense o chino:
                </b>{" "}
                <br/><br/>
                Falso. Este nuevo coronavirus es fruto de la evolución natural
                como lo han sido otros en el pasado: la gripe aviar, gripe
                porcina o SARS entre otros.
              </li>
              <li>
                <b>
                  Como cualquier otro virus, (COVID-19) tiene una baja vibración, 
                  con una estructura cerrada de circuito electromagnético, con una 
                  frecuencia de resonancia de aproximadamente 5,5 Hz – 14,5 Hz. 
                  En las gamas más altas no está activo y, a partir de las gamas 
                  de 25,5 Hz y superiores, el virus muere….
                  <br/><br/>
                  Para una persona que vive en altas vibraciones, es decir, en el Alma, 
                  no es más peligrosa que las infecciones respiratorias agudas, 
                  porque el cuerpo de un hombre sano «vibra» en las gamas más altas. 
                  Sólo ocasionalmente, por varias razones, se desliza en vibraciones más bajas.
                </b>{" "}
                <br/><br/>
                Falso. Este mensaje, basado en una entrada de blog, circula por WhatsApp  
                y no tiene validez científica en absoluto. Su discurso se basa en "vibraciones", 
                y en la fortaleza que supuestamente llegaríamos a conseguir a través sesiones 
                de meditación, lo cual no tiene ningún tipo de fundamento científico.
              </li>
            </ol>

            <small>
              Basado en las{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/FaheemYounus/status/1239710939630448647"
              >
                declaraciones del Dr. Faheem Younus
              </a>
              , jefe de enfermedades infecciosas de la universidad de Maryland. 
            </small>
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
