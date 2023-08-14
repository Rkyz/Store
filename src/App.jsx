import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Promo from './pages/promo/Promo'
import HitungWR from './pages/hitungwr/HitungWR'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/hitungwr' element={<HitungWR />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
