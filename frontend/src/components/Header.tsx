import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={logo} alt="Logo" className={styles.headerLogo}/>
          <Link className={styles.brandLink} to='/'>Music Map</Link>
        </div>

        <nav className={styles.headerRight}>
            <Link className={styles.btn} to="/theory/notes">Theory</Link>
            <Link className={styles.btn} to="/about">About</Link>
            <Link className={styles.btn} to="/generate">Generate</Link>
        </nav>
      </header>
    </>
  )
}

export default Header;