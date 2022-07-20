import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/SliderLib">Opcion 1 (lib)</Link>
      <Link href="/SliderCss">Opcion 2 (css)</Link>
    </div>
  )
}

export default Home
