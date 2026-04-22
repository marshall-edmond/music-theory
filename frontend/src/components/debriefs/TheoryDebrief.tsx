import styles from '../../styles/Debrief.module.css';
import logo_png from '../../assets/logo_circle.png';


export default function TheoryDebrief(){
    return (
        <div className={styles.mainContainer}>
                <img src={logo_png} alt='logo' className={styles.logo}></img>
        </div>
    )
}