import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ReviewStar from '../../../assets/Images/review-star.svg'
import { Pagination } from "swiper";
const ReviewSlider = () => {
  return (
    <>
    <div className='row mt-5 m-0 p-0 border border-0 border-success'>
      <div className='col-12'>
        <h1 className='text-dark fw-bold text-decoration-underline'>
          Over 1,000,000+ Reviews
        </h1>
        <h1 className='text-dark fw-bold'>
          from Happy Customers.
        </h1>
      </div>
    </div>
    <div className='row mt-5 m-0 p-0 border border-0 border-success' style={{height:'20rem',cursor:'pointer'}}>
          <Swiper
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
          clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1 text-dark fw-bold'>I’m officially hooked! Honestly can’t believe you’ve managed to make greens SOOOO DELICIOUS! I can’t wait to take these daily! Game changer to my daily health routine.</p>
                       <div className='row m-0 p-0 d-flex justify-content-between'>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                       </div>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1 text-dark fw-bold'>I’m officially hooked! Honestly can’t believe you’ve managed to make greens SOOOO DELICIOUS! I can’t wait to take these daily! Game changer to my daily health routine.</p>
                       <div className='row m-0 p-0 d-flex justify-content-between'>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                       </div>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1 text-dark fw-bold'>I’m officially hooked! Honestly can’t believe you’ve managed to make greens SOOOO DELICIOUS! I can’t wait to take these daily! Game changer to my daily health routine.</p>
                       <div className='row m-0 p-0 d-flex justify-content-between'>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                       </div>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1 text-dark fw-bold'>I’m officially hooked! Honestly can’t believe you’ve managed to make greens SOOOO DELICIOUS! I can’t wait to take these daily! Game changer to my daily health routine.</p>
                       <div className='row m-0 p-0 d-flex justify-content-between'>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                       </div>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1 text-dark fw-bold'>I’m officially hooked! Honestly can’t believe you’ve managed to make greens SOOOO DELICIOUS! I can’t wait to take these daily! Game changer to my daily health routine.</p>
                       <div className='row m-0 p-0 d-flex justify-content-between'>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                       </div>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1 text-dark fw-bold'>I’m officially hooked! Honestly can’t believe you’ve managed to make greens SOOOO DELICIOUS! I can’t wait to take these daily! Game changer to my daily health routine.</p>
                       <div className='row m-0 p-0 d-flex justify-content-between'>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                       </div>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1 text-dark fw-bold'>I’m officially hooked! Honestly can’t believe you’ve managed to make greens SOOOO DELICIOUS! I can’t wait to take these daily! Game changer to my daily health routine.</p>
                       <div className='row m-0 p-0 d-flex justify-content-between'>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                       </div>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1 text-dark fw-bold'>I’m officially hooked! Honestly can’t believe you’ve managed to make greens SOOOO DELICIOUS! I can’t wait to take these daily! Game changer to my daily health routine.</p>
                       <div className='row m-0 p-0 d-flex justify-content-between'>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                       </div>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1 text-dark fw-bold'>I’m officially hooked! Honestly can’t believe you’ve managed to make greens SOOOO DELICIOUS! I can’t wait to take these daily! Game changer to my daily health routine.</p>
                       <div className='row m-0 p-0 d-flex justify-content-between'>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                       </div>
                  </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='container-fluid m-0 px-2 p-0 border border-0 border-success h-100'>
        <div className='container-fluid m-0 p-0 border border-0 border-primary border-rounded' style={{height:'90%',barderRadius:'1rem'}}>
            <div className='row m-0 p-1 p-0 border border-0 border-dark h-100'style={{ backgroundColor:'#d8d8d8'}}>
                  <div className='col-12 m-0 p-1 p-0 d-flex flex-column justify-content-center text-light border border-0 border-primary'>
                      <p className='fs-6 mt-1 text-dark fw-bold'>I’m officially hooked! Honestly can’t believe you’ve managed to make greens SOOOO DELICIOUS! I can’t wait to take these daily! Game changer to my daily health routine.</p>
                       <div className='row m-0 p-0 d-flex justify-content-between'>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                        <div className='col-2 m-0 p-0'>
                        <img className='img-fluid mt-3 m-0 p-0' src={ReviewStar} alt="" style={{width:'2.5rem',height:'2.5rem'}}></img>
                        </div>
                       </div>
                  </div>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default ReviewSlider