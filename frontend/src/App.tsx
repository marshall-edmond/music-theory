import { Routes, Route } from 'react-router-dom'; 
import Theory from './pages/TheoryPage'; 
import About from './pages/AboutPage';
import Generate from './pages/GeneratePage'; 
import Home from './pages/HomePage';



function App (){ 
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theory" element={<Theory />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
    </>
      
  )
}

export default App;