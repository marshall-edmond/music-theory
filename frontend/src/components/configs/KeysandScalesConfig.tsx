import KeysandScalesIntro from '../intro/KeysandScalesIntro';
import KeysandScales from '../lessons/keysandscales/KeysandScales';
import ScaleRules from '../lessons/keysandscales/ScaleRules';
import MajorScale from '../lessons/keysandscales/MajorScale';
import MinorScale from '../lessons/keysandscales/MinorScale';

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
        next: undefined,
        back: "/theory/keysandscales/majorscale",
        number: '5',
    }
}

