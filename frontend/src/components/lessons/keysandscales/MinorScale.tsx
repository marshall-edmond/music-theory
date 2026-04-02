import styles from '../../../styles/Theory.module.css';
import Piano from '../../Piano';
import LessonLayout from '../../LessonLayout';
import { GiGrandPiano } from 'react-icons/gi';
import { useState } from 'react';
import { minorScale } from '../../../music/MinorFormula';

export default function MinorScale(){
    const [scale, setMinorScale] = useState<string[]>([]);

    //function to get the minorscale
    const getMinorScale = (root: string) => {
        setMinorScale(minorScale(root));
    };

    const leftContent = (
        <>
            <h1 className={styles.h1}>Minor Scale</h1>
            <section className={styles.pianoIcon}>
                <GiGrandPiano size={32}/>
            </section>
            <p className={styles.p}>The minor scale is associated with a sad or darker sound. Just like creating a major scale, to build a minor scale we'll use <b>semitones</b> and <b>tones</b>. </p>
            <p className={styles.p}>The formula to calculate any natural minor scale is <b>Whole - Half - Whole - Whole - Half - Whole - Whole.</b></p>
            <p className={styles.p}>Select any root note on the piano to see its minor scale.</p>
            <p className={styles.p}>Its very important to familiarize yourself with building the major and minor scales as it will be necassary for the next test.</p>
        </>
    )

    const rightContent = (
        <Piano activeNotes={scale} onNoteSelect={getMinorScale}/>
    )

    return (
        <LessonLayout left={leftContent} right={rightContent}/>
    )
}
