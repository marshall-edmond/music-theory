import { Routes, Route } from 'react-router-dom'; 
import Theory from './pages/TheoryPage'; 
import About from './pages/AboutPage';
import Signup from './pages/SignupLogin'; 
import Home from './pages/HomePage';
import './App.css'


function App (){ 
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theory/:lessonId" element={<Theory />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/generate" element={<Signup />} />
        </Routes>
    </>
      
  )
}

export default App;