import LessonLayout from '../../LessonLayout';
import Piano from '../../Piano';
import { GiGrandPiano } from 'react-icons/gi';
import styles from '../../../styles/Theory.module.css';
import { useState } from 'react';
import { majorTriads } from '../../../music/MajorTr';

const [triad, setTriad] =  useState<string[]>([]);

//set state of triad by generating major triad for the note.
const getTriad = (root: string) => {
    setTriad(majorTriads(root))
}
export default function MajorTriads(){
    const leftContent = (
        <>  
            <h1 className={styles.h1}>Major Triads</h1>
            <section className={styles.pianoIcon}>
                <GiGrandPiano size={32}/>
                <p className={styles.piano}> 3 min. reading</p>
            </section>
        </>
    )

    const rightContent = (
        <>
            <Piano activeNotes={triad} onNoteSelect={getTriad}/>
        </>
    )
    return (
        <LessonLayout left={leftContent} right={rightContent} />
    )
}