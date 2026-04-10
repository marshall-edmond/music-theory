import LessonLayout from '../../LessonLayout';
import Piano from '../../Piano';
import { GiGrandPiano } from 'react-icons/gi';
import styles from '../../../styles/Theory.module.css';

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
            <Piano />
        </>
    )
    return (
        <LessonLayout left={leftContent} right={rightContent} />
    )
}