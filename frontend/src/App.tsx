import { Routes, Route } from 'react-router-dom'; 
import Theory from './pages/Theory'; 
import Search from './pages/Search';
import SignupLogin from './pages/SignupLogin'; 
import Home from './pages/HomePage';
import './App.css'


function App (){ 
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theory/:sectionId/:lessonId" element={<Theory />} /> 
          <Route path="/search/:artist/:track_title" element={<Search />} />
          <Route path="/signup" element={<SignupLogin />} />
        </Routes>
    </>
      
  )
}

export default App;