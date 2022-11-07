import React from 'react'
import SmallBannerImg from "../../../assets/Images/SmallBannerImage.png"
const SmallBanner = (props) => {
  return (
    <div className='container-fluid m-0 p-0 d-flex justify-content-center'style={{ backgroundColor:props.backgroundColor}}>
       <div className='row w-50 text-light m-0 py-4 p-0 border border-0 border-success'>
          <div className='col-3 d-flex flex-column align-items-center justify-content-end'>
             <img className='img-fluid m-0 p-0' src={SmallBannerImg} alt="test" style={{width:'8rem',height:'8rem'}} ></img>
          </div>
          <div className='col-9 m-0 py-2 p-0 d-flex flex-column align-items-start justify-content-start'>
              <h4>TRY IT, RISK-FREE!</h4>
              <h6 className='text-start my-3'>If you’re not satisfied with our product, simply contact us and we’ll give you a full, 100% hassle-free refund.</h6>
          </div>
       </div>
    </div>
  )
}

export default SmallBanner