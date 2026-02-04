import { useState } from 'react';
import type { FormEvent } from 'react';
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
    
    async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (password !== confirm) {
                setError('Passwords do not match.')
                return
            }


        try {
            // fetch signup endpoint
            setLoading(true);

            const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {method: "POST", headers: {'Content-type': "application/json"} , body: JSON.stringify({username, password, email})});
            const result = await response.json();

            // if user signup is successful, navigate to the home screeen
            if (response.ok){
                nav('/');
            // if user sign up is unsuccessful, set and display error message
                } else {
                    setLoading(false); 
                    setError(result.message);
                }
            } catch (err) {
                setError('Network Error')
        } finally {
            setLoading(false)
    
    }
}

    return (
        
        <form className={styles.signup} onSubmit={HandleSubmit}>
            <h2> Username </h2>
            <input placeholder="John Doe"
            value={username}
            onChange={e => setUsername(e.target.value)}
            />


            <h2 >Email Address </h2>
            <input type="email"
            placeholder="you@example.com"
            value={email}
             onChange={e => setEmail(e.target.value)}/>

            <h2>Password</h2>
            <input type="password"
            value={password}
            placeholder="........."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>

            <h2> Confirm Password </h2>
            <div className={styles.passwordRow}>
                <input type="password"
                value={confirm} 
                placeholder="........"
                onChange={(e => setConfirm(e.target.value))}/>
                <FaLock/>
            </div>

            <button className={styles.button1} type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create Account'}
            </button>


            {error && <div className={styles.error}>{error}</div>}
        </form>
    )}

export default Signup;
