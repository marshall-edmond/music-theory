import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from "../assets/logo.png";
import { useState } from 'react';



function Header() {
  const [search, setSearch] = useState('')
  //displays 
  const [results, setResults] = useState(false)

// fetch top 5 songs from song api
  async function Results (){
    

  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={logo} alt="Logo" className={styles.headerLogo}/>
          <Link className={styles.brandLink} to='/'>Music Map</Link>
        </div>

        <nav className={styles.headerRight}>
            <div className={styles.searchContainer}>
              <input className={styles.search}
              placeholder="search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              />

              {results && (
                <div className={styles.song}></div>
              )}
            </div>
            <Link className={styles.btn} to="/theory/notes">Theory</Link>
            <Link className={styles.btn} to="/signup">Sign up/ Login</Link>
        </nav>
      </header>
    </>
  )
}

export default Header;