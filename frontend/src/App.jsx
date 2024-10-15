import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyBlog from './pages/MyBlog'
import Blogs from './pages/Blogs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/myblog' element={<MyBlog />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
