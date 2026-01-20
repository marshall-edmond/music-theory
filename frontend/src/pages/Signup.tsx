
import Header  from '../components/Header.tsx'
import styles from '../styles/Signup.module.css';



function Signup(){




   
    
    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <section className={styles.forms}>
                        <h1 className={styles.h1}>
                            Sign In
                        </h1>
                        <label>
                            <input name="username" placeholder = "Username"/>
                        </label>
                        <label>
                            <input name="password" placeholder = "Password" />
                        </label>
                        <button type = "button"className={styles.btn}>
                            Sign In
                        </button>
                    </section>
                </div>
            </div>
        </>
        
    )
}

export default Signup;