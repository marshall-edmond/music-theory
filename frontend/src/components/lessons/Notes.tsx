import LessonLayout from '.././LessonLayout.tsx';
import Piano from '../Piano';
import styles from '../../styles/Piano.module.css'



export default function Notes () {
    const leftContent = (
        <div className={styles.textContainer}>
            <h1 className={styles.h1}>Lesson 1: Notes</h1>
        </div>
    )

    return (
            <LessonLayout
                left={leftContent}
                right={<Piano />}
            >
             </LessonLayout>

    )

}
