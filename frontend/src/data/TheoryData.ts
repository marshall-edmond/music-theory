export interface Lesson {
    title:string;
    description:string;


    type: 'reading' | 'interactive' | 'quiz';


    algoMode?:'scale_generate' | 'interval_calc' | 'chord_build';

    nextLesson:string;

}

export const theoryData: Record<string, Lesson> = {
    "notes": {
        title: 'Lesson 1: Notes',
        description:'The foundation of all Western music',

        type:'reading',

        nextLesson: "scales"
        }
};