import React from 'react'
import {RegisterContextProvider} from '../../context/RegisterContextProvider'
import RegisterForm from './RegisterForm';
const Register = () => {
  
  return (
    <RegisterContextProvider>
      <RegisterForm/>
    </RegisterContextProvider>
  )
}

export default Register