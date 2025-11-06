import Theory from './pages/TheoryPage'; 
import About from './pages/AboutPage';
import Generate from './pages/GeneratePage'; 
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header'



function App (){ 
  return (
      <div className="Header">
        <Header />
        <Routes>
          <Route path="/theory" element={<Theory />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </div>
  )
}

export default App;