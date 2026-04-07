import styles from '../styles/Piano.module.css';


interface PianoProps {
    activeNotes?: string[]
    onNoteSelect?: (root: string) => void;
    includesOctave?: boolean
}

interface SingleOctaveProps {
    octaveNum: number;
    activeNotes?: string[],
    onNoteSelect?:(root: string) => void;
    includesOctave?: boolean;


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


function SingleOctave({ octaveNum, activeNotes, onNoteSelect, includesOctave}: SingleOctaveProps) {
   const isNoteBlack = (note: string) => note.includes('#');

 
  const isNoteActive = (note: string, equivalence?: string) => {
    //if activeNotes has the note or the equivalence then return true
    return activeNotes?.some(n => n === note || n === equivalence) ?? false;
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
                    
                    onClick={() => includesOctave ? onNoteSelect?.(`${whiteNote.note}${octaveNum}`) : onNoteSelect?.(whiteNote.note)}
                    >
                        <div className={`${styles.whiteKey} ${isNoteActive(`${whiteNote.note}${octaveNum}`) ? styles.active : ''}`}>
                            <div className={styles.keyLabel}>
                                {whiteNote.note}
                            </div>
                        </div>
                    

                    {hasNoteBlack && (
                            <div 
                            className={`${styles.blackKey} ${isNoteActive(`${nextNote.note}${octaveNum}`, nextNote.equivalence ? `${nextNote.equivalence}${octaveNum}` : undefined) ? styles.active : ''}`}
                            onClick={(e) => {e.stopPropagation(); includesOctave ? onNoteSelect?.(`${nextNote.note}${octaveNum}`) : onNoteSelect?.(nextNote.note)}}
                            >

                            </div>
                        )
                    }
                    </div>
                    </>

                
            )})}
        </div>
    )}

export default function Piano({ activeNotes = [], onNoteSelect, includesOctave}: PianoProps) {

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
                        includesOctave={includesOctave}
                    />
                ))}
            </div>
        </div>
)}