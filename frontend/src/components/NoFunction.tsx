import styles from '../styles/NoFunction.module.css';


export default function NoFunction () {
    
    //list notes and their enharmonic equivalence
    const OCTAVE = [
        {note : 'C'},
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
    ]

    //funciton to determine if the key is black
    const isNoteBlack = (note:string) => note.includes('#')

    return (
        <div className={styles.pianoContainer}>
            {OCTAVE.filter(note => !isNoteBlack(note.note)).map((whiteNote) => {
                //get the index of the next note
                const nextNote = OCTAVE[OCTAVE.indexOf(whiteNote) + 1];
                const hasBlackNote = nextNote && isNoteBlack(nextNote.note);
                

                const blackNote = nextNote?.note; 
                const enharmonicEquivalence = nextNote?.equivalence;


                return (
                    <div key={whiteNote.note} className={styles.whiteKeyWrapper}>

                        <div className={styles.whiteKey}>
                            <div className={styles.keyLabel}>
                                {whiteNote.note}
                            </div>
                        </div>

                    {hasBlackNote && (
                        <div className={styles.blackKey}>
                            <div className={styles.blackLabel}>
                                {blackNote}/{enharmonicEquivalence}
                            </div>
                        </div>
                    )}

                    </div>
                )

        })}

            
        </div>
    )
}