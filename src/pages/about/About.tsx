import Link from 'next/link'

import styles from './About.module.scss'
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
const About = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.name}>About me</h2>
        <p className={styles.detail}>
          I am a Software Engineer who loves to code and build things, located in Houston, TX. I
          enjoy turning concepts and designs into front end UI and solving complex problems with
          code.
        </p>
        <p>
          When I am not building web applications or coding, I can be found hanging out with my
          family, building something in the garage, or drinking coffee…. I’m always drinking coffee!
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
  )
}

export default About
