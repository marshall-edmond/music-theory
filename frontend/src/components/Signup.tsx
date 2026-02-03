import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from '../styles/Signup.module.css';
import { FaLock } from 'react-icons/fa';


function Signup(){
    //states fror form handling 
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    //navigation function
    const nav = useNavigate()
    
    async function HandleSubmit(){
        try {
            // fetch signup endpoint
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {method: "POST", body: JSON.stringify({username, password, email})});
            const result = await response.json();

            // if user signup is successful, navigate to the home screeen
            if (response.ok){
                nav('/');

            // if user sign up is unsuccessful, set and display error message
                } else {
                    setLoading(false); 
                    setError(result);

                    return (
                        <div className={styles.error}>{error}</div>
                    )
                }
            }

        catch (err) {
            return (
                <div className={styles.error}>{error}</div>
            )

        }



    }

    return (
        
        <div className={styles.signup}>
            <h2> Username </h2>
            <input placeholder="John Doe" value={username} onChange={e => setUsername(e.target.value)}></input>

            <h2 >Email Address </h2>
            <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)}></input>

            <h2>Password</h2>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>

            <h2> Confirm Password </h2>
            <input type="password" value={confirm} onChange={(e => setConfirm(e.target.value))}><FaLock /></input>

            <button className={styles.button} type="button" onSubmit={() => HandleSubmit()}> Create Account </button>
        </div>



    )}

export default Signup;
