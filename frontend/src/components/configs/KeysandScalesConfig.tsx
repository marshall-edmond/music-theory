import KeysandScalesIntro from '../intro/KeysandScalesIntro';

type KeysandScales = {
    component: React.FC,
    next?: string,
    back?: string,
    number: string,
}

export const KeysandScalesConfig : Record<string, KeysandScales> = {
    "intro" : {
        component: KeysandScalesIntro,
        next: undefined,
        back: '/theory/intervals/intervals',
        number: '1',
    },
}

