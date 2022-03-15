import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Home = (props) => {
  const params = useParams();
  const userType = props.userType;
  return (
    <>
      <div>This is the home page of the {userType} with the id {params.userId}</div>
      <Outlet />
    </>
  )
}

export default Home