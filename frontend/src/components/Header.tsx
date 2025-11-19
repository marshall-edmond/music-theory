import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';

function Header() {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src="/logo.png" alt="Logo" className={styles.headerLogo}/>
        <Link to='/' className={styles.brandLink}>
          <h3>Music Map</h3>
        </Link>
      </div>

      <div className="header-right">
          <Link className="btn" to="/theory">Theory</Link>
          <Link className="btn" to="/about">About</Link>
          <Link className='btn' to="/generate">Generate</Link>
      </div>
    </header>
    </>
  )
}

export default Header;