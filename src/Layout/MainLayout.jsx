import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Navbar/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout;
