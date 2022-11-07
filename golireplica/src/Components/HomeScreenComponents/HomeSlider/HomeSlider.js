import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Big1 from '../../../assets/Images/BigCardBg1.jpeg'
import Big2 from '../../../assets/Images/BigCardBg2.jpeg'
import Big3 from '../../../assets/Images/BigCardBg3.jpeg'
import Big4 from '../../../assets/Images/BigCardBg4.png'
import Big5 from '../../../assets/Images/BigCardBg5.jpeg'
import Big6 from '../../../assets/Images/BigCardBg6.jpeg'
import Big7 from '../../../assets/Images/BigCardBg7.jpeg'
import Big8 from '../../../assets/Images/BigCardBg8.jpeg'
import CommonButton from '../../CommonComponent/CommonButton';
import { Pagination, Autoplay } from "swiper";
const HomeSlider = (props) => {
  return (
    <div className='row m-0 p-0 border border-0 border-success' style={{height:'20rem',cursor:'pointer'}}>
          <Swiper
          slidesPerView={props.slidesOnscreen}
          spaceBetween={20}
          pagination={{
          clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundImage: `url(${Big1})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                  <div className='col-4 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1'>THE WORLD’S FIRST</p>
                      <h3 className='fs-5 text-justify'>Apple Cider Vinegar Gummies</h3>
                      <p className='d-flex flex-wrap fs-6'>Made with Vitamins B9 & B12 to help support:</p>
                      <p className='d-flex align-items-center justify-content-center mb-1'>
                      <CommonButton btnSize='btn py-2 w-75 fs-6 fw-normal d-flex align-items-center justify-content-center' bgBtnColor="#000" title='Explore'></CommonButton>
                      </p>
                      <p className='d-flex flex-wrap fs-6'>Taste the Apple.Not the Vinegar.®</p>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
            <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundImage: `url(${Big2})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                  <div className='col-4 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1'>THE WORLD’S FIRST</p>
                      <h3 className='fs-5 text-justify'>Apple Cider Vinegar Gummies</h3>
                      <p className='d-flex flex-wrap fs-6'>Made with Vitamins B9 & B12 to help support:</p>
                      <p className='d-flex align-items-center justify-content-center mb-1'>
                      <CommonButton btnSize='btn py-2 w-75 fs-6 fw-normal d-flex align-items-center justify-content-center' bgBtnColor="#000" title='Explore'></CommonButton>
                      </p>
                      <p className='d-flex flex-wrap fs-6'>Taste the Apple.Not the Vinegar.®</p>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundImage: `url(${Big3})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                  <div className='col-4 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1'>THE WORLD’S FIRST</p>
                      <h3 className='fs-5 text-justify'>Apple Cider Vinegar Gummies</h3>
                      <p className='d-flex flex-wrap fs-6'>Made with Vitamins B9 & B12 to help support:</p>
                      <p className='d-flex align-items-center justify-content-center mb-1'>
                      <CommonButton btnSize='btn py-2 w-75 fs-6 fw-normal d-flex align-items-center justify-content-center' bgBtnColor="#000" title='Explore'></CommonButton>
                      </p>
                      <p className='d-flex flex-wrap fs-6'>Taste the Apple.Not the Vinegar.®</p>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundImage: `url(${Big4})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                  <div className='col-4 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1'>THE WORLD’S FIRST</p>
                      <h3 className='fs-5 text-justify'>Apple Cider Vinegar Gummies</h3>
                      <p className='d-flex flex-wrap fs-6'>Made with Vitamins B9 & B12 to help support:</p>
                      <p className='d-flex align-items-center justify-content-center mb-1'>
                      <CommonButton btnSize='btn py-2 w-75 fs-6 fw-normal d-flex align-items-center justify-content-center' bgBtnColor="#000" title='Explore'></CommonButton>
                      </p>
                      <p className='d-flex flex-wrap fs-6'>Taste the Apple.Not the Vinegar.®</p>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundImage: `url(${Big5})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                  <div className='col-4 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1'>THE WORLD’S FIRST</p>
                      <h3 className='fs-5 text-justify'>Apple Cider Vinegar Gummies</h3>
                      <p className='d-flex flex-wrap fs-6'>Made with Vitamins B9 & B12 to help support:</p>
                      <p className='d-flex align-items-center justify-content-center mb-1'>
                      <CommonButton btnSize='btn py-2 w-75 fs-6 fw-normal d-flex align-items-center justify-content-center' bgBtnColor="#000" title='Explore'></CommonButton>
                      </p>
                      <p className='d-flex flex-wrap fs-6'>Taste the Apple.Not the Vinegar.®</p>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundImage: `url(${Big6})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                  <div className='col-4 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1'>THE WORLD’S FIRST</p>
                      <h3 className='fs-5 text-justify'>Apple Cider Vinegar Gummies</h3>
                      <p className='d-flex flex-wrap fs-6'>Made with Vitamins B9 & B12 to help support:</p>
                      <p className='d-flex align-items-center justify-content-center mb-1'>
                      <CommonButton btnSize='btn py-2 w-75 fs-6 fw-normal d-flex align-items-center justify-content-center' bgBtnColor="#000" title='Explore'></CommonButton>
                      </p>
                      <p className='d-flex flex-wrap fs-6'>Taste the Apple.Not the Vinegar.®</p>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundImage: `url(${Big7})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                  <div className='col-4 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1'>THE WORLD’S FIRST</p>
                      <h3 className='fs-5 text-justify'>Apple Cider Vinegar Gummies</h3>
                      <p className='d-flex flex-wrap fs-6'>Made with Vitamins B9 & B12 to help support:</p>
                      <p className='d-flex align-items-center justify-content-center mb-1'>
                      <CommonButton btnSize='btn py-2 w-75 fs-6 fw-normal d-flex align-items-center justify-content-center' bgBtnColor="#000" title='Explore'></CommonButton>
                      </p>
                      <p className='d-flex flex-wrap fs-6'>Taste the Apple.Not the Vinegar.®</p>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundImage: `url(${Big8})`,backgroundOrigin:'content-box',backgroundPosition:'center',backgroundSize:'cover' }}>
                  <div className='col-4 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1'>THE WORLD’S FIRST</p>
                      <h3 className='fs-5 text-justify'>Apple Cider Vinegar Gummies</h3>
                      <p className='d-flex flex-wrap fs-6'>Made with Vitamins B9 & B12 to help support:</p>
                      <p className='d-flex align-items-center justify-content-center mb-1'>
                      <CommonButton btnSize='btn py-2 w-75 fs-6 fw-normal d-flex align-items-center justify-content-center' bgBtnColor="#000" title='Explore'></CommonButton>
                      </p>
                      <p className='d-flex flex-wrap fs-6'>Taste the Apple.Not the Vinegar.®</p>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default HomeSlider