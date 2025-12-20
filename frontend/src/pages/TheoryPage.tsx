import React from 'react';
import Header from '../components/Header.tsx';
import Notes from '../components/lessons/Notes';
import Footer from '../components/Footer.tsx';
import { useParams } from 'react-router-dom';
import styles from '../styles/Theory.module.css';


/* Record creates types a key: (string) to a Value: React Functional Component */
const LessonRegistry : Record<string, React.FC> = {
    /* maps notes to LessonNotes */
    "notes": Notes,

};

function TheoryPage() {

    /* extracts url from React url configuration (notes*/
    const { lessonId } = useParams();

    /* renders notes or lessonId */
    const activeId  = lessonId || 'notes';

    const ActiveComponent = LessonRegistry[activeId];
 

    return (
        <div className={styles.pageFrame}>
            <Header />

            <div className={styles.lessonSlot}>
                {ActiveComponent ? (
                    <ActiveComponent />
                ) : (
                    <div className= "p-10 text-white"> Lesson not found!</div>
                )}
            </div>

            <Footer />
        </div>


    )
}

export default TheoryPage;