
// FIX 1: Removed the space in the filename ('/ Piano' -> '/Piano')
import styles from '../styles/Piano.module.css';

interface PianoProps {
    activeNotes?: string[];
    onPlay?: (note: string) => void;
}

const OCTAVE = [
    { note: 'C', hasSharp: true },
    { note: 'D', hasSharp: true },
    { note: 'E', hasSharp: false }, 
    { note: 'F', hasSharp: true },
    { note: 'G', hasSharp: true },
    { note: 'A', hasSharp: true },
    { note: 'B', hasSharp: false },
];

export default function Piano({ activeNotes = [], onPlay }: PianoProps) {

    const isNoteActive = (note: string) => activeNotes.includes(note);

    return (
        <div className={styles.pianoContainer}>
            {OCTAVE.map((key) => (
                <div
                    key={key.note}
                    // FIX 2: Fixed typo 'whitekey' -> 'whiteKey' (Must match CSS file)
                    className={`${styles.whiteKey} ${isNoteActive(key.note) ? styles.active : ''}`} 
                    onClick={() => onPlay && onPlay(key.note)}
                >

                    {/* FIX 3: Fixed typo 'keykabel' -> 'keyLabel' */}
                    <div className={styles.keyLabel}>{key.note}</div>

                    {key.hasSharp && (
                        <div 
                            // FIX 4: Fixed the broken backtick/dollar sign syntax
                            // Was: `$styles.blackKey}
                            // Now: ${styles.blackKey}
                            className={`${styles.blackKey} ${isNoteActive(`${key.note}#`) ? styles.active : ''}`}
                            
                            onClick={(e) => {
                                e.stopPropagation();
                                onPlay && onPlay(`${key.note}#`);
                            }}
                        />
                    )}
                </div>
            ))} {/* FIX 5: Added the closing parentheses for the map function */}
        </div>
    );
}