import ChordsIntro from '../intro/ChordsIntro'
import Chords from '../lessons/chords/Chords';

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
        next: undefined,
    }
}