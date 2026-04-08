import KeysandScalesIntro from '../intro/KeysandScalesIntro';
import KeysandScales from '../lessons/keysandscales/KeysandScales';
import ScaleRules from '../lessons/keysandscales/ScaleRules';
import MajorScale from '../lessons/keysandscales/MajorScale';
import MinorScale from '../lessons/keysandscales/MinorScale';
import ScaleComparison from '../lessons/keysandscales/ScaleComparison';
import Keys from '../lessons/keysandscales/Keys';
import KeysandScalesQuiz from '../Quizzes/KeysandScalesQuiz';

type KeysandScales = {
    component: React.FC,
    next?: string,
    back?: string,
    number: string,
}

export const KeysandScalesConfig : Record<string, KeysandScales> = {
    "intro" : {
        component: KeysandScalesIntro,
        next: '/theory/keysandscales/keys',
        back: '/theory/intervals/intervals',
        number: '1',
    },
    "keys" : {
        component: KeysandScales,
        next : "/theory/keysandscales/scalerules",
        back : '/theory/keysandscales/intro',
        number: '2',
    },
    "scalerules" : {
        component : ScaleRules,
        next: "/theory/keysandscales/majorscale",
        back: "/theory/keysandscales/keys",
        number: '3',
    },
    "majorscale" : {
        component: MajorScale,
        next: "/theory/keysandscales/minorscale",
        back: "/theory/keysandscales/scalerules",
        number: '4',
    },
    "minorscale" : {
        component: MinorScale,
        next: "/theory/keysandscales/scalecomparison",
        back: "/theory/keysandscales/majorscale",
        number: '5',
    },
    "scalecomparison" : {
        component: ScaleComparison,
        next: "/theory/keysandscales/keyslesson",
        back: "/theory/keysandscales/minorscale",
        number: '6',
    },
    "keyslesson" : {
        component: Keys,
        next: "/theory/keysandscales/keysandscales-quiz",
        back: "/theory/keysandscales/scalecomparison",
        number: '7',
    },
    "keysandscales-quiz" : {
        component: KeysandScalesQuiz,
        next: undefined,
        back: "/theory/keysandscales/keyslesson",
        number: '8',
    }
}

