import styles from '../styles/Signup.module.css';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Header from '../components/Header';
import  { useState }  from 'react';
import { FcGoogle } from 'react-icons/fc';




function SignupLogin (){

const [login, setLogin] = useState(false)

    return (
        <div>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <h1> Welcome to Music Map </h1>
                    <h2> Master music theory with expert guidance</h2>
                
                
                    {/*Tab logic*/}
    
                        {login ? (
                        <div className={styles.tabContainer}>
                            <button className={styles.tab} onClick={() => setLogin(false)}>Sign up</button>
                            <button className={styles.tabActivated}>Log in</button>
                        </div>
                        ) : (
                        <div className={styles.tabContainer}>
                            <button className={styles.tabActivated}>Sign up</button>
                            <button className={styles.tab} onClick={() => setLogin(true)} style={{borderRadius : '16px'}}>Log in</button>
                        </div>
                        )}
                  

                    <button className={styles.Google}> <FcGoogle size={16}/> Continue with Gmail </button>

                    {login ? (<Login />
                    ) : (<Signup />)};

                </div>
            </div>
        </div> )
}

export default SignupLogin;
