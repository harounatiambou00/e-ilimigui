import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/_Layout/Layout'
import {Admin, AdminHome, AdminLogin, AdminRegister} from './pages/admin'
import {User, Home, Login, Register} from './pages/user'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<User />}>
                <Route index path='' element={<Home />} />
                <Route path=':id' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
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