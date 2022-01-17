import Link from 'next/link'
import Image from 'next/image'
import blImage from '../../../public/images/bobbieleelicious.jpg'
import styles from './Projects.module.scss'
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import Meta from '@components/Meta'
import { MetaTags, PageType, RobotsContent } from '@components/PropTypes/Tags'

const Projects = () => {
  const postMetaTags: MetaTags = {
    canonical: 'https://www.jdghuman.com',
    description: `Software Engineer | Front End Engingeer based out of Houston, TX`,
    image: 'https://www.jdghuman.com/images/JD-Develop.png',
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `jdGhuman | Projects`,
    type: PageType.website,
  }

  return (
    <>
      <Meta tags={postMetaTags} />
      <div className={styles.section}>
        <div className={styles.section__container}>
          <div className={styles.project}>
            <h2 className={styles.name}>Bobbieleelicious</h2>
            <Image src={blImage} alt="Bobbieleelicious" placeholder="blur" />

            <p className={styles.detail}>
              A modern jamstack application using Next.js, built for performance, scalability, and
              maintainability.{' '}
            </p>
            <div className={styles.link__container}>
              <Link href="https://bobbieleelicious.com">
                <a target="_blank">
                  <BiLinkExternal className={styles.icons} />
                </a>
              </Link>
              <Link href="https://github.com/jdsghuman">
                <a target="_blank">
                  <AiFillGithub className={styles.icons} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
