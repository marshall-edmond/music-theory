import styles from '../../../styles/Theory.module.css';
import Piano from '../../Piano';
import LessonLayout from '../../LessonLayout';
import { GiGrandPiano } from 'react-icons/gi';

export default function ScaleRules(){
        const leftContent = (
            <>
                <h1 className={styles.h1}>Major & Minor Scale Rules</h1>
                <section className={styles.pianoIcon}>
                    <GiGrandPiano size={32}/>
                </section>
                <p className={styles.p}>The first rule is that every major and minor scale must contain one and only one of each letter. Meaning if we're building a major or minor scale starting from A the scale must also contain a variation of B, C, D, E, F, and G.</p>
                <p className={styles.p}>Remember enharmonic equivalents? They come into play here as every scale (not just major and minor) can only have one type of accidental, meaning it can either can have sharps or flats, but not both. For example if we've already used a F in a scale and the next note is an F#, we would default to the enharmonic equivalent (Gb) to include every letter once.</p>
                <p className={styles.p}>Scales are only played in ascending or decending order. Every major and minor scale contains 7 notes before reaching the octave of the root.</p>
            </>
        )

        const rightContent = (
            <Piano />
        )
    return (

        <LessonLayout left={leftContent} right={rightContent}/>
    )
}