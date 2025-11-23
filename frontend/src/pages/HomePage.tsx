
import Header from '../components/Header';
import styles from '../styles/HomePage.module.css';
import { Link } from 'react-router-dom';


function HomePage(){
    return (
        <div>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.hero}>
                    <div className={styles.h1}>
                        <h1>Music Through Artistry</h1>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.p}>
                            <p>Learning music theory doesn't have to feel like memorizing rules</p>
                        </div>
                        <div className={styles.p}>
                            <p>Try out our Theory Roadmap which will teach you musical concepts through some of your favorite songs</p>
                        </div>
                    </div>
                    <div className={styles.btnContainter}>
                        <div className={styles.btn}>
                            <Link className={styles.btn} to="/theory">Try Now</Link>
                        </div>
                        <div className={styles.btn2}>
                            <Link className={styles.btn2} to="/about">About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default HomePage;