import styles from '../../styles/Quiz.module.css';
import Quiz from '../Quizzes/QuizFormat';
import { randomNotes} from '../../music/Note';
import { useState } from 'react';
import { majorScale } from '../../music/MajorFormula'
import { minorScale } from '../../music/MinorFormula'

  //generate 2 random notes for major and minor scales
    const note = randomNotes();
    const note2 = randomNotes();

     
    //get correct answers for major and minor scale forumla
    const majorAnswer = majorScale(note);
    const minorAnswer = minorScale(note2);

export default function KeysandScalesQuiz(){

    //store selectedAnswer
    const [selectedAnswer, setSelectedAnswer] = useState<string | string[] |  null>(null);
    const [majorScale, setMajorScale] = useState<null | string[] | string>(null);
    const [minorScale, setMinorScale] = useState<null | string[] | string>(null);
    
    //add to respective arrays,
    const array = (note:string, question: string) => {
        //if questions is one and array contains a value already add to that value, else if array is null return note
        if (question === '1'){
            setMajorScale(prev => {
                if (Array.isArray(prev) && prev.includes(note)){
                    return prev.filter(n => n != note)
                   
                }
                else if (Array.isArray(prev)){
                     return [...prev, note]
                }
                else return [note]
            })
        }
        //if question is two and the minor scale is note empty add the note, else set it to the note
        else if (question === '2'){
            setMinorScale(prev => {
                if (Array.isArray(prev) && prev.includes(note)){
                    return prev.filter(n => n != note)
                }
                else if (Array.isArray(prev)){
                    return [...prev, note]
                }
                else return [note]
            })}
    }

    type Question = {
        title: string,
        number: string,
        answers?: string[],
        correctAnswer: string | string[],
        type: 'piano' | 'multiple-choice'
        root?: string,
        onNoteSelect?: (note:string, question: string) => void;

    }

    //function to compare selected answer to correct answer
    const checkAnswer = (selectedAnswer: string) => {
        if (selectedAnswer === ''){
            
        }
    }
    const questions : Question[] = [{
            title: 'Build the Major Scale',
            number: '1',
            correctAnswer: majorAnswer,
            type: 'piano',
            root: note,
            onNoteSelect: array,
        },

        {
            title:'Build the Minor Scale',
            number: '2',
            correctAnswer: minorAnswer,
            type: 'piano',
            root: note2,
            onNoteSelect: array,
          
        }]

    return (
        <div className={styles.mainContainer}>
            <div className={styles.intro}>Keys & Scales Quiz</div>

            {questions.map(question => (      
                <Quiz 
                key={questions.indexOf(question)}
                title= {question.title}
                number={question.number}
                answers={question.answers}
                correctAnswer={question.correctAnswer}
                selectedAnswer={selectedAnswer}
                onSelect={(answer: string) => setSelectedAnswer(answer)}
                type={question.type}
                onNoteSelect={(note, number) => question.onNoteSelect?.(note, number)}
                root={question.root}
                scale={question.number === '1' ? majorScale : minorScale}
            
                />
            ))}

        </div>
    )
}
