import styles from '../../../styles/Theory.module.css';
import Piano from '../../Piano';
import LessonLayout from '../../LessonLayout';
import { GiGrandPiano } from 'react-icons/gi';

export default function Keys(){

    const leftContent = (
        <>
            <h1 className={styles.h1}>Keys</h1>
            <section className={styles.pianoIcon}>
                <GiGrandPiano size={32}/>
            </section>
            <p className={styles.p}>A <b>key</b> in music refers to a group of notes that sound good together, centered around one main note called the <b>root</b>.</p>
            <p className={styles.p}>We've intuitively been using keys already to build the major and minor scales. The key of these scales was the selected root note which generated a scale.</p>
            <p className={styles.p}>The root note defines the key. For example, if you build a scale starting on C, you are playing in the <b>key of C</b>.</p>
            <p className={styles.p}>Every scale you build has a root, and that root is the key. Major and minor scales each create a different feeling, but the root always names the key.</p>
        </>
    )

    const rightContent = (
        <Piano activeNotes={[]} onNoteSelect={() => {}}/>
    )

    return (
        <LessonLayout left={leftContent} right={rightContent}/>
    )
}
