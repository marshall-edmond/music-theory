import React from 'react';
import Notes from '../lessons/notes/Notes.tsx';
import Notes1 from '../lessons/notes/Notes1.tsx';
import Notes2 from '../lessons/notes/Notes2.tsx';
import NotesQuiz from '../Quizzes/NotesQuiz.tsx';
import NotesDebrief from '../debriefs/NotesDebrief.tsx';



 /* new type which has a component */
type LessonConfig = { 
    component: React.FC;
    next?: string; 
    back?: string;
    number: string;
}


  export const notesConfig : Record<string, LessonConfig> = {
    "notes" : {      
        component: Notes,
        next: "/theory/notes/notes1",
        back: undefined,
        number: "1",
    },

    "notes1" : {
        component: Notes1,
        next: '/theory/notes/notes2',
        back:"/theory/notes/notes",
        number:"2",
    },

    "notes2" : {
        component: Notes2,
        next: '/theory/notes/notes-quiz',
        back: '/theory/notes/notes1',
        number:'3',
    },

    "notes-quiz" : {
        component: NotesQuiz,
        next: '/theory/notes/notes-debrief',
        back: '/theory/notes/notes2',
        number:'4',
    },

    "notes-debrief" : {
        component: NotesDebrief,
        next: '/theory/intervals/intro',
        back:'/theory/notes/notes-quiz',
        number: '5',
    }

};

export const notesLength = Object.keys(notesConfig).length
