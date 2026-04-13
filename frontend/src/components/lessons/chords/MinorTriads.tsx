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
        </>
    )
    const rightContent = (
        <Piano activeNotes={triad} onNoteSelect={generateTriad}/>
    )
    return (
        <LessonLayout left={leftContent} right={rightContent}/>
    )
}