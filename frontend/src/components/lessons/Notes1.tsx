import LessonLayout from '.././LessonLayout.tsx';
import Piano from '../Piano';
import styles from '../../styles/Theory.module.css';
import { GiGrandPiano } from 'react-icons/gi';


export default function Notes1() {

    const LeftContent = (
        <>
            <h1 className={styles.h1}>Notes</h1>
            <section className={styles.pianoIcon}>
                <GiGrandPiano size={32}/>
                <p className={styles.piano}>3 min. reading</p>
            </section>
            <p className={styles.p}>
                Alright, now that we know what notes are let's see how they interact on a piano. The white keys on the piano hold the natural notes (A,B,C,D,E,F,G) and the black keys hold the accidentals(♭, #). The C4 note sits in the middle of a standard 88 key keyboard, and it is recognized as being the white key before the two black keys.
            </p>
            <p className={styles.p}>
                <b>Sharp(#):</b> The note immediately to the right is given a sharp (higher in pitch).
            </p>
            <p className={styles.p}>
                <b>Flat(♭):</b> The note immediately to the left is given a flat (lower in pitch).
            </p>
            <p className={styles.p}>
                These previously discussed 12 notes, black and white, repeat around the entirety of the piano. The black notes have two different names but they are named relative to the notes next to them. They are given either a flat(♭), or a sharp(#) which indicates whether it's before or after the note. For example, the black note directly to the right of the C is called a C#, but it can also be referred to as a D♭. This is called <b>Enharmonic Equivalent</b>,  we'll go more in depth about the rules of this later, but for now it's important to practice naming the black notes.
            </p>
            
        </>

    )

    const RightContent = (
        <>
            <Piano />
        </>
    )

    return (
        <LessonLayout
            left={LeftContent}
            right={RightContent}
        />
    )
} 