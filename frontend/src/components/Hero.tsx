import styles from '../styles/HomPage.module.css';
import { Link } from 'react-router-dom';
import never from '../assets/never.jpg';
import musicsheet from '../assets/musicsheet.jpg';


function Hero() {
    return (
        <>
            <div className={styles.container}>
                <img src={never} alt="never enough" className={styles.backgroundImage}/>
                <div className={styles.hero}>
                    <div className={styles.h1}>
                        <h1>Music Through Artistry</h1>
                    </div>
                </div>
                <div className={styles.p}>
                    <p>Learning music theory doesn't have to feel like memorizing rules</p>
                </div>
                <div className={styles.p2}>
                    <p>Try out our Theory Roadmap which will teach you musical concepts through some of your favorite songs</p>
                </div>
                <div className="btn">
                    <Link className={styles.btn} to="/theory">Try Now</Link>
                </div>
                <div className="btn2">
                <Link className={styles.btn2} to="/about">About</Link>
            </div>
        </div>
        <div className={styles.maincontainer}>
            <img src={musicsheet} alt="music sheet" className={styles.musicsheet}/>
            <div className={styles.maintext}>
                <h1 className={styles.maintext}>Generate Chords</h1>
            </div>
            <div className={styles.subheading}>
                <p className={styles.subheading}>Beginner Musician? Find an artist and generate similarly styled chord progressions</p>
            </div>
        </div>
        </>
    );
}

export default Hero;