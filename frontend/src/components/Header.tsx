import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import dwn from "../assets/dwn.jpg";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import Profile from '../pages/Profile';


//every song must have an image, an artist name, and a song title for dropdown menu
type Song = {
  cover_art:string,
  track_title:string,
  artist: string,
}


let timer: any;

export default function Header() {
  const [query, setQuery] = useState('');
  //displays dropdown menu
  const [dropdown, setDropDown] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<Song[]>([]);
  const nav = useNavigate()
  //Get if user is logged in for UI
  const { isLoggedIn } = useAuth();



  // Section for top result
  const TopResult = results[0]
  const otherResults  = results.slice(1);
  
  //effect hook to close dropdown if its empty
  useEffect(() => {
    //if the searchbar is empty don't display dropdown
    if (query.trim() === ''){
      setDropDown(false);
    }
  }, [query])

  //function to delay calling Results(api request), .300 ms, clear timeout on each keystroke before 
  //handle change of searchbar, if searchbar is empty setDropDown(false)
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //on every change clear timer
    clearTimeout(timer);

    //render the dropdown
    setDropDown(true);
    setLoading(true);
    setQuery(e.target.value);
    // fetch api
    timer = setTimeout(Results, 500);
    
  }

  //onClick go to search page and get routes from artist and track_ttitle
  const Navigate = (artist: string, track_title: string ) => {
    artist = artist.replace(/ /g, '-')
    track_title = track_title.replace(/ /g, '-')
    nav(`/search/${artist}/${track_title}`)
  }

// fetch top 5 songs from song api
  async function Results () {
    //take search value and look it up in the api
    setLoading(true)
    try{
      //fetch request to api 
      const response = await fetch(`${import.meta.env.VITE_API_URL}/songsearch`,{method: 'POST', headers : {'Content-Type' : 'application/json'}, body : JSON.stringify({query})})
      const data = await response.json()

      if (response.ok){

        setResults(data);
     
      }

      else {
        setResults([]);
        
      }

    } catch {
      setResults([])
    
    }
    finally {
      setLoading(false)
    }
  }


  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={dwn} alt="Logo" className={styles.headerLogo}/>
          <Link className={styles.brandLink} to='/'>Melodz</Link>
        </div>

        <nav className={styles.headerRight}>
            <div className={styles.searchContainer}>
              <input className={styles.search}
              placeholder="search..."
              value={query}
              onChange={HandleChange}
              />
            </div>
            {/*render drop down menu */}
           {dropdown && (
  <div className={styles.dropContainer}>
    {isLoading ? (
      <div>Loading...</div>  // loading
    ) : TopResult ? (
      <>
        <div className={styles.topResult}>Search Results</div>
        <button className={styles.song} onClick={() => Navigate(TopResult.artist, TopResult.track_title)}>
          <img src={TopResult.cover_art} alt='Top Result' />
          <div>{TopResult.track_title}</div>
          <div>{TopResult.artist}</div>
        </button>
        
        {otherResults.map((song, index) => (
          <button key={index} className={styles.song} onClick={() => Navigate(song.artist, song.track_title)}>
            <img src={song.cover_art} alt='title' />
            <div>{song.track_title}</div>
            <div>{song.artist}</div>
          </button>
        ))}
      </>
    ) : (
      <div>No results found</div>  //
    )}
  </div>
)}
            <Link className={styles.btn} to="/theory/notes/notes">Theory</Link>
            {isLoggedIn ? (
              <Link className={styles.btn} to="/profile">Profile</Link>
            ) : (
              <Link className={styles.btn} to="/signup">Sign up/ Login</Link>
            )}
            
        </nav>
      </header>
    </>
  )
}
