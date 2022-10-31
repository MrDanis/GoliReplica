import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid m-0 bg-dark text-light d-flex align-items-center justify-content-center flex-column'>
     <div className='row m-0 w-75 border border-2 border-success g-3'>
     <div class="col-4">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-4">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-4">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
     </div>
     <div className='row m-0 w-75 border border-2 border-danger'>
       <div className='col-3'>

       </div>
     </div>
     <div className='row m-0 w-75 border border-2 border-warning'>
       <div className='col-3'>

       </div>
     </div>
     <div className='row m-0 w-75 border border-2 border-primary'>
       <div className='col-3'>

       </div>
     </div>
    </div>
  )
}

export default Footer