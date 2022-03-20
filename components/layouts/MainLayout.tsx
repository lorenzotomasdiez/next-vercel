import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'
export const MainLayout:FC = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About| My Page</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar /> 
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
