import LessonLayout from '.././LessonLayout.tsx';
import Piano from '../Piano';
import styles from '../../styles/Theory.module.css';
import { GiGrandPiano } from 'react-icons/gi';


export default function Notes1() {

    const LeftContent = (
        <>
            <h1 className={styles.h1}>Notes</h1>
            <section className={styles.pianoIcon}>
                <GiGrandPiano size={32}/>
            </section>
            <p className={styles.p}>
                Alright, now that we know what notes are lets see how they interact on a piano. The white keys on the piano hold the natural notes (A,B,C,D,E,F,G) and the black keys hold the accidentals(♭, #).
            </p>

            
        </>

    )

    const RightContent = (
        <>
            <Piano />
        </>
    )

    return (
        <LessonLayout
            left={LeftContent}
            right={RightContent}
        />
    )
} 