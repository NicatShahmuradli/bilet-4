import React from 'react'
import Navbar from '../../components/navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../../components/footer'

function UserRoot() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default UserRoot