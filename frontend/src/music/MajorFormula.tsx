//Amajor [A, B, C, Db, E, F, G, A]
//Bb major [Bb, C, D, Eb, F, G, A, Bb]


//major scale formula is whole, whole, half, whole, whole, whole, half
const sharps = ['C','C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
//flat notes array
const flats = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

//helper function to resolve root to enharmonic equivalent
const enharmonicMap : Record <string,string> = {
    'D#' : 'Eb',
    'A#' : 'Bb',
    'G#' : 'Ab'
}
//whole, whole, half, whole, whole, whole, half
const formula = [2, 2, 1, 2, 2, 2, 1]
//helper function to validate root is in the scale
const convertFlat = (flat : string) => flat.replace('♭', 'b')
const validateRoot = (root : string) => sharps.includes(root) || flats.includes(root);


//K:V to convert a sharp to a flat if root is a flat
const sharpstoflats: Record<string, string>= {
    'A#' : 'Bb',
    'C#' : 'Db',
    'D#' : 'Eb',
    'F#' : 'Gb',
    'G#' : 'Ab',
    }

//function to return major scale notes
export const majorScale = (inputRoot: string) => {
    //counter variable 
    let octave = 4;

    //validate root
    if (inputRoot.includes('♭')) inputRoot = convertFlat(inputRoot);
    if (!validateRoot(inputRoot)) 
        return [];

    //check if the inputRoot is in the enharmonic map, if true then convert to equivalent else keep.
    const root = enharmonicMap[inputRoot] ?? inputRoot

    //return list of strings
    const result = [root + octave];

    const chromatic = sharps.includes(root) ? sharps : flats
    //function to append next note to result
    formula.reduce((acc, step) => {
        
        const nextNote = (acc + step) % chromatic.length;
        
        if  (nextNote < acc){
            octave++;
        }
        //append next note in scale to result
        const key = chromatic[nextNote]
        //if the key includes a flat use the flat of the nest note
        if (root.includes('b')){
            result.push(sharpstoflats[key] ?? key + octave)
        }
        else {
            result.push(chromatic[nextNote] + octave);
        }


        
        return nextNote;

    }, chromatic.indexOf(root));

    
    return result; 

}