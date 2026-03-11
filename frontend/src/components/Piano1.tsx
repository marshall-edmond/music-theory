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
            {OCTAVE.map((note) => (
                <div
                key = {note.name}
                className={`${isNoteBlack(note.name) ? styles.blackKey : styles.whiteKey} ${isNoteActive(note.name) ? styles.active : ''}`}
                onClick={() => addNote(note.name)}
                />
            ))}
        </div>
    );
}