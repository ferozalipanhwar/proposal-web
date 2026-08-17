import { Route, Routes } from 'react-router-dom'
import IntroSequence from './components/IntroSequence/IntroSequence'
import MusicController from './components/MusicController/MusicController'
import Story from './pages/Story'
import AdminDashboard from './pages/admin/Dashboard'
import AdminLogin from './pages/admin/Login'

export default function App(){
  return (
    <>
      <MusicController />
      <Routes>
        <Route path='/' element={<IntroSequence/>} />
        <Route path='/story/*' element={<Story/>} />
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
      </Routes>
    </>
  )
}
