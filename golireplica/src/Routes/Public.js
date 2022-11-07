import React from 'react'
import Home from '../Screens/Home'
import Shope from "../Screens/Shope"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import AuthenticationScreen from '../Screens/AuthenticationScreen'
import Header from '../Components/CommonComponent/Header'
import Footer from '../Components/CommonComponent/Footer'
const Public = () => {
  return (
    <>
      <Router>
        <Header></Header>
          <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/Shope' element={<Shope></Shope>}></Route>
              <Route path='/Login' element={<AuthenticationScreen authType='Login'></AuthenticationScreen>}></Route>
              <Route path='/Register' element={<AuthenticationScreen authType='Register'></AuthenticationScreen>}></Route>
          </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default Public