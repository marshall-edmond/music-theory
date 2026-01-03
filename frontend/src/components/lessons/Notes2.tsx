import styles from '../../styles/Theory.module.css';
import Piano from '../Piano';
import LessonLayout from '../LessonLayout';
import { GiGrandPiano } from 'react-icons/gi';


export default function Notes2() {

    const leftContent = (
        <>
            <h1 className={styles.h1}>Octaves</h1>
            <section className={styles.pianoIcon}>
                < GiGrandPiano size={32}/>
                <p className={styles.p}>2 min. reading</p>
            </section>
            <p className={styles.p}>
                The latin prefix <b>'Oct-'</b> simply means 8. We've established that we have 7 natural notes in western music, so what happens after A through G? Simple, we land back at A. The term octave 
                 represents the distance between two of the same notes. If you count from an A4 to an A5 (counting A4 as 1) it takes exactly 8 <span style={{fontStyle:'italic'}}>white</span> keys.
            </p>
            <p className={styles.p}>To understand why this works, remember the definition of a note. Every note has a mapped frequency, e.g. 440 Hz (A4), when you play an octave the frequency is either doubled or halved.</p>
        </>
    )

    const rightContent = (
        <Piano />
    )

    return (
        <LessonLayout
            left = {leftContent}
            right = {rightContent}
        />
    )
    }
