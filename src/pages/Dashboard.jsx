import React from 'react'
import AllProducts from '../components/admin/AllProducts'
import CreateProduct from '../components/admin/CreateProduct'
import Navbar from '../components/Navbar'
import Social from '../components/Social'

const Dashboard = () => {
  return (
    <div data-theme="light">
      <Navbar/>
      <CreateProduct/>
      <AllProducts/>
      <Social/>
    </div>
  )
}

export default Dashboard