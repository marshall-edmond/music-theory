import styles from '../styles/Piano1.module.css';
import { useState } from 'react';

export default function Piano1(){
    //state variable for activeNotes
    const [activeNotes, setActiveNote] = useState<string[]>([]);

    
    //function to add note to ActiveNote
    const addNote = (note: string) => setActiveNote([note]);

    const OCTAVE = [
        //each individual note
        { name: 'C'  },
        { name: 'C#', flat: 'Db' },
        { name: 'D'  },
        { name: 'D#', flat: 'Eb' },
        { name: 'E'  },
        { name: 'F'  },
        { name: 'F#', flat: 'Gb' },
        { name: 'G'  },
        { name: 'G#', flat: 'Ab' },
        { name: 'A'  },
        { name: 'A#', flat: 'Bb' },
        { name: 'B'  },
];
    //function to check if note is a black key
    const isNoteBlack = (name : string) => name.includes('#');
    const isNoteActive = (note : string) => activeNotes.includes(note);

    return (
        <div className={styles.pianoContainer}>
            {OCTAVE.filter(note => !isNoteBlack(note.name)).map((whiteNote) => {
            const nextNote = OCTAVE[OCTAVE.indexOf(whiteNote) + 1];
            const hasBlackKey = nextNote && isNoteBlack(nextNote.name);

            return (
                <div key={whiteNote.name} className={styles.whiteKeyWrapper}>
                <div
                    className={`${styles.whiteKey} ${isNoteActive(whiteNote.name) ? styles.active : ''}`}
                    onClick={() => addNote(whiteNote.name)}
                />
                {hasBlackKey && (
                    <div
                    className={`${styles.blackKey} ${isNoteActive(nextNote.name) ? styles.active : ''}`}
                    onClick={() => addNote(nextNote.name)}
                    />
                )}
                </div>
            );
            })}
        </div>
        );
}