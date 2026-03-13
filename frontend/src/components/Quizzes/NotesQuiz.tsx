import styles from '../../styles/Quiz.module.css';
import Piano1 from '../Piano1.tsx';
import { randomNotes } from '../../music/Note.tsx';
import { useState } from 'react';





export default function NotesQuiz(){
    //state variable for activeNote
    const [activeNotes, setActiveNote] = useState('');
    //correct or incorrect
    const [response, setResponse] = useState(false)

    const [ note ] = useState(randomNotes);


    //check if selected piano note matches the generated note
    const Question1 = () => {
        //if generated note is equal to active Notes, else leave as false
        if (note == activeNotes){
            setResponse(true);
        }
    }
    
    return (
        <div className={styles.mainContainer}>
            <div className={styles.intro}>Notes Quiz</div>
            <div className={styles.questionBox}>
                <div className={styles.question1}>1. Identify the Note </div>
                <div className={styles.Note}> { note } </div>
                <Piano1 activeNote = {activeNotes} onNoteSelect = {setActiveNote}/>

                <div className={styles.btn}
                onClick={() => Question1()}
                > Check answer
                </div>

                {response ? (
                    <div className={styles.response}>
                        Correct
                    </div>
                ):(
                    <div className={styles.response}>
                        Incorrect
                    </div>
                )}

            </div>

            <div className={styles.questionBox}>
            </div>
        </div>
    )
}