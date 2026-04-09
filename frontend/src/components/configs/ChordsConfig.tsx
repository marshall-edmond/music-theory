import Chords from '../intro/ChordsIntro'

type config = {
    component: React.FC,
    back?: string,
    next?: string,
    number: string

}

//chords configuration
export const chordsConfig : Record<string, config> = {
    "intro" : {
        component : Chords,
        number: '1',
        back: '/theory/keysandscales/debrief',
        next: undefined
    }
}