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
        timer = setTimeout(() => setDisplay(null), 1000);

        return () => clearTimeout(timer);
    }
    , [display]);

    //state variable for activeNote
    const [activeNotes, setActiveNote] =  useState<string | null>(null);
    //generate note
    const [ note ] = useState(randomNotes);

    //question2
    //array for available answers for question 2
    const options2 = ['12','10', '6', '8'];
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    //list of answer choices for question 3 and selected
    const options3 = ['4', '12', '6', '14'];
    const [option3, setOption3] = useState<string | null>(null); 
    
    //Question 4 options, and state variables 
    const options4 = ['Enharmonic equivalence is occurs when notes/intervals/keys have the same pitch, but different name and notation.',
        'Enharmonic Equivalence happens when the harmony between two notes reach equillibrium.',
        'Enharmonic equivalence happens when two different notes are played and a harmony is created',
        'Enharmonic equivalance occurs when a two of the same notes are played on differnet octaves.']

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
    //check answer and display result
    const Question3 = () => {
        if (options3[1] === option3 ){
            setDisplay({ questionID: '3', result: 'Correct'})
        }
        else setDisplay( {questionID: '3', result: 'Incorrect'})
    }
    //check answer and siaply result
    const Question4 = () => {
        if (activeChoice == options4[0]){
            setDisplay({questionID: '4', result: 'Correct'})
        } else setDisplay({questionID: '4', result: 'Incorrect'});
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
                    {options2.map(option => (
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
                <div className={styles.btnContainer}>
                    {options3.map(option => (
                        <div
                        key={option}
                        onClick={() => setOption3(option)}
                        className={`${styles.btn2} ${option3 === option ? styles.selectedAnswer : ''}`}
                        >
                        {option}
                        </div>
                    ))}
                </div>

                <div 
                className={styles.btn}
                onClick={() => Question3()}
                >
                Check Answer
                </div>

                {display?.questionID ==='3'&& (
                    <div className={styles.submit}
                    >
                    {display.result}
                    </div>
                )
                }
            </div>

            <div className={styles.questionBox}>
                <div className={styles.question1}>
                    What is enharmonic equivalence?
                </div>
                <div className={styles.btnContainer}>
                    {options4.map(option => (
                        <div
                        key={option}
                        className={`${styles.btn3} ${option === activeChoice ? styles.selectedAnswer : ''}`}
                        onClick={() => setActiveChoice(option)}
                        >   
                        {option}
                        </div>
                    ))}
                </div>
                <div className={styles.btn}
                onClick={() => Question4()}
                >
                Check Answer
                </div>
                {display?.questionID === '4' &&(
                    <div className={styles.submit}>
                        {display.result}
                    </div>
                )}
                
            </div>
        </div>
    )
}
