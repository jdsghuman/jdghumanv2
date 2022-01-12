import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '@styles/Home.module.scss'
import Button from '@components/Button'
import Router from 'next/router'

const Home: NextPage = () => {
  const viewProjects = () => {
    Router.push('/projects')
  }
  return (
    <section className={styles.showcase}>
      <video src="dev.mp4" muted loop autoPlay />
      <div className={styles.overlay}></div>
      <div className={styles.text}>
        <h2>JD Ghuman</h2>
        <h3>
          I'm a software engineer based out of Houston, TX and build web applications for desktop
          and mobile.
        </h3>
        <Button type="button" onClick={viewProjects} className={styles.button__main}>
          Projects
        </Button>
      </div>
    </section>
  )
}

export default Home
