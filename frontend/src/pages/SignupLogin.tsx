import styles from '../styles/Signup.module.css';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Header from '../components/Header';




function SignupLogin (){


    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    {Login ? (<Login />
                    ) : (<Signup />)
                    }






                </div>
            </div>
        </>

    )
}

export default SignupLogin;
