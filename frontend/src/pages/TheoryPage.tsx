import React from 'react';
import Header from '../components/Header.tsx';
import Notes from '../components/lessons/Notes';
import Footer from '../components/Footer.tsx';
import { useParams } from 'react-router-dom';
import styles from '../styles/Theory.module.css';
import Notes1 from '../components/lessons/Notes1.tsx';


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
        next: "/theory/1",
        back: undefined,
        number: "1",
    },

    "1" : {
        component: Notes1,
        next: undefined,
        back:"/theory/notes",
        number:"2",
    }
};

function TheoryPage() {
    /* 1. Get the ID from the URL */
    const { lessonId } = useParams<{ lessonId: string }>();
    /* useParams takes <key, value> in this case we specify to ensure inputs

    /* 2. Look up key is dynamic route from useParams*/
    const lookupKey = lessonId || 'notes';

    const config = LessonRegistry[lookupKey];

    const ActiveComponent = config?.component;

    return (
        <div className={styles.pageFrame}>
            <Header />

            <div className={styles.lessonSlot}>
                {ActiveComponent ? (
                    <ActiveComponent />
                ) : (
                    <div className="p-10 text-white">Lesson not found!</div>
                )}
            </div>
            
            {/* footer navigation */}
            <Footer next={config?.next} back={config?.back} number={config?.number} />
        </div>
    )
}

export default TheoryPage;