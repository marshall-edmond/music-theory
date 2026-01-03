import styles from '../styles/Piano.module.css';


interface PianoProps {
    activeNotes?: string[];
    onPlay?: (note: string) => void;
}

interface SingleOctaveProps {
    octaveNum: number;
    activeNotes: string[],
    onPlay?: (note:string) => void;
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


function SingleOctave({ octaveNum, activeNotes, onPlay}: SingleOctaveProps) {
    const isNoteActive = (note: string) => activeNotes.includes(note);

    return ( 
        <>
            {OCTAVE.map((key) => {
                const NaturalNote = `${key.note}${octaveNum}`;
                const fullSharp = `${key.note}#${octaveNum}`;
                
                return (
                    <div className={styles.keyGroup}>
                        <div key={NaturalNote}
                            className={`${styles.whiteKey} ${isNoteActive(NaturalNote)} ? ${styles.active} : ''}`}  
                            onClick={() => onPlay && onPlay(NaturalNote
                            )}
                        >
                            <div className={styles.keyLabel}>
                                {key.note}
                            </div>
                        </div>

                    

                        {key.hasSharp && (
                            <div
                                className={`${styles.blackKey} ${isNoteActive(fullSharp)} ? ${styles.active} : ''}`}
                                onClick={() => onPlay && onPlay(fullSharp)}
                            >
                            </div>
                            )
                        }

                    </div>
                )
            })}
        </>
    )
}

export default function Piano({ activeNotes = [], onPlay }: PianoProps) {

    const octavestoRender = [4,5];

    return (
        <div className={styles.pianoContainer}>
            <div className={styles.keys}>
                {octavestoRender.map(octave => (
                    <SingleOctave
                        key = {octave}
                        octaveNum={octave}
                        activeNotes = {activeNotes}
                        onPlay={onPlay}
                    />
                ))}
            </div>
        </div>
)}