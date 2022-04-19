import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Home = (props) => {
  const params = useParams();
  const userType = props.userType;
  return (
    <>
      <div>This is the home page of the {userType} with the id {params.userId} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus necessitatibus nihil possimus at quos aut voluptatum molestiae veritatis tempora, blanditiis reprehenderit consequuntur quod dolor, sit molestias aliquid dolores vero nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptatem beatae ducimus iusto, fugit dicta, nulla consequatur quos corporis blanditiis exercitationem alias assumenda aliquam facilis ad aut, nostrum reprehenderit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit autem omnis perspiciatis? Ducimus alias, quia sunt obcaecati, in voluptates provident tempore architecto libero molestiae eius esse voluptas! Ea, sint!</div>
      <Outlet />
    </>
  )
}

export default Home