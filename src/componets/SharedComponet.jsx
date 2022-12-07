import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from '../pages/Footer'
import Navbar from './Navbar'


const SharedComponet = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default SharedComponet
