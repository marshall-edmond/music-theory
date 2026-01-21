
import Header  from '../components/Header.tsx'
import styles from '../styles/Signup.module.css';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';





function Signup(){

    const [loading, setLoading] = useState(false)
    const [error, setError ] = useState('')

    const navigate = useNavigate()


    //hold state of usernmae and password
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(){
        //on button click send data to backend to verify user instance exists inside of database..

        setLoading(true)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method : 'POST',
            headers : {'Content-type': 'application/json'},
            body : JSON.stringify({ username, password})
        }, )

        const result = await response.json()
        


        if (response.ok) {
            //useNavigate hook returns a function to navigate(to (url), options?)
            navigate('/')
        } else {
           //handle error
           setError(result.detail)

        }
    }
   
    
    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <div className={styles.containerLeft}>
                    </div>

                    <div className={styles.containerRight}>
                        <section className={styles.forms}>
                            <h1 className={styles.h1}>
                                Sign In
                            </h1>
                            <label>
                                <input name="username" placeholder = "Username" value = {username} onChange={ e =>  setUsername(e.target.value) }/>
                            </label>
                            <label>
                                <input name="password" placeholder = "Password" value = {password} onChange ={ e => setPassword(e.target.value) }/>
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