import React from 'react'
import Contact from '../pages/Contact'
import {Outlet} from 'react-router-dom'

function ContactLayout() {
  return (
    <>
      <Contact />
      <Outlet />
    </>
  )
}

export default ContactLayout