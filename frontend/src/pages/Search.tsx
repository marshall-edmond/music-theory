import Header from '../components/Header.tsx'
import styles from '../styles/Search.module.css';
import { useParams } from 'react-router'
import { useState, useEffect} from 'react'




export default function Search(){
    //
    const [art, setArt] = useState<string>('')
    const [lyrics, setLyrics] = useState<string>('');
    const [key, setKey] = useState<string>('');
    const [tempo, setTempo] = useState<string>('');
    const [time_signature, setTime] = useState<string>('');
    let id : string = '';


    //split lyrics by line
    const take = lyrics.split('\n')

    const startIndex =take.findIndex(line => line.startsWith('['))
    const trimmed = startIndex !== -1 ? take.slice(startIndex) : take;
   
    //Get artist name and track title from url
    let { artist, track_title } = useParams<{ artist:string, track_title: string}>();

    artist = artist?.replace(/-/g,' ')
    track_title = track_title!.replace(/-/g, ' ')

    //fetch song meta data from spotify.. pass spotify id as argument....
    async function fetchMetaData(id : string){
        const response = await fetch(`${import.meta.env.VITE_API_URL}/metaData/${id}`, {method : "GET", headers : {"Content-Type" : "application/json"}})

        const data = await response.json();

        if (response.ok){
            setTempo(data["tempo"]), setKey(data["key"]), setTime(data["time_signature"])
        }
    }

    async function fetchCoverart(){
        const response = await fetch(`${import.meta.env.VITE_API_URL}/songsearch`, {method : "POST", headers : {"Content-Type" : "application/json"}, body : JSON.stringify({ query: `${artist} ${track_title}`})})
        const data = await response.json();
        
        //Parse first result of data
        const TopResult = data[0]

        if (response.ok){
            setArt(TopResult.cover_art);
            id = TopResult.id;
            fetchMetaData(id)
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
                            <span>key: {key} </span>
                            <span>tempo: {tempo}</span>
                            <span>genre:</span>
                        </div>
                        <div className={styles.progression}> 
                            Progression: 
                        </div>
                    </div>
                    
                </div>

                <div className={styles.lyricsContainer}>
                    <div className={styles.container}>
                        <span className={styles.LyricsTitle}>Lyrics</span>
                        {trimmed.map((line, index) => (
                            <div className={line.startsWith('[') ? styles.sectionHeader : styles.lyrics} key={index}>{line}</div>
                        ))}
                    </div>
                    <div className={styles.youtubePlayer}></div>

                </div>
                <div className={styles.TheoryContainer}>
                    <section  className={styles.theory}> Theory Anaylsis
                    </section>
                </div>
            </div>
        </div>
    )
}

