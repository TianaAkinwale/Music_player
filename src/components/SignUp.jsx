//Sign up component
import React, { useState } from 'react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mail: '',
  })

  const fNameHandler = (e) => {
    setFormData(prevState => ({
      ...prevState,
      firstName: e.target.value,
    }))
  }
  const lNameHandler = (e) => {
    setFormData(prevState => ({
      ...prevState,
      lastName: e.target.value,
    }))
  }
  const mailHandler = (e) => {
    setFormData(prevState => ({
      ...prevState,
      mail: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      firstName: '',
      lastName: '',
      mail: '',
    });
    // Do something with the form data
  }

  return (
    <div className='bg-blue-400 text-center m-[26px] px-[20px] py-[20px] rounded-[12px] shadow-md'>
      <p className=" ">Yo! Sign Up</p>
      <form onSubmit={handleSubmit}>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[180px]'
          type="text" id="fName" onChange={fNameHandler} placeholder="First Name" /* required *//>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[180px]'
          type="text" id="lName" onChange={lNameHandler} placeholder="Last Name"/>
        <input className='rounded-[8px] px-[9px] py-[4px] m-[3px] mt-[30px] w-[180px]'
          type="email" id="mail" onChange={mailHandler} placeholder="Email" /* required *//><br/>
        <button className='bg-red-700 rounded-[13px] py-[8px] px-[85px] m-[16px] text-white cursor-pointer'>Sign Up</button>
      </form> 
    </div>
  )
}

export default SignUp
