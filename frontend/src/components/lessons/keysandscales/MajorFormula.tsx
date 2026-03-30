import styles from '../../../styles/Theory.module.css';
import Piano from '../../Piano';
import LessonLayout from '../../LessonLayout';
import { GiGrandPiano } from 'react-icons/gi';
import { useState } from 'react';
import { majorScale } from '../../../music/MajorScale';

export default function MajorFormula(){
        //function to pass
        const [scale, setMajorScale] = useState<string[]>([]);
        
        //function to get root from piano and return the major scale for the root
        const getMajorScale = (root: string) => {
            setMajorScale(majorScale(root));
            console.log(root);
        };

        console.log(scale)

        const leftContent = (
            <>
                <h1 className={styles.h1}>Major Formula</h1>
                <section className={styles.pianoIcon}>
                    <GiGrandPiano size={32}/>
                </section>
                <p className={styles.p}>The major scale is associated with a happy sound. In order to create a major scale, remember the intervals <b>half tones</b> and <b>whole tones</b>.</p>
                <p className={styles.p}>The formula to calculate any major scale is <b>Whole - Whole - Half - Whole - Whole - Whole - Half.</b></p>
                <p className={styles.p}></p>
            </>
        )

        const rightContent = (
            <Piano activeNotes={scale} onNoteSelect={getMajorScale}/>
        )
    return (
        <LessonLayout left={leftContent} right={rightContent}/>
    )
}
