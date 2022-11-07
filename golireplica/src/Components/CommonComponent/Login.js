import React from 'react'

const Login = (props) => {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center m-0 p-4 border border-0 border-success' style={{height:'100vh',backgroundColor:'#dc3545cf'}}>
       <div className='row w-50 d-flex align-items-center justify-content-center m-0 p-0 border  border-0 border-success'>
           <div className='col-8  p-2 shadow' style={{borderRadius:'.5rem',backgroundColor:'#DC3544'}}>
            <div className='row m-0 py-3 p-2'>
                <div className='col-12 d-flex align-items-center justify-content-center'>
                     <h3 className='text-center d-flex text-light shadow'>{props.title}</h3>
                </div>
                {
                  props.authType==='Register'?<div className='col-12 mt-3 mb-0 d-flex flex-column align-items-center'>
                  <label className='fw-bold fs-6 text-light'>Enter your Name</label>
                  <input className='w-75 p-2 text-light bg-transparent border-0 outline-none shadow myInput mt-2' placeholder='Enter your Name...'></input>
              </div>:null
                }
                <div className='col-12 mt-3 mb-0 d-flex flex-column align-items-center'>
                    <label className='fw-bold fs-6 text-light'>Enter your Email</label>
                    <input className='w-75 p-2 text-light bg-transparent border-0 outline-none shadow myInput mt-2' placeholder='Enter your Email...'></input>
                </div>
                <div className='col-12 mt-3 mb-3 d-flex flex-column align-items-center'>
                    <label className='fw-bold fs-6 text-light'>Enter your Password</label>
                    <input className=' text-light w-75 p-2 bg-transparent border-0 outline-none shadow myInput mt-1' placeholder='Enter your Password...'></input>
                </div>
                {
                   props.authType==='Register'?                
                   <div className='col-12 mt-3 mb-3 d-flex flex-column align-items-center'>
                   <label className='fw-bold fs-6 text-light'>Confirm Password</label>
                   <input className=' text-light w-75 p-2 bg-transparent border-0 outline-none shadow myInput mt-1' placeholder='Confirm Password...'></input>
                   </div>:null
                }
                <div className='col-12 mt-3 mb-3 d-flex flex-column align-items-center'>
                    <button className='btn btn-danger fw-normal text-light rounded-pill w-25 shadow w-50 p-2 fs-6 text-uppercase'>{props.authType}</button>
                </div>
                <div className='col-12 mt-3 mb-3 d-flex flex-column align-items-center'>
                    <label className='fw-bold fs-6 text-light'>If you don't have a account click here</label>
                </div>
            </div>
           </div>
       </div>
            
    </div>
  )
}

export default Login