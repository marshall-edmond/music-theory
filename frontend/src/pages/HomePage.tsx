import styles from '../styles/HomePage.module.css'
import never from '../assets/never.jpg'

function Home(){
    return (
        <div>
        <div className= {styles.container}/>
            <img src={never} alt="never enough" className={styles.backgroundImage}/>
            <div className= {styles.hero} >
                <div className= {styles.h1} />
                    <h1> Music Through Artistry</h1>
        </div>
        </div>
    )
}   

export default Home;