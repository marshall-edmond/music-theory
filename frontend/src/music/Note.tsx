//list of notes including all accidentals
export const ListNotes = ['C', 'C#', 'D♭', "D", "D#", 'E♭', 'E', 'F', 'F#', 'G♭', 'G', 'G#', 'A♭', 'A', 'A#', 'B♭', 'B']

export const randomNotes = () =>{
    return ListNotes[Math.floor(Math.random() * ListNotes.length)];
    
}  