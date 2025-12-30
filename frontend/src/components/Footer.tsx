import styles from '../styles/Theory.module.css';
import { Link } from 'react-router-dom';

//button takes back and next
interface btnProps { 
    back?: string,
    next?: string,
    number: string,
}
//function to return footer with back and next handling
export default function Footer({back, next, number}: btnProps) {

    return (
        <footer className={styles.footer}>
            <div className={styles.center}>
                {number}/6
            </div>
            <div className={styles.btnContainer}>
                {back ? (
                    <div className={styles.btn}>
                        <Link to={back}>Back</Link>
                    </div>
                ) : (
                    <div className={styles.deactivated}>Back</div>
                )}

                {next ? (
                    <div className={styles.btn}>
                        <Link to={next}>Next</Link>
                    </div>
                ) : (
                    <div className={styles.deactivated}>Next</div>
                )}
            </div>
        </footer>
    )

}


