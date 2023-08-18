import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import HitungWR from './pages/HitungWR/HitungWR'
import NotFound from './pages/NotFound/NotFound'
import Game from './pages/Game/Game'
import Promo from './pages/Promo/Promo'
import HitungZodiac from './pages/HitungZodiac/HitungZodiac'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/game' element={<Game />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/hitungwr' element={<HitungWR />} />
        <Route path='/hitungzodiac' element={<HitungZodiac />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
