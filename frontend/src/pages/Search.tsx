import Header from '../components/Header.tsx'
import styles from '../styles/Search.module.css';
import { useParams } from 'react-router'
import { useState, useEffect} from 'react'




export default function Search(){
    const [art, setArt] = useState<string>('')
    const [lyrics, setLyrics] = useState<string>('');


   
    //Get artist name and track title from url
    let { artist, track_title } = useParams<{ artist:string, track_title: string}>();

    artist = artist?.replace(/-/g,' ')
    track_title = track_title!.replace(/-/g, ' ')

    async function fetchCoverart(){
        const response = await fetch(`${import.meta.env.VITE_API_URL}/songsearch`, {method : "POST", headers : {"Content-Type" : "application/json"}, body : JSON.stringify({ query: `${artist} ${track_title}`})})
        const data = await response.json();
        
        //Parse first result of data
        const TopResult = data[0]


        if (response.ok){
            setArt(TopResult.cover_art);
        }
    }
        //fetch lyrics from backend
        async function fetchLyrics(){
        const response = await fetch(`${import.meta.env.VITE_API_URL}/lyrics/${artist}/${track_title}`, {method : 'GET', headers : {"Content-Type" : "application/json"}})
        const data = await response.json()

        if (response.ok){
            setLyrics(data)
        }
    }

     useEffect(() => {
        fetchCoverart()
        fetchLyrics()
    }, [])


    return (
        <div>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.songImage}>
                    <img src={art}></img>
                    <div className={styles.songContainer}>
                        <div className={styles.songTitle}>{track_title}</div>
                        <div className={styles.artistName}>{artist}</div>
                        <div className={styles.details}>
                            <span>key: --</span>
                            <span>tempo: </span>
                            <span>genre:</span>
                        </div>
                        <div className={styles.progression}> 
                            Progression: 
                        </div>
                    </div>
                    
                </div>

                <div className={styles.lyricsContainer}>
                    <span className={styles.LyricsTitle}>Lyrics</span>
                    <span className={styles.lyrics}>{lyrics}</span>
                </div>
            </div>
        </div>
    )
}

