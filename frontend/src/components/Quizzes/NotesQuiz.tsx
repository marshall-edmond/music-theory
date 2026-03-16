import styles from '../../styles/Quiz.module.css';
import Piano1 from '../Piano1.tsx';
import { randomNotes } from '../../music/Note.tsx';
import { useState, useEffect } from 'react';


export default function NotesQuiz(){

    //track active question
    const [display, setDisplay] = useState<{questionID:string, result: 'Correct' | 'Incorrect'} | null>(null);


    //cleanup display function
    useEffect(() => {
        //timer 
        let timer;
        timer = setTimeout(() => setDisplay(null), 100);

        clearTimeout(timer);
    }
    , [display]);

    //state variable for activeNote
    const [activeNotes, setActiveNote] =  useState<string | null>(null);
    //generate note
    const [ note ] = useState(randomNotes);

    //question2
    //array for available answers for question 2
    const options = ['12','10', '6', '8'];
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    
    //Question 3 options, and state variables 
    const Question3 = ['Enharmonic equivalence is occurs when notes/intervals/keys have the same pitch, but different name and notation.', 'Enharmonic Equivalence happens when The harmony between two notes reach equillibrium','Enharmonic equivalence happens when ']
    const [activeChoice, setActiveChoice] = useState<string | null>(null);

    //check if selected piano note matches the generated note
    const Question1 = () => {
        //if generated note is equal to active Notes, else leave as false
        if (note == activeNotes){
            setDisplay({ questionID : '1', result : 'Correct'})
        }
        else setDisplay({questionID : '1', result : 'Incorrect'});
    }
    //check answer
    const Question2 = () =>  {
        if (selectedAnswer == '8'){
            setDisplay({questionID: '2', result: 'Correct'});
        }
        else setDisplay({questionID: '2', result: 'Incorrect'});

    }
    //
    const answer3 = () => {
        if (activeChoice == Question3[0]){
            setDisplay({questionID: '3', result: 'Correct'})
        } else setDisplay({questionID: '3', result: 'Incorrect'});
    };

    
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

                {display?.questionID == '1' && (
                    <div className={styles.response}>
                        {display.result}
                    </div>
                )} 

            </div>

            <div className={styles.questionBox}>
                <div className={styles.question1}>2. How many white notes are in an Octave? </div>
                <div className={styles.btnContainer}>
                    {options.map(option => (
                        <div
                            key={option}
                            className={`${styles.btn2} ${selectedAnswer === option ? styles.selectedAnswer : ''}`}
                            onClick={() => setSelectedAnswer(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>

                <div className={styles.btn}
                onClick={() => Question2()}
                >
                Check Answer
                </div>

               {display?.questionID === '2' && (
                    <div className={styles.response}>
                        {display.result}
                    </div>
               )}

             
            </div>

            <div className={styles.questionBox}>
                <div className={styles.question1}>How many differnet notes are on a piano (including accidentals)? </div>
                <div className={styles.btnContainer}></div>
            </div>

            <div className={styles.questionBox}>
                <div className={styles.question1}>
                    What is enharmonic equivalence?
                </div>
                <div className={styles.btnContainter}>
                    {Question3.map(option => (
                        <div
                        key={option}
                        className={`${styles.btn2} ${option == activeChoice ? styles.selectedAnswer : ''}`}
                        onClick={() => setActiveChoice(option)}
                        >   
                        {option}
                        </div>
                    ))}
                </div>
                <div className={styles.btn}
                onClick={() => answer3()}
                >
                Submit
                </div>
                {display?.questionID === '3' &&(
                    <div className={styles.submit}>
                        {display.result}
                    </div>
                )}
                
            </div>
        </div>
    )
}