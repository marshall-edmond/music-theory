import styles from '../../styles/Quiz.module.css';
import Piano1 from '../Piano1.tsx';
import { randomNotes } from '../../music/Note.tsx';
import { useState } from 'react';


export default function NotesQuiz(){
    //state variable for activeNote
    const [activeNotes, setActiveNote] = useState('');
    //correct or incorrect
    const [response, setResponse] = useState(false);
    const [ note ] = useState(randomNotes);

    //question2
    const [response2, setResponse2] = useState('');
    const [display1, setDisplay1] = useState(false);


    //check if selected piano note matches the generated note
    const Question1 = () => {
        //if generated note is equal to active Notes, else leave as false
        if (note == activeNotes){
            setResponse(true);
        }
    }
    //check answer
    const Question2 = () =>  {
        setDisplay1(true);
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
                <div className={styles.question1}>2. How many Notes are in an Octave? </div>
                <div className={styles.btnContainer}>
                    <div className={styles.btn2}>12</div>
                    <div className={styles.btn2}>10</div>
                    <div className={styles.btn2}>6</div>
                    <div className={styles.btn2}>8</div>
                </div>

                <div className={styles.btn}
                onClick={() => Question2()}
                >
                Check Answer
                </div>


             
            </div>

            <div className={styles.questionBox}>
                <div className={styles.question1}>How many differnet notes are on a piano (including accidentals)? </div>
                <div className={styles.btnContainer}></div>
            </div>
        </div>
    )
}