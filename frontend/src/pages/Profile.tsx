import styles from '../styles/Profile.module.css';
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useRef, useState } from 'react';
import { IoMdSearch } from "react-icons/io";


type ArtistImage = {
    name: string;
    avatar_url: string | null;
}

//Component to display user profile, allow users to update information
export default function Profile(){

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [, setMessage]= useState<string>('');
    //State variable to display dropdown
    const [isOpen, setOpen] = useState<boolean>(false);
    //State variable to store array of 
    const [images, setImages] = useState<ArtistImage[]>([]);
    const [search, setSearch] = useState<string>('');


    const nav = useNavigate()
    const { logout, token} = useAuth();


    const callLogout = () => {
        logout();
        nav('/');
        
    }

    // Keep the active debounce timer across rerenders so it can be cancelled.
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    //function to debounce before calling generateImages endpoint
    function HandleChange (e : React.ChangeEvent<HTMLInputElement>) {
        
        const value : string = e.target.value
        setSearch(value)

        if (timer.current) {
            clearTimeout(timer.current);
        }

        if (value.trim() === '') {
            setImages([]);
            return;
        }

        //TS evaluates generateImages(value) to find the value if the function is called, passing a callback function delays
        timer.current = setTimeout(() => {
            generateImages(value);
        }, 500);
    };

    //Function to call save user changes
    async function saveChanges (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {method : "PUT", headers : {"Content-Type": "application/json"}, body : JSON.stringify({"username": username, "password" : password, "email" : email})})
        const data = await response.json();

        if (response.ok){
            setMessage(data.detail)
        }
        else {
            setMessage(data.detail)
        }
    }

    //Function to generate 10 artist avatars
    async function generateImages(query : string) {
        const response = await fetch (`${import.meta.env.VITE_API_URL}/artists/search?q=${encodeURIComponent(query)}`)
        const data = await response.json();

        if (response.ok){
            setImages(data)
        }

        else (setImages([]));

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

                    {/*Display user profile picture and username*/}
                    <div className={styles.userPage}>
                        <div className={styles.profileHeader}>
                            <div className={styles.circle} onClick={() => setOpen(true)}/>
                            <div className={styles.dropdown}>
                                <div className={`${styles.dropdownContainer} ${isOpen ? styles.open : ""}`}>   
                                    <div className={styles.dropDownWrapper}>
                                        <div className={styles.searchIcon}>
                                            <IoMdSearch size={20}/>
                                        </div>
                                        <input className={styles.dropdownSearch}
                                        placeholder="       Search an Artist"
                                        value={search}
                                        onChange={HandleChange}/>
                                    </div>

                                    {/*Wrapper for artist avatar images*/}
                                    {images.length > 0 && (
                                        <div className={styles.artistGrid}>
                                            {images.map((artist) => (
                                                <button
                                                className={styles.artistOption}
                                                key={artist.avatar_url ?? artist.name}
                                                >
                                                    {artist.avatar_url && (
                                                        <img
                                                            className={styles.artistImage}
                                                            src={artist.avatar_url}
                                                            alt={artist.name}
                                                        />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className={styles.username}> {getUsername(token)} </div>
                        </div>

                         <div className={styles.displayContainer}>
                            <div className={styles.header}> Account Details </div>
                            <form
                            onSubmit={saveChanges} 
                            >
                                <div className={styles.btnContainer}>
                                    <input
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        placeholder="username"
                                        className={styles.bubble}
                                    >
                                    </input>

                                    <input
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="password"
                                        className={styles.bubble}
                                    >
                                    </input>

                                    <input
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="email"
                                        className={styles.bubble}
                                        >

                                    </input>

                                    <div 
                                    className={styles.saveChanges}
                                
                                    >
                                    Save Changes
                                    </div>
                                    
                                </div>
                                
                            
                            </form>
                            <div className={styles.logout} onClick={() => callLogout()}>Logout</div>
                        </div> 
                    </div>
                   
                </div>
            </div>
        </>
        
    )
}
