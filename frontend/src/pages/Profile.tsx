import styles from '../styles/Profile.module.css';
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useRef, useState, useEffect} from 'react';
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
    //
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [selectedAvatarUrl, setAvatarUrl] = useState<string>('');
    const [selectedArtistName, setArtistName] = useState<string>(''); 

    useEffect(() => {
        //If the ref is outside of the attached dropdown close the dropdown
        function handleClickOutside(e : MouseEvent) {
            if ( dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        //Create addEventListener and map to clickOutside function
        document.addEventListener("mousedown",
            handleClickOutside); 

            //side effect to remove the event listener
            return () => {
                document.removeEventListener("mousedown",
                    handleClickOutside);
                };
            }, []);


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
        }, 300);
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
    //Function to call backend to store artist avatar in backend
    async function updateAvatar (){
        const response = await fetch(`${import.meta.env.VITE_API_URL}/profile/avatar`, {method : "PUT", headers : {"Content-Type" : "application/json", Authorization: `Bearer ${token}`}, body: JSON.stringify({artist_avatar: selectedAvatarUrl, artist_name : selectedArtistName})});
        const data = await response.json();
    }

    //Setter function for artistavatar
    function setAvatar(artist : ArtistImage){
        if (!artist.avatar_url) return;

        setAvatarUrl(artist.avatar_url);
        setArtistName(artist.name);
    }

    

    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.userContainer}>
                    
                    <div className={styles.pageTab}>
                        <div className={styles.pageTabItem}>
                            Account
                        </div>
                    </div>

                    {/*Display user profile picture and username*/}
                    <div className={styles.userPage}>
                        <div className={styles.profileHeader} ref={dropdownRef}>
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
                                                onClick={() => { setAvatar(artist)}}
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

                                    <button 
                                    className={styles.submit}
                                    onClick={updateAvatar}
                                    disabled={!selectedAvatarUrl || !selectedArtistName}
                                    type="button"
                                    >
                                    Update Image
                                    </button>
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

                                    <button
                                        className={styles.saveChanges}
                                        type="submit"
                                    >
                                        Save Changes
                                    </button>
                                    
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
