import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage';
import Illustrationer from './pages/Illustrationer';
import Projekter from './pages/Projekter';
import Tabor from './pages/Tabor';
import Kontakt from './components/Kontakt';


function App() {

  return (
    <>
      <Navigation/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tabor" element={<Tabor/>}/>
          <Route path="/illustrationer" element={<Illustrationer/>}/>
          <Route path="/projekter" element={<Projekter/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      <Kontakt/>
    </>
  )
}

export default App;
