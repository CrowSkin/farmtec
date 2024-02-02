import Link from "next/link"
import styles from "../styles/footer.module.css"


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className= {`contenedor ${styles.contenido}`}>

        <nav className={styles.navegacion}>

          <Link href="/">
              Inicio
          </Link>

          <Link href="/soluciones">
              Soluciones
          </Link>

          <Link href="/nosotros">
              Nosotros
          </Link>

        </nav>

      </div>
    </footer>
  )
}
