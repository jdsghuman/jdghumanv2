import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '@styles/Home.module.scss'
import Button from '@components/Button'
import Router from 'next/router'
import Meta from '@components/Meta'
import { MetaTags, PageType, RobotsContent } from '@components/PropTypes/Tags'

const Home: NextPage = () => {
  const viewProjects = () => {
    Router.push('/projects')
  }

  const postMetaTags: MetaTags = {
    canonical: 'https://www.jdghuman.com',
    description: `Software Engineer | Front End Engingeer based out of Houston, TX`,
    image: 'https://www.jdghuman.com/images/JD-Develop.png',
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `jdGhuman`,
    type: PageType.website,
  }

  return (
    <>
      <Meta tags={postMetaTags} />
      <section className={styles.showcase}>
        <video src="dev.mp4" muted loop autoPlay playsInline />
        <div className={styles.overlay}></div>
        <div className={styles.section}>
          <div className={styles.section__container}>
            <div className={styles.text}>
              <h1>JD Ghuman</h1>
              <h3>
                I am a software engineer based out of Houston, TX and build web applications for
                desktop and mobile.
              </h3>
              <Button type="button" onClick={viewProjects} className={styles.button__main}>
                Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
