import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import P1 from '../../../assets/Images/Product1.png'
import { Pagination, Autoplay } from "swiper";
import { Link } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa";
// FaGreaterThan
const ProductsCard = (props) => {
  return (
    <div className='container-fluid m-0 py-5 p-0' style={{backgroundColor:props.backgroundColor}}>
           <Swiper
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
          clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 position-relative m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary' style={{ height:'25rem',backgroundImage: `url(${P1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                     <h6 className='position-absolute pt-5 top-0 start-50 translate-middle'>Apple Cider <br></br>  Vinegar Gummies</h6>
                     <h6 className='w-100 position-absolute d-flex flex-column pt-5 mt-5 bottom-0 start-50 translate-middle d-flex border border-0 border-success'>
                       <Link className='d-flex align-items-center justify-content-center mx-2 text-light  fw-bold fs-4 text-decoration-none text-uppercase' to={'/'}>
                         <span className='mx-2'>Discover</span> <span className='fs-6'><FaGreaterThan></FaGreaterThan></span> 
                       </Link>     
                     </h6>
                  </div>
            </div>
        </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default ProductsCard