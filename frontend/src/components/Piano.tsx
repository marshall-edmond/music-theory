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
            <div className={styles.keys}>
                {OCTAVE.map((key) => (
                    <div
                        key={key.note}
                        className={`${styles.whiteKey} ${isNoteActive(key.note) ? styles.active : ''}`} 
                        onClick={() => onPlay && onPlay(key.note)}
                    >
                        <div className={styles.keyLabel}>{key.note}</div>

                        {key.hasSharp && (
                    <div 
                        className={`${styles.blackKey} ${isNoteActive(`${key.note}#`) ? styles.active : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onPlay && onPlay(`${key.note}#`);
                                }}
                            />
                        )}
                    </div>
                ))} 
            </div>
        </div>
    );
}