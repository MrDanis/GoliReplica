import React from 'react'

const TheirWork = (props) => {
  return (
    <div className={props.alignChild} style={{backgroundColor:props.backgroundColor}}> 
        <div className={props.childClassName}>
          <div className='row m-0 py-4 p-0'>
             <div className='col-5 m-0 p-0 d-flex flex-wrap align-items-center justify-content-center'>
                  <img className='img-fluid w-100 m-0 p-0' src={props.imgUrl} alt='test' style={{height:'4rem'}}></img>
             </div>
             <div className='col-7 m-0 p-0'>
                <p className='fw-normal px-3 fs-5 text-light' style={{textAlign:'justify'}}>
                  {props.childText}
                </p>
             </div>
          </div>
        </div> 
    </div>
  )
}

export default TheirWork