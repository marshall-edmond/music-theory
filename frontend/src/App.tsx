import './App.css'

function App() {
  return (
    <>
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="header-logo"/>
        <h3>Music Map</h3>
      </div>
      <div className="header-right">
        <button className="btn" onClick={() => window.location.href = '/theory'}>
          Theory
        </button>
        <button className="btn" onClick={() => window.location.href = '/about'}>
          About
        </button>
        <button className = "btn" onClick={() => window.location.href = '/generate'}>
          Generate
        </button>
      </div>
    </header>
    <div className="main-container">
      <main>
      </main>
    </div>
    </>
  )
}

export default App;