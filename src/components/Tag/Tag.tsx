import styles from './Tag.module.scss'

const Tag = ({ tag }: { tag: string }) => {
  return <div className={styles.tag__item}>{tag}</div>
}

export default Tag
