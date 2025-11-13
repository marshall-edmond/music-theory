import styles from '../styles/HomePage.module.css'
import never from '../assets/never.jpg'

function Home(){
    return (
        <div className= {styles.container}>
            <img src={never} alt="never enough" className={styles.backgroundImage}/>
        </div>
    )
}   

export default Home;