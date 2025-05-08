import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'

const App = () => {
  return (
    <BrowserRouter>
      <div className='h-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App