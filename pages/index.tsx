import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/SliderLib">Opcion 1 (lib)</Link>
      <Link href="/SliderCss">Opcion 2 (css)</Link>
      <Link href="/SliderCss2">Opcion 3 (css con movimiento con el click)</Link>
      <Link href="/SliderLib2">Opcion 4 (otra lib)</Link>
    </div>
  )
}

export default Home
