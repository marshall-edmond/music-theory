
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
                            Sign Up
                        </h1>
                        <input type="Username" className={styles.form}>
                            Username
                        </input>
                        <input type="Password" className={styles.form}>
                            Password
                        </input>
                        <input type="Email" className={styles.form}>
                            Email
                        </input>
                        <button className={styles.btn}>
                            submit
                        </button>
                    </section>
                </div>
            </div>
        </>
        
    )
}

export default Signup;