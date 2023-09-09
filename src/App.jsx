import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/User/Dashboard/Dashboard'
import DashboardAdmin from './pages/Admin/Dashboard/Dashboard'
import InfoAdmin from './pages/Admin/Info/Info'
import HitungWR from './pages/User/HitungWR/HitungWR'
import NotFound from './pages/NotFound/NotFound'
import Game from './pages/User/Game/Game'
import Promo from './pages/User/Promo/Promo'
import HitungZodiac from './pages/User/HitungZodiac/HitungZodiac'
import JokiMobileLegend from './pages/User/Joki/JokiMobileLegend' 
import UserManagement from './pages/Admin/Manage/UserManagement'
import AdminManagement from './pages/Admin/Manage/AdminManagement'
import { Helmet } from 'react-helmet'; // Import React Helmet
import AdminLogin from './pages/Admin/Login/Login'


function App() {


  return (
    <>
      <Helmet>
        <root className="h-full bg-DarkBad dark:bg-lightsun" />
        <body className="h-full dark:bg-DarkBad bg-lightsun" />
      </Helmet>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/game' element={<Game />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/hitungwr' element={<HitungWR />} />
        <Route path='/hitungzodiac' element={<HitungZodiac />} />
        <Route path='/joki/Mobile Legend' element={<JokiMobileLegend />} /> 
        <Route path='*' element={<NotFound/>}/>

        {/* admin page */}
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admin/dashboard' element={<DashboardAdmin />} />
        <Route path='/admin/info' element={<InfoAdmin />} />
        <Route path="/admin/manage/usermanagement" element={<UserManagement />} />
        <Route path="/admin/manage/adminmanagement" element={<AdminManagement />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
