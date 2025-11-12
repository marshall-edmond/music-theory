import styles from '../styles/HomePage.module.css'

function Home(){
    return (
        <div>
        <div className={styles.h1}>
            <h1>Music Through <span className={styles.highlight}></span>Artistry</h1>
        </div>
        <div className={styles.h2}>
            <h2>Mission</h2>
        </div>
        <div className={styles.p}>
            <p>musicmap is an application designed for beginner musicians. We specialize on teaching music theory through artistry. Ready to get started on your theory journey?</p>
        </div>
        </div>
    )
}   

export default Home;