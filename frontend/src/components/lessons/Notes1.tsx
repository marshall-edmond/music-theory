import LessonLayout from '.././LessonLayout.tsx';
import Piano from '../Piano';
import styles from '../../styles/Theory.module.css';


export default function Notes1() {

    const LeftContent = (
        <>
            <h1 className={styles.h1}>Notes</h1>
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