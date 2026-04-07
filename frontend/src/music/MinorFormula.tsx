const sharps = ['C','C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const flats = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

//whole, half, whole, whole, half, whole, whole
const formula = [2, 1, 2, 2, 1, 2, 2]

const validateRoot = (root: string) => sharps.includes(root) || flats.includes(root);

//K:V to convert a sharp to a flat if root is a flat
const sharpstoflats: Record<string, string>= {
    'A#' : 'Bb',
    'C#' : 'Db',
    'D#' : 'Eb',
    'F#' : 'Gb',
    'G#' : 'Ab',
    }

const convertFlat = (note: string) => note.replace('♭', 'b');


export const minorScale = (inputRoot: string) => {
     let octave = 4;

     //if the root contains a flat use flats for all values
     if (inputRoot.includes('♭')) inputRoot = convertFlat(inputRoot)

     if (!validateRoot(inputRoot))
        return [];

    const root = inputRoot;

    const result: string[] = [root + octave]

    //find what scale the input root is in and set to the array
    const chromatic = sharps.includes(inputRoot) ? sharps : flats;

    formula.reduce((acc, step) => {

        const nextNote = (acc + step) % chromatic.length;
         
        //if the array wraps increment octave numbers
        if ( nextNote < acc){
            octave++;
        }

        const key = chromatic[nextNote];

        //if the root includes a flat 
        if (inputRoot.includes('b') && key.includes('#')){
            result.push((sharpstoflats[key] ?? key) + octave)
        }

        else result.push(key + octave);

        return nextNote;

    }, chromatic.indexOf(root));
    // TODO: build out minor scale using formula
    return result;
}
