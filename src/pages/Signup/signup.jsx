import React from 'react'
import CustomInput from '../../components/Inputs/CustomInput'
import CustomButton from '../../components/Button/CustomButton'

const signup = () => {
  return (
    <>
    <h1>Signup</h1>
      <CustomInput
        label="Username"
        type="text"
        placeholder="Enter your username"
      />
      <CustomInput
        label="Password"
        type="password"
        placeholder="Enter your Password"
      />
      <CustomInput
        label="Confirm Password"
        type="password"
        placeholder="Confirm your Password"
      />
      <CustomButton label="Sign up" />
      </>
  )
}

export default signup