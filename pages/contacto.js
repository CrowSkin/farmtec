import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../styles/contacto.module.css"

export default function Contacto() {
  return (

    <Layout
        title={'Contacto'}
        description={'Formas de contactarnos'}
    >

    <main className="contenedor">
      
    <div className="">
      <h2 className="heading">Contacto</h2>

        <div className={styles.tarjeta}>
            <Image src="/img/whatsapp.svg" width={50} height={50} alt='icono whatsapp' />
            <h3>Hacenos tu consulta por Whatsapp</h3>
        </div>

        <h2 className="heading">Seguinos en las redes sociales</h2>

      <div className={styles.barra}>
        
        <div className={styles.tarjeta}>
            <Image src="/img/facebook.svg" width={50} height={50} alt='icono facebook' />
        </div>

        <div className={styles.tarjeta}>
            <Image src="/img/instagram.svg" width={50} height={50} alt='icono instagram' />
        </div>

        <div className={styles.tarjeta}>
            <Image src="/img/youtube.svg" width={50} height={50} alt='icono youtube' />
        </div>

        <div className={styles.tarjeta}>
            <Image src="/img/X.svg" width={50} height={50} alt='icono X' />
        </div>

        <div className={styles.tarjeta}>
            <Image src="/img/linkedin.svg" width={50} height={50} alt='icono linkedin' />
        </div>

      </div>
    </div>

    </main>
    </Layout>
  )
}
