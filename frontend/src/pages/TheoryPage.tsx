import React from 'react';
import Header from '../components/Header.tsx';
import Notes from '../components/lessons/Notes';
import Footer from '../components/Footer.tsx';
import { useParams } from 'react-router-dom';
import styles from '../styles/Theory.module.css';
import Notes1 from '../components/lessons/Notes1.tsx';
import Notes2 from '../components/lessons/Notes2.tsx';
import NotesQuiz from '../components/Quizzes/NotesQuiz.tsx';



 /* new type which has a component */
type LessonConfig = { 
    component: React.FC;
    next?: string; 
    back?: string;
    number: string;
}

  const LessonRegistry : Record<string, LessonConfig> = {
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
        next: undefined,
        back: '/theory/notes2',
        number:'4',
    }
};

function TheoryPage() {
    /* id from useParams */
    const { lessonId } = useParams<{ lessonId: string }>();
    /* useParams takes <key, value> in this case we specify to ensure inputs

    /* 2. Look up key is dynamic route from useParams*/
    const lookupKey = lessonId || 'notes';

    const isQuiz = lessonId?.endsWith('-quiz');

    const config = LessonRegistry[lookupKey];

    const ActiveComponent = config?.component;

    return (
        <>
            <Header />
            <div className={`${styles.pageFrame} ${isQuiz ? styles.scrollable : ''}`}>
                <div className={styles.lessonSlot}>
                    {ActiveComponent ? (
                        <ActiveComponent />
                ) : (
                    <div className="p-10 text-white">Lesson not found!</div>
                )}
                </div>
            </div>
            
            {/* footer navigation */}
            <Footer next={config?.next} back={config?.back} number={config?.number} />
        </>
    )
}

export default TheoryPage;