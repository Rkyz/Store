import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import HitungWR from './pages/HitungWR/HitungWR'
import NotFound from './pages/NotFound/NotFound'
import Game from './pages/Game/Game'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/hitungwr' element={<HitungWR />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
