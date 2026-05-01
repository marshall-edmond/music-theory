import styles from '../styles/Profile.module.css';
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile(){
    const nav = useNavigate()
    const { logout, isLoggedIn, token} = useAuth();
    
    const callLogout = () => {
        logout();
        nav('/');
        
    }

    //function to get username from JWT
    const getUsername = (token: string | null) => {
        //if token is not null
        if (token) {
            //jwt shape xxxx.yyyyy.zzzz, x = headers, y = payload, z = signature
            const payload: string = token.split('.')[1];
            //atob function decodes base64 encoding
            const decodedPayload = JSON.parse(atob(payload))
            return decodedPayload.sub
        }
    }


    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.userContainer}>
                    
                    <div className={styles.pageTab}>
                        Account
                    </div>

                    <div className={styles.userPage}>
                        <div className={styles.profileHeader}>
                            <div className={styles.circle}></div>
                            <div className={styles.username}> {getUsername(token)} </div>
                        </div>
                        
                        <div className={styles.logout} onClick={() => callLogout()}>Logout</div>
                    </div>
                </div>
            </div>
        </>
        
    )
}
