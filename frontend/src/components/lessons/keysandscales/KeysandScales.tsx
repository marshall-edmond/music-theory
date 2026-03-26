import styles from '../../../styles/Theory.module.css';
import LessonLayout from '../../LessonLayout';
import { GiGrandPiano } from 'react-icons/gi';
import Piano from '../../Piano';

export default function KeysandScales(){

    const leftContent = (
        <>
            <h1 className={styles.h1}>What is a Scale?</h1>
            <div className={styles.pianoIcon}>
                <GiGrandPiano size={32}/>
            </div>
            <p className={styles.p}>A scale is a group of notes played in sequential order. A scale can be played increasing or decreasing, two of the most prominent scales within western music are the major and minor scale.</p>
            <p className={styles.p}> C Major scale: <b>C, D, E, F, G, A, B,</b></p>
            <p className={styles.p}>Scales are the foundation for creating music as they allow for the creation of melodies and chords.</p>
            <p className={styles.p}>Before diving into the major and minor scales there are rules for scales which are important to follow.</p>
        </>
    )

    const rightContent = (
        <>
            <Piano />
        </>
    )


    return (
        <LessonLayout left={leftContent} right={rightContent}/>
    )
}