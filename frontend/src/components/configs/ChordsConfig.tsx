import ChordsIntro from '../intro/ChordsIntro'
import Chords from '../lessons/chords/Chords';
import MajorTriads from '../lessons/chords/MajorTriads';
import MinorTriads from '../lessons/chords/MinorTriads';
import DiminishedTriads from '../lessons/chords/DiminishedTriads';
import ChordsQuiz from '../Quizzes/ChordsQuiz';
import ChordsDebrief from '../debriefs/ChordsDebrief';
import TheoryDebrief from '../debriefs/TheoryDebrief';
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
        back: '/theory/keysandscales/-debrief',
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
        number: '3',
        back: '/theory/chords/chords',
        next: '/theory/chords/minortriads',
    },

    "minortriads" : {
        component: MinorTriads,
        number : '4',
        back : '/theory/chords/majortriads',
        next : '/theory/chords/diminishedtriads',
    },
    "diminishedtriads": {
        component: DiminishedTriads,
        number: '5',
        back : '/theory/chords/minortriads',
        next : '/theory/chords/chords-quiz'
    },
    "chords-quiz" : {
        component: ChordsQuiz,
        number: '6',
        back: '/theory/chords/diminishedtriads',
        next: '/theory/chords/chords-debrief',
    },
    "chords-debrief" : {
        component: ChordsDebrief,
        number: '7',
        back: '/theory/chords/chords-quiz',
        next: '/theory/chords/theory-debrief'
    },
    "theory-debrief" : {
        component : TheoryDebrief,
        number: '8',
        back: '/theory/chords/chords-debrief',
        next: undefined
    }
}