import { majorScale } from './MajorFormula';

export const MajorTr = (root:string) => {

    //get the major scale of the root and slice to return triad
    const scale = majorScale(root)
    
    const triad = [scale[0], scale[2], scale[4]]

    return triad;
    
}