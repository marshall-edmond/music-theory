import { Link } from 'react-router-dom'
import styles from '../styles/FakeHeader.module.css';
import logo from '../assets/logo.png';


function FakeHeader() {
    return (
        <>
            <div className= {styles.header}>
                <div className= {styles.headerLeft}>
                    <img src={logo} alt="/logo.png" className={styles.headerLogo}/>
                    <Link to="/" className={styles.brandLink}>
                        <h3>Music Map</h3>
                    </Link>
                </div>

                <div className= {styles.headerRight}>
                    <Link to="/theory" className={styles.btn}>
                        <h1>Theory</h1>
                    </Link>
                    <Link to="/about" className={styles.btn}>
                        <h1>About</h1>
                    </Link>
                    <Link to="/generate" className= {styles.btn}>
                        <h1>Generate</h1>
                    </Link>
                </div>
            </div>
    
        </>
    )
}


export default FakeHeader;