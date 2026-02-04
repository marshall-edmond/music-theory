import styles from '../styles/Signup.module.css';
import { useState} from 'react';
import { useNavigate } from 'react-router';

function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const nav = useNavigate()


    //function to Hanld Submit and fetch request from server
    async function HandleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    //fetch request sending username and password to server for validation
        setLoading(true)
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: {username}, password: {password}})})
            if (response.ok) {
                nav('/')
            } else {
                //
                setError('')
            }
        } catch(err) {

        } finally {
            setLoading(false)
        }
    
    }

    return (
        <form onSubmit={HandleSubmit}>
            <h2>Username</h2>
            <input
            placeholder="username"
            value={username}
            //Change value of username
            onChange={e => setUsername(e.target.value)}
            />
            <h2>Password</h2>
            <input 
            type="password"
            placeholder="password"
            //chance password
            onChange={e => setPassword(e.target.value)}
            />
            <button className={styles.button1} type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Log in!'}
            </button>
        </form>
    )

}

export default Login;
 