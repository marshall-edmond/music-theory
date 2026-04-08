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

    //K:V to convert a sharp to a flat if root is a flat
    const sharpstoflats: Record<string, string>= {
        'A#' : 'Bb',
        'C#' : 'Db',
        'D#' : 'Eb',
        'F#' : 'Gb',
        'G#' : 'Ab',
    }

    const enharmonicMap : Record<string, string> ={
        'D#': 'Eb',
        'A#' : 'Bb',
        'G#' : 'Ab'
    }


export default function KeysandScalesQuiz(){

    //store selectedAnswer
    const [selectedAnswer, setSelectedAnswer] = useState<string | string[] |  null>(null);
    const [majorScale, setMajorScale] = useState<null | string[] | string>(null);
    const [minorScale, setMinorScale] = useState<null | string[] | string>(null);

    
    //add to respective arrays,
    const array = (note:string, question: string, root: string) => {

        root = enharmonicMap[root] ?? root;
        

        const octaveNum = note.slice(-1)
        const strippedNote = note.slice(0, -1);
            
        const key = sharpstoflats[strippedNote] ?? strippedNote;
        const final = key + octaveNum;

        //if root is a flat use converted value
        if (question === '1' && root.includes('b')){
            setMajorScale(prev => {
                //remove note
                if (Array.isArray(prev) && prev.includes(final)){
                   return prev.filter(n => n != final);
                   
                }
                //add note
                else if (Array.isArray(prev)) {
                    return [...prev, final]
                }
                else return [final];
            })
        }
        
        //if root is a sharp or natural use default note
        else if (question === '1' && !root.includes('b')){
            setMajorScale(prev => {
                if (Array.isArray(prev) && prev.includes(note)) {
                    return prev.filter(n => n != note);
                }
                else if (Array.isArray(prev)){
                    return [...prev, note]
                }
                else return [note];
            }
                
            )
        }
        //if question is two and the minor scale is note empty add the note, else set it to the note
        else if (question === '2' && root.includes('b')){
            setMinorScale(prev => {
                if (Array.isArray(prev) && prev.includes(final)){
                    return prev.filter(n => n !== final)
                }
                else if (Array.isArray(prev)){
                    return [...prev, final]
                }
                else return [final]
            })}

        else if (question === '2' && !root.includes('b')){
            setMinorScale(prev => {
                //remove note from minor scale
                if (Array.isArray(prev) && prev.includes(note)){
                    return prev.filter(n => n != note)
                }
                //add note to minor scale
                else if (Array.isArray(prev)){
                  return [...prev, note]  
                }
                else return [note];
            })
        }  
    }

    type Question = {
        title: string,
        number: string,
        answers?: string[],
        correctAnswer: string | string[] | null,
        type: 'piano' | 'multiple-choice'
        root?: string,
        onNoteSelect?: (note:string, question: string, root: string) => void;

    }

    //function to compare selected answer to correct answer
    const checkAnswera = (selectedAnswer: string) => {
        if (selectedAnswer === ''){
            
        }
    }
    const questions : Question[] = [{
            title: 'Build the Major Scale',
            number: '1',
            correctAnswer: majorAnswer.sort(),
            type: 'piano',
            root: note,
            onNoteSelect: array,
        },

        {
            title:'Build the Minor Scale',
            number: '2',
            correctAnswer: minorAnswer.sort(),
            type: 'piano',
            root: note2,
            onNoteSelect: array,
          
        },

        {
            title:'How many Notes are in a Major/Minor Scale(including octave)?',
            number: '3',
            correctAnswer: '8',
            type: 'multiple-choice',
            answers: ['7', '10', '6', '8']
            
        },

        {
            title: 'What is a key?',
            number: '4',
            correctAnswer: 'A key is a tonal center, or a home of a group of notes',
            type: 'multiple-choice',
            answers: ['A key is a tonal center, or a home of a group of notes', 'A key is a note which is in a major or minor scale', 'A key is a note which cannot be changed', 'A key is the note in the middle of a scale']
        }
    ]

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
                onNoteSelect={(note, number,) => question.onNoteSelect?.(note, number, question.root!)}
                root={question.root}
                scale={question.number === '1' ? majorScale : minorScale}
            
                />
            ))}

        </div>
    )
}
