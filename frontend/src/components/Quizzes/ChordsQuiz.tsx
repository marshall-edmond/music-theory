import styles from '../../styles/Quiz.module.css';
import Quiz from '../Quizzes/QuizFormat';
import { randomNotes } from '../../music/Note';
import { useState } from 'react';
import { MajorTr } from '../../music/MajorTr';
import { MinorTr } from '../../music/MinorTr';
import { Diminished } from '../../music/Diminished';
import { randomChord, random } from '../../music/Universal';

type Question = {
    title: string,
    number: string,
    answers?: string[],
    correctAnswer: string | string[] | null,
    type: 'piano' | 'multiple-choice',
    root?: string,
    onNoteSelect?: (note:string, number:string, root: string) => void,
    hasPiano?: boolean,
}


//root notes for major and minor chords
const Note = randomNotes();
const Note2 = randomNotes();
const Note3 = randomNotes();

//correct answers for chords
const majorAnswer = MajorTr(Note);
const minorAnswer = MinorTr(Note2);
const dimAnswer = Diminished(Note3);
const name = randomChord();
const identify = name.notes

//use a set for unique values
const chords = new Set<string>;
chords.add(name.name)
// add a random chord until the chords lenght 
while (chords.size < 4) {
    chords.add(randomChord().name);
}


    //variables to store randomized arrays
    let array = Array.from(chords);
    array = random(array);
    
    let question5 : string[] = ['1st, minor 3rd, diminished 5th', '1st, minor 3rd, perfect 5th', '1st, major 3rd, diminished 5th', '1st, major 3rd, perfect 5th']
    question5 = random(question5)
    //K:V to convert a sharp to a flat if root is a flat
    const sharpstoflats: Record<string, string>= {
        'A#' : 'Bb',
        'C#' : 'Db',
        'D#' : 'Eb',
        'F#' : 'Gb',
        'G#' : 'Ab',
    }

export default function ChordsQuiz(){

    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [majorChord, setMajorChord] = useState<string[] | string>('');
    const [minorChord, setMinorChord] = useState<string[] | string>('');
    const [dimChord, setDimChord] = useState<string[] | string>('');

     //map question number to state var
    const setter : Record<string, React.Dispatch<React.SetStateAction<string[] | string>>>={
        '1' : setMajorChord,
        '2' : setMinorChord,
        '3' : setDimChord
    }  

       //boolean helper to check if the root has a flat
    const checkRoot = (root: string) => {
        return root.includes('b')
    }

    const setChord = (note: string, question: string, root: string) => {
        //check if the root of the chord has a flat
        const isRootFlat = checkRoot(root);

        if (isRootFlat) note = sharpstoflats[note] ?? note; 
        //get correct chord
        let chord = setter[question]

        const octaveNum = note.slice(-1)
        const strippedNote = note.slice(0, -1);
            
        const key = sharpstoflats[strippedNote] ?? strippedNote;
        const final = key + octaveNum;

        chord(prev => {
            //remove note
            if (Array.isArray(prev) && prev.includes(final)){
                return prev.filter(n => n != final)
            }
            //add note to array 
            else if (Array.isArray(prev)){
                return [...prev, final]
            }
            //create array
            else return [final];
        })

    }

    //hashmap to return result
    const setActiveNotes : Record<string, string[] | string> = {
        '1' : majorChord,
        '2' : minorChord,
        '3' : dimChord,
        '4' : identify
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
    },

    {
        title: 'Identify the Chord',
        number: '4',
        type:'piano',
        correctAnswer: name.name,
        answers: array,
        hasPiano: true,
        
    },
    {
        title: 'What scale degrees make up a diminished chord?',
        number: '5', 
        type: 'multiple-choice',
        correctAnswer: '1st, minor 3rd, diminished 5th',
        answers: question5,
        
    }
]
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
            onNoteSelect = {(note, number) => question.onNoteSelect?.(note, number, question.root!)}
            activeNotes={setActiveNotes[question.number]}
            hasPiano={question.hasPiano}
            />
        ))}

        </div>
        
    )
    
}
