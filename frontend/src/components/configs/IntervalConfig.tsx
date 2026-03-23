
import IntroInterval from '../intro/IntroInterval';
import Intervals from '../../components/lessons/Intervals';



type lesson = {
    component : React.FC,
    back?: string,
    next?: string,
    number: string,
}

//object for different lessons
export const intervalConfig : Record<string, lesson> = {
    "intro" : {
        component: IntroInterval,
        back: '/theory/notes/notes-debrief',
        next: undefined,
        number: '1',
    },

    "intervals" : {
        component: Intervals,
        back: undefined,
        next: undefined,
        number: '2',
    }
}
