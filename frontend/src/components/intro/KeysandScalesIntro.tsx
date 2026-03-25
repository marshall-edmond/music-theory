import styles from '../../styles/Debrief.module.css';
import Piano from '../Piano';

export default function KeysandScalesIntro (){
    return(
            <div className={styles.mainContainer}>
                <div className={styles.pageFrame}>
                    <div className={styles.title}>
                        Section 3: Keys and Scales
                    </div>
                    <div className={styles.text}>
                        In the last section we briefly covered semitones and whole tones. Semitones and whole tones create the foundation for keys and scales.
                    </div>
                    <div className={styles.text}>
                        This section is going to build off of previously taught knowledge so refer to past lessons if there's any confusion at all. Keys are an essential part of every song. Every song has a key (and sometimes 2), and it can either be major or minor.
                    </div>
                    <div className={styles.text}>
                        Scales are the building block to creating and understanding chords. In this section we'll discover the major and minor scales, and by the end of this section you will be able to build the major and minor scales of any key. Below is the C major scale.
                    </div>
                    <Piano activeNotes={['C4', 'D4','E4','F4','G4','A4','B4']}/>
                </div>
            </div>
    )
}