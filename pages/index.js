import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const clickMe = () => {
    alert("yeshh")
  }
  return (
    <div className={styles.container}>
     <button onClick={clickMe}>Click Me</button>
    </div>
  )
}
