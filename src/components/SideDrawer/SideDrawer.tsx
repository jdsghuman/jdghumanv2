/* eslint-disable @next/next/no-img-element */
import LinkDisplay from '@components/LinkDisplay'
import classNames from 'classnames/bind'
import styles from './SideDrawer.module.scss'

const cx = classNames.bind(styles)

interface SideDrawerToggleType {
  click: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  show: boolean
}

const SideDrawer = ({ click, show }: SideDrawerToggleType) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <nav
      onClick={click}
      className={cx('drawer', {
        'drawer--open': show,
      })}
    >
      <div onClick={click} className={styles.drawer__header}>
        <LinkDisplay link="/">
          <img className={styles.drawer__image} alt="logo" src="/images/JD-Develop-white.png" />
        </LinkDisplay>
      </div>
      <div className={styles.drawer__item}>
        <LinkDisplay link="/">
          <a>Home</a>
        </LinkDisplay>
      </div>
      <div className={styles.drawer__item}>
        <LinkDisplay link="/projects">
          <a>Projects</a>
        </LinkDisplay>
      </div>
      <div className={styles.drawer__item}>
        <LinkDisplay link="/about">
          <a>About</a>
        </LinkDisplay>
      </div>
    </nav>
  )
}

export default SideDrawer
