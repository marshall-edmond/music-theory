import { flats, flatNotes, sharpNotes } from '../music/Universal';

//whole, half, whole, whole, half, whole, whole
const formula = [2, 1, 2, 2, 1, 2, 2]


export const minorScale = (inputRoot: string) => {
     let octave = 4;

    const root = inputRoot;

    const result: string[] = [root + octave]

    //find what scale the input root is in and set to the array
    const scale = flats.includes(inputRoot) ? flatNotes : sharpNotes;

    formula.reduce((acc, step) => {

        const nextNote = (acc + step) % scale.length;
         
        //if the array wraps increment octave numbers
        if ( nextNote < acc){
            octave++;
        }

        const key = scale[nextNote];

        result.push(key + octave);

        return nextNote;

    }, scale.indexOf(root));
    // TODO: build out minor scale using formula
    return result;
}
