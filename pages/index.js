import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
        <>
        <Head>
          <title>SEN | Home</title>
          <meta name="keywords" content="classlist" />
        </Head>
      <div>
          <h1 className={styles.title}>Homepage</h1>
          <p className={styles.text}>This is a list of Students in the department of Software Engineering.
            <br />There are a total of 66 students in the department. <br />You can click the button below to see the list of students in the department,with information about them.</p>
          <Link href="/classlist" className={styles.btn}>See Class List</Link>
      </div>
      </>
  )
}
