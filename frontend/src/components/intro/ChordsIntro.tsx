import styles from '../../styles/Debrief.module.css';
import logo_circle from '../../assets/logo_circle.png';

export default function ChordsIntro(){
    return (
        <div className={styles.mainContainer}>
            <div className={styles.pageFrame}>
                <img src={logo_circle} alt="Circle Logo" className={styles.logo}/>

                <div className={styles.title}>
                    Section 4 : Chords
                </div>
                <div className={styles.text}>
                    Congrats on making it this far into the course. We've covered a lot of ground from notes, intervals, to keys and scales to now chords.
                </div>
                <div className={styles.text}>
                    Chords are arguablely the most important component of music, as once you know and understand chords you can pretty much play whatever song you'd like.
                </div> 
                <div className={styles.bottom}>
                    In this section we'll cover what makes a chord, basic major and minor triads, diminished triads, 7th chords, diatonic chords, and top it off with basic chord progressions. This will be the final and most challenging portion of this beginners music theory course. This section will combine all of the gained knowledge from the previous sections so if you're ever lost please refer back to previous lessons.
                </div>
            </div>
        </div>
    )
}