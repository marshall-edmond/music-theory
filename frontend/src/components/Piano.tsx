import styles from '../styles/Piano.module.css';


interface PianoProps {
    activeNotes?: string[];
    onNoteSelect?: (root: string) => void;
}

interface SingleOctaveProps {
    octaveNum: number;
    activeNotes?: string[],
    onNoteSelect?:(root: string) => void;

}

const OCTAVE = [
    {note : 'C', equivalence : 'Db'},
    {note : 'C#', equivalence : 'Db'},
    {note : 'D'},
    {note : 'D#', equivalence : 'Eb'},
    {note : 'E'},
    {note : 'F'},
    {note : 'F#', equivalence: 'Gb'},
    {note:  'G'},
    {note:  'G#', equivalence: 'Ab'},
    {note:  'A'},
    {note: 'A#', equivalence: 'Bb'},
    {note: 'B'}
];


function SingleOctave({ octaveNum, activeNotes, onNoteSelect}: SingleOctaveProps) {
   const isNoteBlack = (note: string) => note.includes('#');
  const isNoteActive = (note: string) => {
    console.log('checking:', note, activeNotes)
    return activeNotes && activeNotes.includes(note)
}

    return ( 
        <div className={styles.keys}>
            {OCTAVE.filter((key) => !isNoteBlack(key.note)).map((whiteNote) => {

                const nextNote = OCTAVE[OCTAVE.indexOf(whiteNote) + 1];
                const hasNoteBlack = nextNote && isNoteBlack(nextNote.note);
                
                return (
                    <>
                        
                    <div
                    className={styles.keyGroup}
                    key={whiteNote.note}
                    
                    onClick={() => onNoteSelect?.(whiteNote.note)}
                    >
                        <div className={`${styles.whiteKey} ${isNoteActive(`${whiteNote.note}${octaveNum}`) ? styles.active : ''}`}>
                            <div className={styles.keyLabel}>
                                {whiteNote.note}
                            </div>
                        </div>
                    

                    {hasNoteBlack &&
                        (
                            <div 
                            className={`${styles.blackKey} ${isNoteActive(nextNote.note) ? styles.active : ''}`}
                            >

                            </div>
                        )
                    }
                    </div>
                    </>

                
            )})}
        </div>
    )}

export default function Piano({ activeNotes = [], onNoteSelect }: PianoProps) {

    const octavestoRender = [4,5];

    return (
        <div className={styles.pianoContainer}>
            <div className={styles.keys}>
                {octavestoRender.map(octave => (
                    <SingleOctave
                        key = {octave}
                        octaveNum={octave}
                        activeNotes = {activeNotes}
                        onNoteSelect={onNoteSelect}
                    />
                ))}
            </div>
        </div>
)}