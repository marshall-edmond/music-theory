import { minorScale } from './MinorFormula';
import { flatNotes,  sharpstoflats } from '../music/Universal';

//helper function to lower the 5th
const dimFifth = (note : string) => {
   const dim = flatNotes.indexOf(note)
   const final = ( dim - 1 + flatNotes.length) % flatNotes.length

   return flatNotes[final]

}

//return diminished triad of given root
export const Diminished = ( root : string) => {

     let fifth;

    //return minor scale of root
    const scale: string[] = minorScale(root);

   
    //strip octave number 
    let octave : string | number = scale[4].slice(-1)

    let note = scale[4].slice(0, -1)

    if ( note === 'C'){
      octave = Number(octave);
      octave -= 1;
      octave = String(octave);
    } 

    //if fifth is a flat convert to flat
    note = sharpstoflats[note] ?? note;

    //get the lowered fifth from the function
    fifth = dimFifth(note)
    const result = [scale[0], scale[2], fifth + octave]
    console.log(result)

    return result;
}
