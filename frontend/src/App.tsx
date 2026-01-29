import { Routes, Route } from 'react-router-dom'; 
import Theory from './pages/TheoryPage'; 
import About from './pages/Search';
import SignupLogin from './pages/SignupLogin'; 
import Home from './pages/HomePage';
import './App.css'


function App (){ 
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theory/:lessonId" element={<Theory />} /> 
          <Route path="/search" element={<About />} />
          <Route path="/signup" element={<SignupLogin />} />
        </Routes>
    </>
      
  )
}

export default App;