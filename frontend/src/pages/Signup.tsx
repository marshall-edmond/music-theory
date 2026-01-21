
import Header  from '../components/Header.tsx'
import styles from '../styles/Signup.module.css';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';





function Signup(){

    const [loading, setLoading] = useState(false)
    const [error, setError ] = useState('')


    const navigate = useNavigate()
 

    //hold state of usernmae and password
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(){
        //on button click send data to backend to verify user instance exists inside of database..
        
        try {
            setLoading(true)
            const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
                method : 'POST',
                headers : {'Content-type': 'application/json'},
                body : JSON.stringify({ username, password})
            }, )

            const result = await response.json()
        
            // after loading set state to false
            setLoading(false)
    

            if (response.ok) {
            //useNavigate hook returns a function to navigate(to (url), options?)
            navigate('/')
            setError('')
            } else {
            //handle error
            setError(result.detail)
            }

        }  catch (err) {
                setError('Unable to connect to server. Please try again.')
        } finally {
            setLoading(false)
        }
    }
   
    
    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <div className={styles.containerLeft}>
                        <div className={styles.header}>
                            Welcome back!
                        </div>
                    </div>

                    <div className={styles.containerRight}>
                        <section className={styles.forms}>
                            <h1 className={styles.h1}>
                                Sign In
                            </h1>
                            <button className={styles.button}>
                                <FcGoogle size={26} />
                                Continue with Google
                            </button>
                            <div className={styles.line}/>
                            <div style={{fontSize : '16px'}}>
                                Or
                            </div>
                            <label>
                                <input name="username" placeholder = "Username" value = {username} onChange={ e =>  setUsername(e.target.value) }/>
                            </label>
                            <label>
                                <input name="password" type ="password" placeholder = "Password" value = {password} onChange ={ e => setPassword(e.target.value) }/>
                            </label>
                            <button type = "button" className={styles.btn} onClick={ () => handleSubmit()}>
                                Sign In
                            </button>

                            {/*If there is an Error on submit, render error under the form*/}

                            {loading && (
                                <div className={styles.loading}/>
                            )
                            }

                            <div className={styles.error}>
                                {error}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Signup;