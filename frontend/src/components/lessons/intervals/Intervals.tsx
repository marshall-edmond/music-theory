import LessonLayout from "../../LessonLayout";
import Piano from '../../Piano';
import styles from '../../../styles/Theory.module.css';
import { GiGrandPiano } from 'react-icons/gi';


export default function Intervals (){

    const leftContent =
    <>
        <h1 className={styles.h1}>What is an interval?</h1>
        <section className={styles.pianoIcon}>
            <GiGrandPiano size={32}/>
            <p className={styles.piano}>1 min. reading</p>
        </section>
        <p className={styles.p}>An interval simply put is the distance between two notes. To calculate the distance we use <b>tones</b> and <b>semitones</b> (also known as half steps and whole steps). </p>
        <p className={styles.p}><b>Half Tone / Semitone:</b> The immediately adjacent key (black or white). </p>
        <p className={styles.p}><b>Whole tone:</b> Two semitones up or down.</p>
        <p className={styles.p}> For example from a C to a D is a whole step, as you travel from C to C#/D♭ and finally D. We'll come back and add labels and definitions to different intervals but for now this is all we will cover.</p>
    </>

    const rightContent =
    <>
    <Piano activeNotes={['C4','D4']}/>
    </> 
    return (
        <LessonLayout left = {leftContent} right = {rightContent}/>
    )
}