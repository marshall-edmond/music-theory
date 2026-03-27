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
                <p className={styles.p}></p>
                <p className={styles.p}></p>
                <p className={styles.p}></p>
            </>
        )

        const rightContent = (
            <Piano />
        )
    return (

        <LessonLayout left={leftContent} right={rightContent}/>
    )
}