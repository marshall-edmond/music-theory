import styles from '../../styles/Quiz.module.css';
import Quiz from '../Quizzes/QuizFormat';
import { randomNotes } from '../../music/Note';
import { useState } from 'react';
import { MajorTr } from '../../music/MajorTr';
import { MinorTr } from '../../music/MinorTr';

type Question = {
    title: string,
    number: string,
    answers?: string[],
    correctAnswer: string | string[] | null,
    type: 'piano' | 'multiple-choice',
    root?: string,
    onNoteSelect?: (note:string, number:string) => void,
}


//root notes for major and minor chords
const Note = randomNotes();
const Note2 = randomNotes();

//correct answers for chords
const majorAnswer = MajorTr(Note);
const minorAnswer = MinorTr(Note2);


export default function ChordsQuiz(){

    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [majorChord, setMajorChord] = useState<string[] | string>('');
    const [minorChord, setMinorChord] = useState<string[] | string>('');

    const setChord = (note : string, number: string) => {

    }


    const Questions : Question[] = [{
        title: 'Build the Major Chord',
        number: '1',
        correctAnswer: majorAnswer.sort(),
        type: 'piano',
        root: Note,

    }]

    return (
        <div className={styles.mainContainer}>
            <div className={styles.intro}>Chords Quiz</div>

            {Questions.map(question => (
            <Quiz
            key={Questions.indexOf(question)}
            title = {question.title}
            number = {question.number}
            answers={question.answers}
            correctAnswer={question.correctAnswer}
            selectedAnswer={selectedAnswer}
            onSelect={(answer: string) => setSelectedAnswer(answer)}
            root={question.root}
            type={question.type}
            />
        ))}

        </div>
        
    )
    
}