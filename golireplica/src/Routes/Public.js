import React from 'react'
import Home from '../Screens/Home'
import Shope from "../Screens/Shope"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
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
          </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default Public