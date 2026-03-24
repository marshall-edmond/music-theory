import KeysandScalesIntro  from '../intro/KeysandScalesIntro';

type KeysandScales = {
    component: React.FC,
    next?: string | null,
    back?: string | null,
    number: string,
}

export const KeysandScalesConfig : Record<string, KeysandScales> = {
    "intro" : {
        component: KeysandScalesIntro,
        next: undefined,
        back: 'theory/intervals/intervals',
        number: '1',
    },
}

