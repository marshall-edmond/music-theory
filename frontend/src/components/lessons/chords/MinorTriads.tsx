import LessonLayout from "../../LessonLayout";
import styles from '../../../styles/Theory.module.css';
import { useState } from 'react';
import Piano from '../../Piano';
import { GiGrandPiano } from "react-icons/gi";
import { MinorTr } from '../../../music/MinorTr.tsx';

export default function MinorTriads(){
    //
    const [triad, setTriad] = useState<string[]>([]);

    //function to generate triad
    const generateTriad = (note: string) => {
        const scale : string[] = MinorTr(note)

        setTriad(scale);
    }
    const leftContent = (
        <>
            <h1 className={styles.h1}>Minor Triads</h1>
            <section className={styles.pianoIcon}>
                <GiGrandPiano size={32}/>
                <p className={styles.piano}>2 min. reading</p>
            </section>
            <p className={styles.p}>The minor chord/triad is built on the minor scale. Just like the major triad, the minor triad is built on the 1st, 3rd and 5th degrees of the minor scale.</p>
            <p className={styles.p}>Also worth noting, a minor chord is the equivalent of taking the major chord of the root and lowering the 3rd by a semitone.</p>
            <p className={styles.p}>Select any note on the piano to generate the minor chord/triad of the root.</p>
        </>
    )
    const rightContent = (
        <Piano activeNotes={triad} onNoteSelect={generateTriad}/>
    )
    return (
        <LessonLayout left={leftContent} right={rightContent}/>
    )
}