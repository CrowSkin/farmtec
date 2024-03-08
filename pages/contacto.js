import Layout from "@/components/layout"
import RedSocial from "@/components/redSocial"
import Image from "next/image"
import styles from "../styles/contacto.module.css"

export default function Contacto() {

  const iconosRedes = [
    'facebook',
    'instagram',
    'youtube',
    'X',
    'linkedin'
  ]

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

        { iconosRedes.map( red => <RedSocial redSocial={red} />)}
        

      </div>
    </div>

    </main>
    </Layout>
  )
}
