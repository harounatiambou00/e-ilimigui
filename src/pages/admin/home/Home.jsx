import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div>Admin Home</div>
      <Outlet />
    </div>
  )
}

export default Home