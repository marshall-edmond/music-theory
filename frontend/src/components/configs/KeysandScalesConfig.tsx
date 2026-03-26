import KeysandScalesIntro from '../intro/KeysandScalesIntro';
import KeysandScales from '../lessons/keysandscales/KeysandScales';


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
        next : undefined,
        back : '/theory/keysandscales/intro',
        number: '2',
    }
}

