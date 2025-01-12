import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import RootLayout from "./layout/RootLayout"
import ContactLayout from "./layout/ContactLayout"
import ContactInfo from "./components/ContactInfo"
import ContactForm from "./components/ContactForm"
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from "./pages/Jobs"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>
        <Route path='jobs' element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={jobsLoader}/>
        </Route>
        <Route path='*' element={<NotFound />} />        
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
