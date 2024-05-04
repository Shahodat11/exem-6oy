import './App.css'
import { Routes, Route, Link} from "react-router-dom"
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin'
import Login from './pages/login/Login'
import Single from './pages/single/Single'
import Auth from './pages/auth/Auth'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Auth/>}>
          <Route path='/Admin' element={<Admin/>}/>
        </Route>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/single/:id' element={<Single/>}/>
      </Routes>
    </>
  )
}

export default App
