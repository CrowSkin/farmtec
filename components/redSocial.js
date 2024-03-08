import Image from "next/image"
import styles from '../styles/header.module.css'

export default function RedSocial({redSocial}) {

  return (
    <div className={styles.tarjeta}>
      <Image src={`/img/${redSocial}.svg`} width={50} height={50} alt={`icono ${redSocial}`} />
    </div>
  )
}
