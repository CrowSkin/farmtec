import Layout from "@/components/layout"
import styles from "../styles/grid.module.css"
import Solucion from "../components/solucion"
import {SOLUCIONES} from "../constants/index.js"

export default function Soluciones() {

  return (

    <Layout
        title={'Soluciones'}
        description={'Todos nuestros servicios'}
    >

    <main className="contenedor">
      <h2 className="heading">Nuestras soluciones</h2>
      <div className={styles.grid}>
        {SOLUCIONES?.map(solucion => (
          <>
          <Solucion
          key={solucion.id}
          solucion={solucion}
          />
          </>
        ))}
      </div>
    </main>

    </Layout>
  )
}
