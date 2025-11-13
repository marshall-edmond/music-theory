import styles from '../styles/HomePage.module.css'
import never from '../assets/never.jpg'

function Home(){
    return (
        <>
        <div className= {styles.container}>
            <img src={never} alt="never enough" className={styles.backgroundImage}/>
            <div className= {styles.hero}>
                <div className= {styles.h1}>
                    <h1> Music Through Artistry</h1>
                </div>
            </div>
            <div className= {styles.p}>
                <p>Learning music theory doesn't have to feel like memorizing rules. Try out our Theory Roadmap which will teach you musical concepts through some of your favorite songs.</p>
            </div> 
        </div>
        </>
    )
}   

export default Home;