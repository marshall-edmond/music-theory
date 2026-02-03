import styles from '../styles/Signup.module.css';
import { useState } from 'react';

function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className={styles.mainContainer}>
                <input value={username} onChange={e => setUsername(e.target.value)} placeholder="username"/>
            </div>
        </>
    )

}

export default Login;
 