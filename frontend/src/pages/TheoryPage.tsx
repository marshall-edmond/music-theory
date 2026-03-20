import React from 'react';
import Notes from '../components/lessons/Notes';
import Notes1 from '../components/lessons/Notes1.tsx';
import Notes2 from '../components/lessons/Notes2.tsx';
import NotesQuiz from '../components/Quizzes/NotesQuiz.tsx';
import NotesDebrief from '../components/debriefs/NotesDebrief.tsx';



 /* new type which has a component */
type LessonConfig = { 
    component: React.FC;
    next?: string; 
    back?: string;
    number: string;
}

  export const LessonRegistry : Record<string, LessonConfig> = {
    "notes" : {      
        component: Notes,
        next: "/theory/notes1",
        back: undefined,
        number: "1",
    },

    "notes1" : {
        component: Notes1,
        next: '/theory/notes2',
        back:"/theory/notes",
        number:"2",
    },

    "notes2" : {
        component: Notes2,
        next: '/theory/notes-quiz',
        back: '/theory/notes1',
        number:'3',
    },

    "notes-quiz" : {
        component: NotesQuiz,
        next: '/theory/notes-debrief',
        back: '/theory/notes2',
        number:'4',
    },

    "notes-debrief" : {
        component: NotesDebrief,
        next: undefined,
        back:'/theory/notes-quiz',
        number: '5',
    }

};
