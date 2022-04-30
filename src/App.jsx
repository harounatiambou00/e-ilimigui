import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import "aos/dist/aos.css";

import {Admin, AdminHome, AdminLogin, AdminRegister} from './pages/admin'
import {User, Home, SignIn, SignUp} from './pages/user'
import { Navbar } from './components';
import LeftBar from './components/LeftBar/LeftBar';
import Footer from './components/Footer/Footer';

const App = () => {

  const [leftbarIsOpened,openLeftBar] = useState(false);
  return (
      <div>
        <Navbar leftbarIsOpened={leftbarIsOpened} openLeftBar={openLeftBar}/>
        <LeftBar leftbarIsOpened={leftbarIsOpened} openLeftBar={openLeftBar} />
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
        <Footer />
      </div>
  )
}

export default App