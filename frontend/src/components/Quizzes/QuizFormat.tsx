import styles from '../../styles/Quiz.module.css';
import Piano from '../Piano';

//props for each question
interface quizProps {
    title: string,
    number: string,
    answers?: string[],
    selectedAnswer: string | string[] | null,
    correctAnswer: string | string[],
    onSelect: (selected : string) => void;
    type: 'piano' | 'multiple-choice';
    root?: string,
    onNoteSelect?: (note:string, number: string ) => void;
    scale?: string[] | string | null;
    includesOctave?: boolean

}



export default function Quiz ({ title, number, answers, selectedAnswer, onSelect, type, root, onNoteSelect, scale, includesOctave } : quizProps){
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
                <Piano onNoteSelect={(note) => onNoteSelect?.(note,number)} activeNotes={Array.isArray(scale) ? scale : []} includesOctave={true} />
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

            <div className={styles.btn}>
                Submit
            </div>
            
        </div>
    )
}