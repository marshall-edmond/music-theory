import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import logo from "../assets/logo.png";
import { useState, useEffect } from 'react';

//every song must have an image, an artist name, and a song title for dropdown menu
interface songProps {
  img: string,
  artist : string,
  song_title : string
}

function Header() {
  const [search, setSearch] = useState('');
  //displays dropdown menu
  const [dropdown, setDropDown] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  //effect hook to close dropdown if its empty...
  useEffect(() => {
    if (search.trim() === ''){
      setDropDown(false)
    }
  }, [search])

  //handle change of searchbar, if searchbar is empty setDropDown(false)
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.trim() === ''){
      setDropDown(false)
    } else {
      setSearch(e.target.value)
    }


  }
// fetch top 5 songs from song api
  async function Results () {
    //take search value and look it up in the api
    setLoading(true)
    try{
      //fetch request to api 
      const response = await fetch(`${import.meta.env.VITE_API_URL}/songsearch`,{method: 'POST', headers : {'Content-Type' : 'application/json'}, body : JSON.stringify({search})})
      const result = await response.json()

      if (!response.ok){
        setError(result.message);
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
              {dropdown && !isLoading ? (
                <div className={styles.dropContainer}>
                  <div className={styles.topResult}>Search Results</div>
                  <hr className={styles.solid}></hr>
                  <hr></hr>
                  <div className={styles.song}></div>
                  <hr></hr>
                  <div className={styles.song}></div>
                  <hr></hr>
                  <div className={styles.song}></div>
                  <hr></hr>
                  <div className={styles.song}></div>
                  <hr></hr>
                </div>
              ) : (
                <div className={styles.dropContainer}>
                </div>
              )}
            <Link className={styles.btn} to="/theory/notes">Theory</Link>
            <Link className={styles.btn} to="/signup">Sign up/ Login</Link>
        </nav>
      </header>
    </>
  )
}

export default Header;