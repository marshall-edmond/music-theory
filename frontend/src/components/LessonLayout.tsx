import styles from '../styles/Theory.module.css';


export interface LayoutProps{

    left : React.ReactNode; 
    right : React.ReactNode;


}


 export default function LessonLayout({ left, right } : LayoutProps) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftPanel}>
                {left}
            </div>
            <div className={styles.rightPanel}>
                {right}
            </div>
        </div>
    ) 
}


