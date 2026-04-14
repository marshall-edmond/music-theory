//list of notes including all accidentals
export const ListNotes = ['C', 'C#', 'Db', "D", "D#", 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B']

export const randomNotes = () =>{
    return ListNotes[Math.floor(Math.random() * ListNotes.length)];
    
}  