import styles from '../../styles/Theory.module.css';
import Piano from '../Piano';
import LessonLayout from '../LessonLayout';

export default function Notes2() {

    const leftcontent = (
        <div className={styles.h1}>
            Notes
        </div>
    )

    const rightContent = (
        <Piano />
    )

    return (
        <LessonLayout
            left = {leftcontent}
            right = {rightContent}
        />
    )
    }
