import React from "react"
import Navbar from "./components/Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
