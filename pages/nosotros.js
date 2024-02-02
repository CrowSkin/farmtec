import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (

    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros'}
    >

    <main className="contenedor">
      <h2 className="heading">Nosotros</h2>

      <div className={styles.contenido}>

        <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"></Image>

        <div>


          <p>
          Somos una empresa con 8 años de experiencia en la provisión, implementación y mantenimiento de domótica en edificios inteligentes (green buildings).
          </p>

          <p>
          Ofrecemos soluciones integrales, a la medida de nuestro cliente, para la gestión y control del uso de recursos.
          Los beneficios que obtienen nuestros clientes son:
          </p>

          <ul>
            <li> Mayor seguridad para los usuarios en todos los niveles. </li>
            <li>Economizar gastos optimizando consumos.</li>
            <li>Realizar un aporte valioso al medio ambiente.</li>
            <li>Contamos con el compromiso de nuestra área comercial para brindar a nuestros clientes un servicio personalizado y On site, asegurando una excelente atención pre y post venta.</li>
          </ul>

        </div>

      </div>

    </main>
    </Layout>
  )
}
