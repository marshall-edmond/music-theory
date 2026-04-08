import styles from '../../../styles/Theory.module.css';
import Piano from '../../Piano';
import LessonLayout from '../../LessonLayout';
import { GiGrandPiano } from 'react-icons/gi';
import { useState } from 'react';
import { majorScale } from '../../../music/MajorFormula';
import { minorScale } from '../../../music/MinorFormula';

export default function ScaleComparison() {
    //state variables for majorandminor scales..
    const [major, setMajor] = useState<string[]>([]);
    const [minor, setMinor] = useState<string[]>([]);
    const [root, setRoot] = useState<string>('');

    const getMajorScale = (root: string) => {
        //set major and minor scales of root 
        setRoot(root);
        setMajor(majorScale(root));
        setMinor(minorScale(root));
    };

    const leftContent = (
        <>
            <h1 className={styles.h1}>Scale Comparison</h1>
            <section className={styles.pianoIcon}>
                <GiGrandPiano size={32} />
                <p className={styles.piano}></p>
            </section>
            <p className={styles.p}>Now that you know both scales, let's compare them side by side using the same root note. Once you understand the major scale, you can very simply create the parallel minor scale by lowering the <b>3rd, 6th</b> and <b>7th scale</b> degrees.</p>
            <p className={styles.p}>Select any root note and both the <b>major</b> and <b>natural minor</b> scale will be highlighted on each piano.</p>
            <p className={styles.p}>Familiarize yourself with this pattern as it will save you a lot of time calculating scales and chords in the future.</p>
        </>
    );

    const rightContent = (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', overflowY: 'auto', width: '100%', padding: '2rem 0' }}>
            {root && <h2 style={{ color: 'white' }}>Root: {root}</h2>}
            <h2 style={{ color: 'white' }}>Major Scale</h2>
            <div style={{ zoom: 0.6 }}>
                <Piano activeNotes={major} onNoteSelect={getMajorScale} />
            </div>
            <h2 style={{ color: 'white' }}>Minor Scale</h2>
            <div style={{ zoom: 0.6 }}>
                <Piano activeNotes={minor} />
            </div>
        </div>
    );

    return (
        <LessonLayout left={leftContent} right={rightContent} />
    );
}