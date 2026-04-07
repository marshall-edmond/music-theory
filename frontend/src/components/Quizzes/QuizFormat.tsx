import styles from '../../styles/Quiz.module.css';
import Piano from '../Piano';
import { useState } from 'react'


//props for each question
interface quizProps {
    title: string,
    number: string,
    answers?: string[],
    selectedAnswer: string | string[] | null,
    correctAnswer: string | string[] | null,
    onSelect: (selected : string) => void;
    type: 'piano' | 'multiple-choice';
    root?: string,
    onNoteSelect?: (note:string, number: string) => void;
    scale: string[] | string | null;
    includesOctave?: boolean

}







export default function Quiz ({ title, number, answers, selectedAnswer, onSelect, correctAnswer, type, root, onNoteSelect, scale, includesOctave} : quizProps){


    const [display, setDisplay] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

   
    //handle submit, sort scale before checking response
    const checkScale = (scale: string[] | string | null, correctAnswer: string[] | string | null) => {
        //if the root includes a flat then filter through scale and if the note includes a sharp replace with a flat
     
        if (Array.isArray(scale)){
            scale.sort();
        }
        console.log('scale:', scale);
        console.log('correctScale:', correctAnswer)
        setMessage(response(scale, correctAnswer));
        setDisplay(true);

    }

    //response checks if the selected notes are the correct scale
    const response = (scale: string[] | string | null, correctAnswer: string[] | null | string) => {
        
    if (JSON.stringify(scale) === JSON.stringify(correctAnswer)){
        return 'Correct'
    } else return 'Incorrect'
    }

    return (
        
        <div className={styles.questionBox}>
            <div className={styles.question1}>
                {number}. {title}
            </div>
            {root && (
                <div className={styles.question1}>
                    Root: {root}
                </div>
            )}
            {/*If its a piano question, pass the root */}
            {type === 'piano' && (
                <div className={styles.PianoStyles}>
                    <Piano onNoteSelect={(note) => onNoteSelect?.(note,number)} activeNotes={Array.isArray(scale) ? scale : []} includesOctave={true} />
                </div>
            )}
            <div className={styles.btnContainer}>
                {answers?.map(answer => (
                    <div
                    key= {answer}
                    className={`${styles.btn2} ${answer === selectedAnswer ? styles.active : ''}`}
                    onClick={() => onSelect(answer)}
                    >
                        {answer}
                    </div>
                        )
                    )
                }
            </div>
            {/*Submit button calls function to check response and set display to true */}
            <div className={styles.apke}>
                <div className={styles.btn}
                onClick={() => checkScale(scale, correctAnswer,)}
                >
                Submit
                </div>

                {display && (
                    <div className={styles.message}>
                        {message}
                    </div>
                )}
            </div>
            
        </div>
    )
}