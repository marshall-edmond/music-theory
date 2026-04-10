import LessonLayout from '../../LessonLayout';
import { GiGrandPiano } from 'react-icons/gi';
import Piano from '../../Piano';
import styles from '../../../styles/Theory.module.css';



export default function Chords (){

    const leftContent = (
        <>
            <h1 className={styles.h1}> What is a chord?</h1>
            <section className={styles.pianoIcon}>
                 < GiGrandPiano size={32}/>
                 <p className={styles.piano}>2 min. reading</p>
            </section>

            <p className={styles.p}> A chord is a group of notes which are played simultaneously. The most common type of chord is a <b>triad</b>, which is composed of strictly 3 notes.</p>
            <p className={styles.p}> Triads typically contain some variation of a <b>root</b> note, a <b>third</b> and a <b>fifth</b>. We'll practice building major and minor triads(chords) and later down the line we'll discuss diminished triads.</p>
            <p className={styles.p}> C major triad: <b>C, E, G</b></p>
            <p className={styles.p}> We'll start by building major and minor triads, then explore others like diminished triads later on.</p>
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