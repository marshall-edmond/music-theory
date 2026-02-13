import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from "../assets/logo.png";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

//every song must have an image, an artist name, and a song title for dropdown menu
type Song = {
  name:string,
  title:string,
  artist: string,
  url: string,
  image: Array<{
    "#text": string;
    size: string;
  }>,
}


let timer: any;

export default function Header() {
  const [search, setSearch] = useState('');
  //displays dropdown menu
  const [dropdown, setDropDown] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState<Song[]>([])
  const nav = useNavigate()

  // Section for top result
  const TopResult = results[0]
  const otherResults  = results.slice(1);
  
  //effect hook to close dropdown if its empty...
  useEffect(() => {
    //if the searchbar is empty don't display dropdown
    if (search.trim() === ''){
      setDropDown(false);
    }
  }, [search])

  //function to delay calling Results(api request), .300 ms, clear timeout on each keystroke before 
  //handle change of searchbar, if searchbar is empty setDropDown(false)
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //on every change clear timer
    clearTimeout(timer);

    //render the dropdown
    setDropDown(true);
    setLoading(true);
    setSearch(e.target.value);
    // fetch api
    timer = setTimeout(Results, 500);
    
  }

  //onClick go to search page and send song info as props
  const Navigate = () => {
    nav('/search')
  }

// fetch top 5 songs from song api
  async function Results () {
    //take search value and look it up in the api
    setLoading(true)
    try{
      //fetch request to api 
      const response = await fetch(`${import.meta.env.VITE_API_URL}/songsearch`,{method: 'POST', headers : {'Content-Type' : 'application/json'}, body : JSON.stringify({search})})
      const data = await response.json()

      if (response.ok){
        console.log("Backend response:", data);
        setResults(data.songs);
      }

      else {
        setError(data.message);
        
      }

    } catch(err) {
      setError('Network Error')
    
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={logo} alt="Logo" className={styles.headerLogo}/>
          <Link className={styles.brandLink} to='/'>Music Map</Link>
        </div>

        <nav className={styles.headerRight}>
            <div className={styles.searchContainer}>
              <input className={styles.search}
              placeholder="search..."
              value={search}
              onChange={HandleChange}
              />
            </div>
            {/*render drop down menu */}
           {dropdown && (
  <div className={styles.dropContainer}>
    {isLoading ? (
      <div>Loading...</div>  // ← Show loading message
    ) : TopResult ? (
      <>
        <div className={styles.topResult}>Search Results</div>
        <button className={styles.song} onClick={Navigate}>
          <img src={TopResult.image[2]["#text"]} />
          <div>{TopResult.name}</div>
          <div>{TopResult.artist}</div>
        </button>
        
        {otherResults.map((song, index) => (
          <button key={index} className={styles.song} onClick={Navigate}>
            <img src={song.image[2]["#text"]} />
            <div>{song.name}</div>
            <div>{song.artist}</div>
          </button>
        ))}
      </>
    ) : (
      <div>No results found</div>  // ← Show when no results
    )}
  </div>
)}
            <Link className={styles.btn} to="/theory/notes">Theory</Link>
            <Link className={styles.btn} to="/signup">Sign up/ Login</Link>
        </nav>
      </header>
    </>
  )
}

