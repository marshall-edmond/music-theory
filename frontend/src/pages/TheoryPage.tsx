import React from 'react';
import Header from '../components/Header.tsx';
import Notes from '../components/lessons/Notes';
import { theoryData } from '../data/TheoryData';
import { useParams } from 'react-router-dom';
import Layout from '../components/LessonLayout';

/* Record creates types a key: (string) to a Value: React Functional Component */
const Lesson : Record<string, React.FC> = {
    /* maps notes to LessonNotes */
    "notes": Notes,

};

function TheoryPage() {

    /* extracts url from React url configuration (notes*/
    const { lessonId } = useParams();

    /* renders notes or lessonId */
    const activeId  = lessonId || 'notes';

    const ActiveComponent = Lesson[activeId];
 

    return (
        <div>
            <Header />
            <Layout />
        </div>


    )



}


export default TheoryPage;