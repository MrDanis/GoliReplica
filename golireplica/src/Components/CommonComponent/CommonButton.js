import React from 'react'
import { Link } from 'react-router-dom'
// Two types of the props should be pass
// btn text
// link to be moved
const CommonButton = (props) => {
  return (
    <button className={props.btnSize} style={{backgroundColor:props.bgBtnColor}}>
    <Link to={'/'} className='text-decoration-none text-light text-uppercase'>
       {props.title}
    </Link>
  </button>
  )
}

export default CommonButton