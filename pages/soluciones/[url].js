import styles from '../../styles/soluciones.module.css'
import Layout from '@/components/layout'
import { SOLUCIONES } from '@/constants/index'

export default function Solucion({solucion}) {

    const { nombre, url } = JSON.parse(solucion)[0]

    // Debería obtener la descripción tambien en la linea de arriba pero no pude hacerlo andar. Workaround:
    const lista = SOLUCIONES.filter( sol => sol.nombre === nombre)

    const descripcion = lista[0].descripcion
    

  return (
    <Layout
    title={url}
    description={`Solucion ${url}`}>
        <div className={styles.soluciones}>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}> {descripcion} </p>
            </div>
         </div>
    </Layout>
  )
}

export function getStaticPaths() {
    
    const paths = SOLUCIONES.map(solucion => ({
        params: {
            url: solucion.url
        }
    }))
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({params: { url }}) {
    const solucion = JSON.stringify(SOLUCIONES.filter(sol => sol.url === url))
    return {
        props: {
            solucion
        }
    }
}