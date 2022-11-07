import React from 'react'
import Home from '../Screens/Home'
import Shope from "../Screens/Shope"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import AuthenticationScreen from '../Screens/AuthenticationScreen'
import ProductScreen from '../Screens/Product'
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
              <Route path='/product/catagory1' element={<ProductScreen  productCat='catagory1' ></ProductScreen>}></Route>
              <Route path='/product/catagory2' element={<ProductScreen  productCat='catagory2' ></ProductScreen>}></Route>
              <Route path='/product/catagory3' element={<ProductScreen  productCat='catagory3' ></ProductScreen>}></Route>
              <Route path='/product/catagory4' element={<ProductScreen  productCat='catagory4' ></ProductScreen>}></Route>
              <Route path='/product/catagory5' element={<ProductScreen  productCat='catagory5' ></ProductScreen>}></Route>
              <Route path='/product/catagory6' element={<ProductScreen  productCat='catagory6' ></ProductScreen>}></Route>
              <Route path='/product/catagory7' element={<ProductScreen  productCat='catagory7' ></ProductScreen>}></Route>
              <Route path='/product/catagory8' element={<ProductScreen  productCat='catagory8' ></ProductScreen>}></Route>
              <Route path='/product/catagory9' element={<ProductScreen  productCat='catagory9' ></ProductScreen>}></Route>
              <Route path='/product/catagory10' element={<ProductScreen productCat='catagory10' ></ProductScreen>}></Route>
              <Route path='/product/catagory11' element={<ProductScreen productCat='catagory11' ></ProductScreen>}></Route>
          </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default Public