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
        const scale : string[] = MajorTr(root)
        setTriad(scale)

}
    const leftContent = (
        <>  
            <h1 className={styles.h1}>Major Triads</h1>
            <section className={styles.pianoIcon}>
                <GiGrandPiano size={32}/>
                <p className={styles.piano}> 3 min. reading</p>
            </section>
            <p className={styles.p}> Constructing triads directly uses the major scale. We've learned the formula for building major scales is <b>W-W-H-W-W-W-H</b>. The major triad is built by the root, third degree, and 5th degree of the major scale of any key.</p>
            <p className={styles.p}>Select any note on the piano to generate the major chord of that root.</p>
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