import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="header-logo"/>
        <Link to='/' className="brand-link">
          <h3>Music Map</h3>
        </Link>
      </div>

      <div className="header-right">
          <Link className="btn" to="/theory">Theory</Link>
          <Link className="btn" to="/about">About</Link>
          <Link className='btn' to="/generate">Generate</Link>
      </div>
    </header>
    </>
  )
}

export default Header;