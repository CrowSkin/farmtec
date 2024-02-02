import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

export default function Header() {

    const router = useRouter()

  return (
    <header className= {styles.header}>
        <div className={`contenedor ${styles.barra}`}>

            <Link href={'/'}>
                <Image src="/img/logo.jpg" width={300} height={40} alt='imagen logotipo' />
            </Link>

            <nav className= {styles.navegacion}>
                <Link href="/" className={ router.pathname === '/' ? styles.active : ''}>
                    Inicio
                </Link>

                <Link href="/soluciones" className={ router.pathname === '/soluciones' ? styles.active : ''}>
                    Soluciones
                </Link>

                <Link href="/nosotros" className={ router.pathname === '/nosotros' ? styles.active : ''}>
                    Nosotros
                </Link>

            </nav>
        </div>
    </header>
  )
}
