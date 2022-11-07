import React from 'react'
import NavbarBrand from '../Components/HomeScreenComponents/NavbarBrand'
import ProductsCard from '../Components/HomeScreenComponents/ProductCards/ProductsCard'
import TheirWork from '../Components/HomeScreenComponents/HowTheyWork/TheirWork'
import GoliFeatures from '../Components/HomeScreenComponents/HomeFeatures/GoliFeatures'
import GoliPersonStatus from '../Components/HomeScreenComponents/HomeGoliFeature/GoliPersonStatus'
import MyVedio from '../Components/HomeScreenComponents/HomeVideo/MyVedio'
import HomeSlider from '../Components/HomeScreenComponents/HomeSlider/HomeSlider'
import SmallBanner from '../Components/HomeScreenComponents/SmallBanner/SmallBanner'
import ReviewSlider from '../Components/HomeScreenComponents/HomeReviewSlider/ReviewSlider'
const Home = () => {
  return (
    <div className='conatiner-fluid m-0 p-0 border border-0 border-success'>
      <NavbarBrand></NavbarBrand>
      {/* <ProductsCard></ProductsCard> */}
      {/* <div className='row mt-3 m-0 p-0 border border-0 border-success'>
          <HomeSlider slidesOnscreen='6' #d8d8d8></HomeSlider>
      </div> */}
      <ProductsCard backgroundColor='#d8d8d8'></ProductsCard>
      <div className='row mt-3 m-0 p-0 border border-0 border-success'>
        <ReviewSlider></ReviewSlider>
      </div>
     <div className='row my-2 my-5 m-0 p-0 border border-0 border-danger'>
       <SmallBanner backgroundColor='#000'></SmallBanner>
     </div>
      <div className='row mt-3 m-0 p-0 border border-0 border-success'>
          <HomeSlider slidesOnscreen='3'></HomeSlider>
      </div>
      <div className='row m-0 py-5 p-0 d-flex justify-content-center border border-0 border-dark'>
          <MyVedio></MyVedio>
      </div>
      <div className='row m-0 p-0'>
        <GoliFeatures></GoliFeatures> 
      </div>  
      <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
        <GoliPersonStatus backgroundColor='#e52b36'></GoliPersonStatus>  
      </div>
      <div className='row m-0 p-0'>
       <TheirWork childText="Donate a 6-month supply of essential vitamins to a child in need, through our partner Vitamin Angels." alignChild="row w-50 m-0 px-5 p-0 d-flex justify-content-end" childClassName='col-8 d-flex flex-row align-items-end justify-content-center' backgroundColor='#007789' justifyContent='end' imgUrl='https://cdn.shopify.com/s/files/1/0070/0173/5241/files/vitaminangels_logo.png?v=12623773492005356348'></TheirWork>
       <TheirWork childText="Plant a tree, through our partner Eden Reforestation Projects." alignChild="row w-50 m-0 px-5 p-0 d-flex justify-content-start" childClassName='col-8 d-flex flex-row align-items-start justify-content-center' backgroundColor='#1b2e15' justifyContent='end' imgUrl='https://cdn.shopify.com/s/files/1/0070/0173/5241/files/edenprojects_logo.png.png?130680'></TheirWork>
      </div>
    </div>
  )
}

export default Home