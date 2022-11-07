import React from 'react'
import { Link } from 'react-router-dom'
import CommonButton from '../CommonComponent/CommonButton'
import BannerBackgroundImage from '../../assets/Images/BannerBacgroundColor.jpeg'
import './NavbarBrand.css'
const NavbarBrand = () => {
  return (
    <div  className='m-0  p-0 container-fluid border border-0 border-danger'>
        <div className='row m-0 myBan'  style={{ backgroundImage: `url(${BannerBackgroundImage})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundOrigin:'content-box' }}>
            <div className='m-0 p-0 col-12 col-md-6 d-flex flex-column align-items-center justify-content-center'>
                <div className='mt-4 d-flex flex-column flex-wrap align-items-center justify-content-center w-50 border border-0 border-success'>
                     <h1 className='fw-bold text-light'>Health Simple</h1>
                     <h4 className='fw-normal text-light my-4'>
                        <h4 className='fw-normal text-light'>Delicious Taste.</h4>
                        <h4 className='fw-normal text-light'>Quality Ingredients.</h4>
                        <h4 className='fw-normal text-light'>Everyday Benefits.</h4>
                     </h4>
                     <CommonButton btnSize='btn py-3 w-50 fs-5 fw-bold' bgBtnColor="#000" title='Shop now'></CommonButton>
                </div>
                <div className='mt-5 p-0 d-flex flex-column flex-wrap align-items-center justify-content-center w-50 border border-0 border-success'>
                     <ul className='m-0 p-0 border border-0 border-dark bannerSocialLinkList w-100 d-flex flex-row justify-content-between'>
                        <li className='d-flex flex-column align-items-center justify-content-center'>
                            <img className='img-fluid socilaIcons my-1' src='./logo512.png' alt='test'></img>
                            <Link to={'/'} className='text-decoration-none text-light'>
                              Vegan
                            </Link>
                        </li>
                        <li className='d-flex flex-column align-items-center justify-content-center'>
                            <img className='img-fluid socilaIcons my-1' src='https://cdn.shopify.com/s/files/1/0070/0173/5241/t/52/assets/new-home-gluten-free.svg?v=11078755924694983951666377897' alt='test'></img>
                            <Link to={'/'} className='text-decoration-none text-light'>
                              Gluten-Free
                            </Link>
                        </li>
                        <li className='d-flex flex-column align-items-center justify-content-center'>
                            <img className='img-fluid socilaIcons my-1' src='./logo512.png' alt='test'></img>
                            <Link to={'/'} className='text-decoration-none text-light'>
                              Gelatin-Free
                            </Link>
                        </li>
                        <li className='d-flex flex-column align-items-center justify-content-center'>
                            <img className='img-fluid socilaIcons my-1' src='./logo512.png' alt='test'></img>
                            <Link to={'/'} className='text-decoration-none text-light'>
                              Kosher
                            </Link>
                        </li>
                     </ul>
                </div>
            </div>
            <div className='m-0 p-0 col-12 col-md-6 d-none'>
               <h1>Image will be placed here</h1>
            </div>
        </div>
    </div>
  )
}

export default NavbarBrand