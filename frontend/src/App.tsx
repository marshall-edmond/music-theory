import { Routes, Route } from 'react-router-dom'; 
import Theory from './pages/TheoryPage'; 
import About from './pages/AboutPage';
import Generate from './pages/GeneratePage'; 
import Header from './components/Header'
import './App.css';
import Home from './pages/HomePage';



function App (){ 
  return (
    <>
      <div className="Header">
        <Header />
        <Routes>
          <Route path="/theory" element={<Theory />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </div>
      <div>
        <main>
        <Home />
        </main>
      </div>
    </>
      
  )
}

export default App;