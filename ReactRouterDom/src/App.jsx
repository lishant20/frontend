import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import RootLayout from "./layout/RootLayout"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
