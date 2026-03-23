import { notesConfig } from '../components/configs/NotesConfig';
import { intervalConfig } from '../components/configs/IntervalConfig';
import { useParams } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Theory.module.css';

type LessonConfig = {
    component: React.FC,
    next?: string,
    back?: string,
    number: string,
};
type LessonRoute = Record<string, Record<string, LessonConfig>>;

const lessonRoute: LessonRoute = {
    'notes': notesConfig,
    'intervals': intervalConfig,
}

export default function Routing() {
    const { sectionId, lessonId } = useParams<{ sectionId: string, lessonId: string }>();

    const section = lessonRoute[sectionId!];
    const lesson = section[lessonId!];

    const ActiveComponent = lesson.component;
    return (
        <>
            <Header />
            <div className={styles.pageFrame}>
                <div className={styles.lessonSlot}>
                        {ActiveComponent && <ActiveComponent />}
                </div>
            </div>
             <Footer back={lesson.back} next={lesson.next} number={lesson.number}/>
        </>
    )
}