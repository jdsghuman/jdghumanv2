import Link from 'next/link'
import styles from '../../styles/About.module.scss'
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import Meta from '@components/Meta'
import { MetaTags, PageType, RobotsContent } from '@components/PropTypes/Tags'

const About = () => {
  const postMetaTags: MetaTags = {
    canonical: 'https://www.jdghuman.com/about',
    description: `Software Engineer | Front End Engingeer based out of Houston, TX`,
    image: 'https://www.jdghuman.com/images/JD-Develop.png',
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `jdGhuman | About`,
    type: PageType.website,
  }

  return (
    <>
      <Meta tags={postMetaTags} />
      <div className={styles.section}>
        <div className={styles.section__container}>
          <h1 className={styles.name}>About me</h1>
          <p className={styles.detail}>
            I am a Software Engineer who loves to code and build things, located in Houston, TX. I
            enjoy turning concepts and designs into front end UI and solving complex problems with
            code.
          </p>
          <p>
            When I am not building web applications or coding, I can be found hanging out with my
            family, building something in the garage, or drinking coffee…. I’m always drinking
            coffee!
          </p>
          <div className={styles.social}>
            <Link href="https://github.com/jdsghuman">
              <a target="_blank">
                <AiFillGithub className={styles.social__icon} />
              </a>
            </Link>
            <Link href="mailto:jdsghuman@gmail.com">
              <a target="_blank">
                <AiOutlineMail className={styles.social__icon} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/jdghuman">
              <a target="_blank">
                <AiFillLinkedin className={styles.social__icon} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
