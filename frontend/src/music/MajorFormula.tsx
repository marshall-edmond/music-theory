import { flats, flatNotes, sharpNotes } from '../music/Universal';


//Amajor [A, B, C, Db, E, F, G, A]
//Bb major [Bb, C, D, Eb, F, G, A, Bb]

//helper function to resolve root to enharmonic equivalent
const enharmonicMap : Record <string,string> = {
    'D#' : 'Eb',
    'A#' : 'Bb',
    'G#' : 'Ab'
}
//whole, whole, half, whole, whole, whole, half
const formula = [2, 2, 1, 2, 2, 2, 1]

//function to return major scale notes
export const majorScale = (inputRoot: string) => {
    //counter variable 
    let octave = 4;

    //check if the inputRoot is in the enharmonic map, if true then convert to equivalent else keep.
    const root = enharmonicMap[inputRoot] ?? inputRoot

    //get the scale based on if the root is in flatnotes
    const scale = flats.includes(root) ? flatNotes : sharpNotes;

    //return list of strings
    const result = [root + octave]; 
    //function to append next note to result
    formula.reduce((acc, step) => {
        
        const nextNote = (acc + step) % scale.length;
        
        if  (nextNote < acc){
            octave++;
        }
        //append next note in scale to result
        const key = scale[nextNote]
        //if the key includes a flat use the flat of the nest note
       
            result.push(key + octave);
        return nextNote;

    }, scale.indexOf(root));

    
    return result; 

}