import { notesConfig } from '../components/configs/NotesConfig';
import { intervalConfig } from '../components/configs/IntervalConfig';
import { KeysandScalesConfig } from '../components/configs/KeysandScalesConfig';
import { useParams } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Theory.module.css';

//lesson object
type LessonConfig = {
    component: React.FC,
    next?: string,
    back?: string,
    number: string,
};
// in depth layers for lessons...
type LessonRoute = Record<string, Record<string, LessonConfig>>;

const lessonRoute: LessonRoute = {
    'notes': notesConfig,
    'intervals': intervalConfig,
    'keysandscales' : KeysandScalesConfig,
}

export default function Routing() {
    //get sectionid and lessonid from dynamic route
    const { sectionId, lessonId } = useParams<{ sectionId: string, lessonId: string }>();

    //get sectionname
    const section = lessonRoute[sectionId!];
    //get lesson from section
    const lesson = section[lessonId!];
    //access the active component
    const ActiveComponent = lesson.component;
    //change the pageframe if the lesson is a quiz or debrief
    const isQuiz = lessonId!.endsWith('-quiz') || lessonId!.endsWith('-debrief') || lessonId!.endsWith('intro');

    return (
        <>
            <Header />
            <div className={styles.pageFrame}>
                <div className={`${styles.lessonSlot} ${isQuiz ? styles.scrollable : ''}`}>
                        {ActiveComponent && <ActiveComponent />}
                </div>
            </div>
             <Footer back={lesson.back} next={lesson.next} number={lesson.number}/>
        </>
    )
}