import ChordsIntro from '../intro/ChordsIntro'
import Chords from '../lessons/chords/Chords';
import MajorTriads from '../lessons/chords/MajorTriads';

type config = {
    component: React.FC,
    back?: string,
    next?: string,
    number: string

}

//chords configuration
export const chordsConfig : Record<string, config> = {
    "intro" : {
        component : ChordsIntro,
        number: '1',
        back: '/theory/keysandscales/debrief',
        next: '/theory/chords/chords'
    }, 
    "chords" : {
        component: Chords,
        number: '2',
        back: '/theory/chords/intro',
        next:'/theory/chords/majortriads',
    },
    "majortriads" : {
        component: MajorTriads,
        number: '2',
        back: '/theory/chords/chords',
        next: undefined,
    }
}