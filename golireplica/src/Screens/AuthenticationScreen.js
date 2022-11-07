import React from 'react'
import Login from '../Components/CommonComponent/Login'
const AuthenticationScreen = (props) => {
  return (
    <div className='container-fluid m-0 p-0 border border-0 border-success'>
    {
     props.authType === 'Login'?<Login authType='login' title="Login Here" message="If you don't have a account click here"></Login>:<Login authType='Register' title="Register Here" message="If you already have an account click here"></Login>
    }
    </div>
  )
}

export default AuthenticationScreen