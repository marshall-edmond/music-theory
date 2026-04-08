import styles from '../../../styles/Theory.module.css';
import Piano from '../../Piano';
import LessonLayout from '../../LessonLayout';
import { GiGrandPiano } from 'react-icons/gi';
import { useState } from 'react';
import { majorScale } from '../../../music/MajorFormula';
import { minorScale } from '../../../music/MinorFormula';

export default function ScaleComparison() {
    const [major, setMajor] = useState<string[]>([]);
    const [minor, setMinor] = useState<string[]>([]);

    const getMajorScale = (root: string) => {
        setMajor(majorScale(root));
        setMinor(minorScale(root));
    };

    const leftContent = (
        <>
            <h1 className={styles.h1}>Scale Comparison</h1>
            <section className={styles.pianoIcon}>
                <GiGrandPiano size={32} />
            </section>
            <p className={styles.p}>Now that you know both scales, let's compare them side by side using the same root note.</p>
            <p className={styles.p}>Select any root note and both the <b>major</b> and <b>natural minor</b> scale will be highlighted on each piano.</p>
            <p className={styles.p}>Notice that the <b>3rd, 6th, and 7th</b> degrees are lowered by a half step in the minor scale — that's what gives it its darker sound.</p>
        </>
    );

    const rightContent = (
        <>
            <h2 className={styles.h1}>Major Scale</h2>
            <Piano activeNotes={major} onNoteSelect={getMajorScale} />
            <h2 className={styles.h1}>Minor Scale</h2>
            <Piano activeNotes={minor} />
        </>
    );

    return (
        <LessonLayout left={leftContent} right={rightContent} />
    );
}