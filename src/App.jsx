import React from 'react'
import { Routes, Route } from 'react-router-dom'

import "aos/dist/aos.css";

import {Admin, AdminHome, AdminLogin, AdminRegister} from './pages/admin'
import {User, Home, SignIn, SignUp} from './pages/user'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<User />}>
                <Route index path='' element={<Home />} />
                <Route path='client/:userId' element={<Home userType = "Client" />} />
                <Route path='seller/:userId' element={<Home userType = "Seller"/>} />
                <Route path='sign-in' element={<SignIn />} />
                <Route path='sign-up' element={<SignUp />} />
            </Route>                
            <Route path='admin' element={<Admin />}>
                <Route index path='' element={<AdminLogin />} />
                <Route path=':id' element={<AdminHome />} />
                <Route path='register' element={<AdminRegister />} />
            </Route>       
        </Routes>
    </div>
  )
}

export default App