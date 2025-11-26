
import Header from '../components/Header';
import styles from '../styles/HomePage.module.css';
import { Link } from 'react-router-dom';
import musicsheet from '../assets/musicsheet.jpg';


function HomePage() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1 className={styles.h1}>Music Through Artistry</h1>
                    <div className={styles.details}>
                        <p className={styles.p}>Learning music theory doesn't have to feel like memorizing rules</p>
                        <p className={styles.p}>Try out our Theory Roadmap which will teach you musical concepts through some of your favorite songs</p>
                    </div>
                    <div className={styles.btnContainer}>
                        <div className={styles.btn}>
                            <Link className={styles.btn} to="/theory">Try Now</Link>
                        </div>
                        <div className={styles.btn2}>
                            <Link className={styles.btn2} to="/about">About</Link>
                        </div>  
                    </div>
                </div>
            </div>


            <div className={styles.mainContainer}>
                <img src={musicsheet} alt="Music Sheet"/>
                <div className={styles.textContainer}>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.h1}>Genre Defining Progressions </h1>
                    </div>
                    <div className={styles.pContainer}>
                        <p className={styles.p}>Stop guessing and start creating. Explore the blueprint behind your favorite styles and learn exactly how to turn a simple chord loop into a genre-defining anthem.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default HomePage;