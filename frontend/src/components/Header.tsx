import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from "../assets/logo.png";
import { useState } from 'react';



function Header() {
  const [search, setSearch] = useState('')

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={logo} alt="Logo" className={styles.headerLogo}/>
          <Link className={styles.brandLink} to='/'>Music Map</Link>
        </div>

        <nav className={styles.headerRight}>
            <input
            placeholder="search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
            <Link className={styles.btn} to="/theory/notes">Theory</Link>
            <Link className={styles.btn} to="/signup">Sign up/ Login</Link>
        </nav>
      </header>
    </>
  )
}

export default Header;