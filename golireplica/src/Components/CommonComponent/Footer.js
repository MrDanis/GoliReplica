import React from 'react';
import './Footer.css';
import { BsArrowRightShort } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram,AiFillYoutube } from "react-icons/ai";
import {Link} from "react-router-dom";
// import { RiArrowDropDownLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='container-fluid m-0 text-light d-flex align-items-center justify-content-center flex-column customFooterBackground'>
     <div className='row m-0 w-75 g-3'>
     <div className="col-12 col-md-4 px-4">
      <div className="px-0 p-0 bg-light text-dark">
        <div className='row m-0 p-0'>
          <div className='col-12 m-0 p-0 text-light d-flex flex-column align-items-start flex-wrap customFooterBackground'>
               <p className='fw-bold fs-5 mb-2'>
                Keep well with Goli
               </p>
               <p className='fw-normal m-0 p-0 fs-6 '>
                <span>Subscribe to our newsletter for exclusive offers!</span> 
               </p>
               <p className='my-3 px-0 p-1 border border-1 border-white d-flex flex-row w-100'>
                 <input placeholder='Email address' className='text-center m-0 p-0 w-75 customFooterBackground text-light border-0 footerEmail'></input>
                 <button className='fs-3 d-flex align-items-center justify-content-end m-0 px-2 p-0 w-25 customFooterBackground text-light border-0 outline-none'>
                  <BsArrowRightShort></BsArrowRightShort>
                 </button>
               </p>
               <p className='text-uppercase fs-5 fw-light m-0'>
                  follow us:
               </p>
               <p className='fs-3 d-flex align-items-start w-75 justify-content-start mx-0 my-3'>
                 <ImFacebook className='mx-0 p-0'></ImFacebook>
                 <AiFillInstagram className='mx-3'></AiFillInstagram>
                 <AiFillYoutube className='mx-2'></AiFillYoutube>
               </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4 ">
      <div class="px-0 p-0 bg-dark text-light">
      <div className='row m-0 p-0'>
          <div className='col-12 m-0 p-0 customFooterBackground text-light d-flex flex-column align-items-start flex-wrap'>
               <p className='text-justify fw-bold fs-6 mb-2'>
                Become on Ambassador
               </p>
               <p className='text-justify fw-bold fs-6 mb-2'> 
                Scientific & Nutritional Advisory Board
               </p>
                    
               <div className="dropdown w-100 d-none">
                  <button className="customfooterDropdown px-0 text-start btn w-100 text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu w-100 customFooterBackground text-light" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item text-light" href="#">Action</a></li>
                    <li><a className="dropdown-item text-light" href="#">Another action</a></li>
                    <li><a className="dropdown-item text-light" href="#">Something else here</a></li>
                  </ul>
                </div>
               <p className='m-0 my-0 text-justify fw-bold fs-6 d-flex flex-wrap w-100'>
               <div class="accordion-item m-0 p-0 w-100 border-0">
                   <h2 class="accordion-header border-0 bg-dark" id="headingTwo">
                    <button class="accordion-button collapsed p-0 customFooterBackground text-light outline-none border-0 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      About Goli@
                    </button>
                   </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark text-light px-2">
                     <ul className='dropDownList mx-0 px-2'>
                        <li className='text-start px-0 mx-0'>
                          <Link className='text-decoration-none text-light fw-normal'>Goli@ for good</Link>
                        </li>
                        <li className='text-start px-0 mx-0'>
                          <Link className='text-decoration-none text-light fw-normal'>About Us</Link>
                        </li>
                        <li className='text-start px-0 mx-0'>
                          <Link className='text-decoration-none text-light fw-normal'>Inside the gummy</Link>
                        </li>
                        <li className='text-start px-0 mx-0'>
                          <Link className='text-decoration-none text-light fw-normal'>Inside the Bites</Link>
                        </li>
                        <li className='text-start px-0 mx-0'>
                          <Link className='text-decoration-none text-light fw-normal'>Press</Link>
                        </li>
                     </ul>
                    </div>
                  </div>
                </div>
               </p>
               <p className='text-justify fw-bold fs-6 my-2'> 
                FAQ
               </p>
               <p className='m-0 my-0 text-justify fw-bold fs-6 d-flex flex-wrap w-100'>
               <div class="accordion-item m-0 p-0 w-100 border-0">
                   <h2 class="accordion-header border-0 bg-dark" id="headingTwoo">
                    <button class="accordion-button collapsed p-0 customFooterBackground text-light outline-none border-0 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoo" aria-expanded="false" aria-controls="collapseTwoo">
                       Wholesale
                    </button>
                   </h2>
                  <div id="collapseTwoo" class="accordion-collapse collapse" aria-labelledby="headingTwoo" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark text-light px-2">
                     <ul className='dropDownList mx-0 px-2'>
                        <li className='text-start px-0 mx-0'>
                          <Link className='text-decoration-none text-light fw-normal'>Goli@ for good</Link>
                        </li>
                        <li className='text-start px-0 mx-0'>
                          <Link className='text-decoration-none text-light fw-normal'>About Us</Link>
                        </li>
                        <li className='text-start px-0 mx-0'>
                          <Link className='text-decoration-none text-light fw-normal'>Inside the gummy</Link>
                        </li>
                        <li className='text-start px-0 mx-0'>
                          <Link className='text-decoration-none text-light fw-normal'>Inside the Bites</Link>
                        </li>
                        <li className='text-start px-0 mx-0'>
                          <Link className='text-decoration-none text-light fw-normal'>Press</Link>
                        </li>
                     </ul>
                    </div>
                  </div>
                </div>
               </p>
               <p className='text-justify fw-bold fs-6 my-2'> 
                 Manage my Subscription
               </p>
               <p className='text-justify fw-bold fs-6 '> 
                 Contact Us
               </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 ">
      <div class="p-3 customFooterBackground h-100 textlight ">
       image should be place here  
      </div>
    </div>
     </div>
     <div className='row mt-4 m-0 w-75'>
       <div className='col-3 m-0 p-0'>
       <small className='text-justify fw-light text-decoration-underline mx-2'>Terms & Conditions</small>
       </div>
       <div className='col-3 m-0 p-0'>
       <small className='text-justify fw-light text-decoration-underline mx-2'>Privacy Policy</small>
       </div>
       <div className='col-3 m-0 p-0'>
       <small className='text-justify fw-light text-decoration-underline mx-2'>Gloi@Rewards Git Cards</small>
       </div>
       <div className='col-3 m-0 p-0'>
       <small className='text-justify fw-light text-decoration-underline mx-2'>Digital Accessibility Statement</small>
       </div>
     </div>
     <div className='row m-0 w-75 border border-2 border-light my-2 px-1 p-2 mb-4'>
       <div className='col-12 m-0 p-0 d-flex flex-wrap'>
          <small className='text-start fw-light text-decoration-underline'>†These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease. The views and nutritional advice expressed by Goli® Nutrition are not intended for the purpose of providing medical advice. Please always consult your health care provider if you are taking any medications or have any medical conditions. Individual results may vary.</small>
       </div>
     </div>
     <div className='row m-0 w-75 mb-3 px-0 my-2'>
       <div className='col-12 fw-light text-start mb-0 px-1'>
              <small>‡Vitamins B6, B9 & B12 help convert food into cellular energy†</small>
       </div>
       <div className='col-12 fw-light text-start mb-0 px-1'>
              <small>◊Source: SPINS MULO (powered by IRI) 52 weeks ending 2/20/22.</small>
       </div>
       <div className='col-12 fw-light text-start mb-0 px-1'>
              <small>*KSM-66® Ashwagandha helps reduce cortisol to help control stress-related food cravings in overweight and obese individuals.</small>
       </div>
       <div className='col-12 fw-light text-start mb-0 px-1'>
              <small>*Free shipping available on all orders over $20.</small>
       </div>
     </div>
     <div className='row m-0 w-75 mb-3 my-2'>
       <div className='col-12 fw-light text-center'>
              <small>© 2022 Goli Nutrition Inc. All Rights Reserved.</small>
       </div>
     </div>
    </div>
  )
}

export default Footer