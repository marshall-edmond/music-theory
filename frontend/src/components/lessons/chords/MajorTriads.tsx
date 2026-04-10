import LessonLayout from '../../LessonLayout';
import Piano from '../../Piano';
import { GiGrandPiano } from 'react-icons/gi';
import styles from '../../../styles/Theory.module.css';
import { useState } from 'react';
import { MajorTr } from '../../../music/MajorTr.tsx';


export default function MajorTriads(){

    //chord to pass to onNoteSelect
    const [triad, setTriad] =  useState<string[]>([]);

    //set state of triad by generating major triad for the note.
    const getTriad = (root: string) => {
        const scale = MajorTr(root)
        console.log(scale)
        setTriad(scale)

}
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