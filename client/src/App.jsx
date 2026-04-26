
import Loginpage from './pages/Loginpage'
import Dashboard from './pages/Dashboard'
import Rigester from './pages/Rigester'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

function App() {


  return (

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Loginpage/>}/>
    <Route path='/signup' element={<Rigester/>}/>
    <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
  </Routes>
  </BrowserRouter>

  )
}

export default App
