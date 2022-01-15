import { useRouter } from 'next/router'
import LinkDisplay from '@components/LinkDisplay'
import DrawerToggleButton from '@components/SideDrawer/DrawerToggle'
import styles from './Nav.module.scss'

interface Props {
  sideDrawerOpen: boolean
  drawerToggleClickHandler: () => void
}

const Nav = ({ sideDrawerOpen, drawerToggleClickHandler }: Props) => {
  const router = useRouter()

  const goToHomePage = () => {
    router.pathname === '/' && window.location.reload()
  }
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.nav__container}>
          <LinkDisplay link="/">
            <a onClick={goToHomePage}>
              <img className={styles.nav__image} src="/images/JD-Develop-white.png" alt="Logo" />
            </a>
          </LinkDisplay>
          <DrawerToggleButton show={sideDrawerOpen} click={drawerToggleClickHandler} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
