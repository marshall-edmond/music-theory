import KeysandScalesIntro from '../intro/KeysandScalesIntro';
import KeysandScales from '../lessons/keysandscales/KeysandScales';
import ScaleRules from '../lessons/keysandscales/ScaleRules';
import MajorFormula from '../lessons/keysandscales/MajorFormula';

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
        next: "/theory/keysandscales/majorformula",
        back: "/theory/keysandscales/keys",
        number: '3',
    },
    "majorformula" : {
        component: MajorFormula,
        next: undefined,
        back: "/theory/keysandscales/scalerules",
        number: '4',
    }
}

