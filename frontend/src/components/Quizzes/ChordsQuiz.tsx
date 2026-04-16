import styles from '../../styles/Quiz.module.css';
import Quiz from '../Quizzes/QuizFormat';
import { randomNotes } from '../../music/Note';
import { useState } from 'react';
import { MajorTr } from '../../music/MajorTr';
import { MinorTr } from '../../music/MinorTr';
import { Diminished } from '../../music/Diminished';

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
const Note3 = randomNotes();



//correct answers for chords
const majorAnswer = MajorTr(Note);
const minorAnswer = MinorTr(Note2);
const dimAnswer = Diminished(Note3);


export default function ChordsQuiz(){

    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [majorChord, setMajorChord] = useState<string[] | string>('');
    const [minorChord, setMinorChord] = useState<string[] | string>('');
    const [dimChord, setDimChord] = useState<string[] | string>('');

    const setChord = (note : string, question : string) => {
       if ( question === '1') {
        //remove note if it exists
        setMajorChord(prev => {
            if (Array.isArray(prev) && prev.includes(note)){
                return prev.filter(n => n != note)
            }
            //add note
            else if (Array.isArray(prev)){
                return [...prev, note]
            }
            else return [note];
       })
       }
       else if ( question === '2') {
            setMinorChord(prev => {
                if (Array.isArray(prev) && prev.includes(note)){
                    return prev.filter(n => n != note);
                }
                else if (Array.isArray(prev)){
                    return [...prev, note]
                }
                else return [note];
            })
       }

       else if ( question === '3'){
            setDimChord(prev => {
                if (Array.isArray(prev) && prev.includes(note)){
                    return prev.filter(n => n != note);
                }
                else if (Array.isArray(prev)){
                    return [...prev, note]
                }
                else return [note];
            })
       }
    }

    const setActiveNotes = (question : string) => {
        if (question === '1'){
            return majorChord
        }
        else if (question === '2') {
            return minorChord
        }
        else if (question === '3') {
            return dimChord
        }
    }



    const Questions : Question[] = [{
        title: 'Build the Major Chord',
        number: '1',
        correctAnswer: majorAnswer.sort(),
        type: 'piano',
        root: Note,
        onNoteSelect: setChord

    },
    {
        title: 'Build the Minor Chord',
        number: '2',
        correctAnswer: minorAnswer.sort(),
        type:'piano',
        root: Note2,
        onNoteSelect: setChord,
    },
    {
        title: 'Build the Diminished Chord',
        number: '3',
        correctAnswer: dimAnswer.sort(),
        type:'piano',
        root: Note3,
        onNoteSelect: setChord
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
            onNoteSelect = {(note, number) => question.onNoteSelect?.(note, number)}
            activeNotes={setActiveNotes(question.number)}
            />
        ))}

        </div>
        
    )
    
}