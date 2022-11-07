import React from 'react'
import GolipersonBack from '../../../assets/Images/GoliPersonal.png'
import GoodGoli from '../../../assets/Images/goodGoli.png'
import CommonButton from '../../CommonComponent/CommonButton'
import './GoodGli.css'
const GoliPersonStatus = (props) => {
  return (
    <div className='row m-0 p-0 d-flex align-items-center justify-content-center' style={{backgroundColor:props.backgroundColor}}>
    <div className='w-75 m-0 py-0 p-0 d-flex flex-row'>
       <div className='col-12 col-md-7 m-0 p-0 order-2 order-md-1'>
        <img className='img-fluid mb-4 mt-5 m-0 p-0 goodGoli' src={GoodGoli} alt='test'></img>\
        <p className='fw-bold mb-3 fs-3 text-light'>At the core of it all, we lead with purpose.</p>
        <CommonButton btnSize='btn py-3 w-25 fs-5 fw-bold' bgBtnColor="#000" title='Learn More'></CommonButton>
        <p className='fw-normal mt-3 fs-4 text-light'>For every purchase made at goli.com, we will:</p>
       </div>
       <div className='col-12 col-md-5 m-0 p-0 order-1 order-md-2'>
             <img className='img-fluid m-0 p-0' src={GolipersonBack} alt='test'></img>
       </div>
    </div>
    </div>
  )
}

export default GoliPersonStatus