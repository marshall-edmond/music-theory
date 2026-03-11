import styles from '../../styles/Quiz.module.css';
import Piano1 from '../Piano1.tsx';
import { randomNotes } from '../../music/Note.tsx';


export default function NotesQuiz(){

    const note = randomNotes();
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.intro}>Notes Quiz</div>
            <div className={styles.questionBox}>
                <div className={styles.question1}>1. Identify the Note </div>
                <div className={styles.Note}> { note } </div>
                <Piano1 />

            </div>
        </div>
    )
}