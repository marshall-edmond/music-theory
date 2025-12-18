import React from 'react';
import Header from '../components/Header.tsx';
import Notes from '../components/lessons/Notes';
import { useParams } from 'react-router-dom';

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
        <div>
            <Header />
            {ActiveComponent ? (
                <ActiveComponent />
            ) : (
                <div className= "p-10 text-white"> Lesson not found!</div>
            )}
        </div>


    )



}


export default TheoryPage;