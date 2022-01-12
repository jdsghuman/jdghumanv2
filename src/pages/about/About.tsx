import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.name}>About me</h2>
        <p className={styles.detail}>
          I am a Full Stack Software Engineer who loves to code and build things, located in
          Houston, TX. I enjoy turning concepts and designs into front end UI and solving complex
          problems with code.
        </p>
        <p>
          When I am not building web applications or coding, I can be found hanging out with my
          family, building something in the garage, or drinking coffee…. I’m always drinking coffee!
        </p>
      </div>
    </div>
  )
}

export default About
