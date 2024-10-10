import Head from "next/head"
import styles from '../styles/about.module.css'

const About = () => {
  return (
        <>
      <Head>
        <title>SEN | About</title>
        <meta name="keywords" content="classlist" />
      </Head>
      <div className={styles.text}>
    <h1>About</h1>

    <h2>Class Representative: <span className={styles.small}>Adewuyi Peter Boluwatife</span></h2>
    <h2>Assistant Class Representative: <span className={styles.small}>Agbede Daniella Deyenfa</span></h2>
    <h2>Total Students: <span className={styles.small}>69 Students</span></h2>

      </div>
    </>
  )
}

export default About
