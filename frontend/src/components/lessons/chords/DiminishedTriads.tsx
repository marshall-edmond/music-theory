import LessonLayout from "../../LessonLayout";
import styles from '../../../styles/Theory.module.css';
import { useState } from 'react';
import Piano from '../../Piano';
import { GiGrandPiano } from "react-icons/gi";
import { Diminished } from '../../../music/Diminished.tsx';



export default function MinorTriads(){
    //
    const [triad, setTriad] = useState<string[]>([]);

    //function to generate triad
    const generateTriad = (note: string) => {
        const scale : string[] = Diminished(note)

        setTriad(scale);
    }
    const leftContent = (
        <>
            <h1 className={styles.h1}>Diminshed Triads</h1>
            <section className={styles.pianoIcon}>
                <GiGrandPiano size={32}/>
                <p className={styles.piano}>2 min. reading</p>
            </section>
            <p className={styles.p}>Diminished chords create a lot of tension, and make a dark and almost eerie sound.</p>            
            <p className={styles.p}>The logic to create a diminished chord differs from that of the major and minor triads. A diminished chord is made up of the root, the flattened 3rd (also called a minor 3rd) and a flattened 5th (also called a diminished 5th) degree.</p>
            <p className={styles.p}>C Diminished : <b>C</b>, <b>Eb</b>, <b>Gb</b></p>
            <p className={styles.p}>Select any note on the piano to generate the diminished triad of the root.</p>
        </>
    )
    const rightContent = (
        <Piano activeNotes={triad} onNoteSelect={generateTriad}/>
    )
    return (
        <LessonLayout left={leftContent} right={rightContent}/>
    )
}