import Link from 'next/link'
import styles from '../styles/soluciones.module.css'

export default function Solucion ({solucion}) {

    const { nombre, descripcion, url } = solucion

  return (
    <div className={styles.soluciones}>
        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <Link href={`/soluciones/${url}`} className={styles.enlace}>
                Ver Solucion
            </Link>
        </div>
    </div>
  )
}