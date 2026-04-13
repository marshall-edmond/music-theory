import { minorScale } from './MinorFormula';

//Generate minor scale for note
export const MinorTr = (note: string) => {
    const scale = minorScale(note);
    const result = [scale[0], scale[2], scale[4]];
    
    //return array of 1st, 3rd and 5th degreess
    return result
}