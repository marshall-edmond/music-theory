import styles from '../../styles/Debrief.module.css';
import logo_circle from '../../assets/logo_circle.png';

export default function IntroInterval(){

    return (
        <div className={styles.mainContainer}>
            <div className={styles.pageFrame}>
                <img src={logo_circle} className={styles.logo} alt='logo'/>
                <div className={styles.title}>
                    Section 2: Intervals Part 1
                </div>
                <div className={styles.text}>
                    In the first section: Notes, we covered what makes a note and how it's notated, as well as how the different notes sit on a piano.
                </div>
                <div className={styles.text}>
                    Welcome to the 2nd section of your music theory course. In this section we will cover <b>Intervals</b>. Intervals are key to understanding how to navigate and calculate the distance between notes . In this section we will discuss whole and half tones(also known as steps).
                </div>
                <div className={styles.text}>
                    This section will be split into two parts, this first part is to build a very basic grasp of whole and half steps/tones to build the bridge between keys and scales.
                </div>
                <div className={styles.bottom}>
                    After we go over keys and scales, we will return back to intervals to give labels to the distances of different notes.
                </div>
            </div>
        </div>
    );
}