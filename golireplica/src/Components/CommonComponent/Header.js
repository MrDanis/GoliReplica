import React from 'react'
import { Link } from 'react-router-dom'
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <div className='conatiner-fluid m-0 position-sticky top-0 shadow'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid w-75 px-0">
    <Link to={'/'} className="navbar-brand">
       
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center">
          <Link to={'/Login'} className="nav-link active" aria-current="page" href="#">Sing In</Link>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center">
          <Link to={'/Register'} className="nav-link active" aria-current="page" href="#">Sing Up</Link>
        </li>
        <li className="nav-item dropdown mx-4 fw-bold d-flex align-items-center justify-content-center">
          <Link to={'/'} className="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Apple Cider Vinegar Gummies</a></li>
            <li><a className="dropdown-item" href="#">Ashwagandgha Gummies</a></li>
            <li><a className="dropdown-item" href="#">Superfruits Beauty Gummies</a></li>
            <li><a className="dropdown-item" href="#">Supergreens Gummies</a></li>
            <li><a className="dropdown-item" href="#">Triple Action Immune Gummies</a></li>
            <li><a className="dropdown-item" href="#">Dreamy Sleep Gummies</a></li>
            <li><a className="dropdown-item" href="#">Complete Kids Multi Gummies</a></li>
            <li><a className="dropdown-item" href="#">Women's Complete Multi Gummies</a></li>
            <li><a className="dropdown-item" href="#">Multi Bites</a></li>
            <li><a className="dropdown-item" href="#">Calm Bites</a></li>
            <li><a className="dropdown-item" href="#">Energy Bites</a></li>
           
          </ul>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center">
          <a className="nav-link active" aria-current="page" href="#">Shope</a>
        </li>
        <li className="nav-item dropdown mx-4 fw-bold d-flex align-items-center justify-content-center">
          <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Over Story</a></li>
            <li><a className="dropdown-item" href="#">Goli for Good</a></li>
            <li><a className="dropdown-item" href="#">Inside the Gummy</a></li>
          </ul>
        </li>
        <li className="nav-item mx-4 fw-bold d-flex align-items-center justify-content-center">
          <a className="nav-link active" aria-current="page" href="#">FAQ</a>
        </li>
        <li className="nav-item mx-4 fw-bold fs-3 p-0 my-0 d-flex align-items-center justify-content-center">
          <Link to={'/Shope'} className="nav-link active m-0 p-0 d-flex align-items-center justify-content-center"  aria-current="page">
          <BiCart className='m-0 p-0'></BiCart>
          </Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header