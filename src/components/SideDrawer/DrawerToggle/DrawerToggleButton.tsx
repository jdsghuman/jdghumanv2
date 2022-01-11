import classNames from 'classnames/bind'
import styles from './DrawerToggleButton.module.scss'

const cx = classNames.bind(styles)

interface DrawerToggleType {
  click: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  show: boolean
}

const DrawerToggleButton = ({ click, show }: DrawerToggleType) => (
  <button className={styles.toggle} onClick={click}>
    <div id={styles.nav__icon} className={cx({ open: show })} onClick={click}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
)

export default DrawerToggleButton
