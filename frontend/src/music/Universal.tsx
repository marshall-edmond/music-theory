import { randomNotes } from '../music/Note';
import { MajorTr} from '../music/MajorTr';
import { MinorTr } from '../music/MinorTr';
import { Diminished } from '../music/Diminished';
//flat family
export const flats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb']

//navigate arrays based on if root is in ^flats
export const flatNotes =  ['C', 'Db', 'D', 'Eb','E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
export const sharpNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

export const sharpstoflats : Record<string, string>= {
    'C#' : 'Db',
    'D#' : 'Eb',
    'F#' : 'Gb',
    'G#' : 'Ab',
    'A#' : 'Bb'
}

interface chordProps {
    notes: string[],
    name: string,
}

const map : Record<number, (root: string) => string[]> = {
    0 : MajorTr,
    1 : MinorTr,
    2 : Diminished
}

//generate labels using index
const labels : string[] = ['Major', 'Minor', 'Diminished']
//Generate chord 
export const randomChord = () : chordProps => {
    //generate random root
    const root = randomNotes();

    //generate a random index to use as key in map
    const index : number = Math.floor(Math.random() * 3) ;
    const scale : (root: string) => string[] = map[index];
    const label = labels[index]

    //return an option with notes and name
    return { notes : scale(root), name : root + " " + label}


}

//Fisher yates algorigthm to randomize order of the array 
export const random = (array : string[]) => {
    for ( let i = array.length - 1; i > 0; i--){
        //get another index to swap
        const j = Math.floor(Math.random() * (i + 1))

        //swap the values of the arrays at indexes i,j
        let temp = array[i]

        array[i] = array[j]
        array[j] = temp
    }
    return array;
}
