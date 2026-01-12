import Header  from '../components/Header.tsx'
import styles from '../styles/Signup.module.css';
import { useState } from 'react';





function Signup(){
    const [formData, setFormData] = useState({
        username: '',
        password: '', 
        email: '',
    }
    )




    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <section className={styles.forms}>
                        <h1 className={styles.h1}>
                            Sign Up
                        </h1>
                        <form className={styles.form}>
                            Username
                        </form>
                        <form className={styles.form} >
                            Passwword
                        </form>
                        <form className={styles.form}>
                            Email
                        </form>

                    </section>
                </div>
            </div>
        </>
        
    )
}

export default Signup;