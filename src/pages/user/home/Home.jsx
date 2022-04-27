import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Home = (props) => {
  const params = useParams();
  const userType = props.userType;
  /*const [authenticatedClient, setAuthenticatedClient] = useState({});

  useEffect(() => {
    (
      async () => {
        const url = "https://localhost:8000/api/authentification/client";
        const response = await fetch(url, {
          method : "GET",
          headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          credentials:'include',
        });
  
        const content = await response.json();
        setAuthenticatedClient(content.data);
        console.log(authenticatedClient);
      }
    )();
  }, []);*/
  return (
    <>
      <p>
        Le client connecté est : 
        <br />
      </p>
      <Outlet />
    </>
  )
}

export default Home